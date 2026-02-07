import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import GeneralContext from "./Context";

const SellWindow = ({ selectedStock }) => {
  // 1. Safety Check: Agar stock select nahi hua toh kuch mat dikhao
  if (!selectedStock) return null;

  const { closeSellWindow, refreshDashboard } = useContext(GeneralContext);
  
  // States
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);
  const [product, setProduct] = useState("CNC"); // Default Longterm (CNC)

  // 2. Effect: Jab bhi stock change ho, price aur qty ko fresh load karo
  useEffect(() => {
    if (selectedStock) {
      setPrice(Number(selectedStock.price).toFixed(2));
      setQty(1);
    }
  }, [selectedStock]);

  const handleSellClick = async () => {
      // Input Validation
  if (!qty || qty <= 0) {
    alert("Please enter a valid quantity (greater than 0)");
    return;
  }
  
  if (!price || price <= 0) {
    alert("Please enter a valid price (greater than 0)");
    return;
  }
    try {
      // 3. Data Type and Format Check
      const orderData = {
        name: selectedStock.name,
        qty: Number(qty),          // Math ke liye number zaroori hai
        price: Number(price),      // String concatenation se bachne ke liye
        mode: "SELL",              // Backend logic se match hona chahiye
        product: product,          // CNC ya MIS
        exchange: "NSE",
        addedTime: new Date().toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        })
      };

      console.log("Placing Sell Order:", orderData);

      await axios.post("https://zerodha-u5jq.onrender.com/newOrder", orderData);

      alert(`${selectedStock.name} Sold Successfully!`);
      
      // Dashboard refresh logic
if (refreshDashboard) {
  refreshDashboard();
} else {
  window.location.reload(); 
}

closeSellWindow();
    } catch (err) {
      // Backend se "Insufficient Shares" wala error pakadne ke liye
      const errorMsg = err.response?.data?.error || "Sell order failed! Check your holdings.";
      alert(errorMsg);
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900/40 flex items-center justify-center z-[1000] animate-in fade-in duration-200">
      <div className="bg-white w-100 shadow-2xl rounded-md overflow-hidden zoom-in duration-200">
        
        {/* Header - Red color for Sell */}
        <div className="bg-red-500 text-white p-4">
          <div className="flex justify-between items-center font-semibold">
            <span>Sell {selectedStock.name} x {qty} Qty</span>
            <span className="text-sm">NSE: ₹{Number(price).toFixed(2)}</span>
          </div>
        </div>

        <div className="p-6">
          {/* Product Type (Radio Buttons) */}
          <div className="flex items-center gap-6 text-xs text-gray-600 mb-6 border-b pb-4">
            <label className="flex items-center gap-1 cursor-pointer">
              <input 
                type="radio" 
                name="sellProductType" 
                value="MIS" 
                checked={product === "MIS"}
                onChange={(e) => setProduct(e.target.value)}
              /> Intraday <span className="text-[10px] text-gray-400 font-bold">MIS</span>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input 
                type="radio" 
                name="sellProductType" 
                value="CNC" 
                checked={product === "CNC"}
                onChange={(e) => setProduct(e.target.value)}
              /> Longterm <span className="text-[10px] text-gray-400 font-bold">CNC</span>
            </label>
          </div>

          <div className="flex gap-4 mb-2">
            <div className="flex-1">
              <label className="text-xs text-gray-500 block mb-1">Qty</label>
              <input 
                type="number" 
                min="1"
                value={qty} 
                onChange={(e) => setQty(e.target.value)}
                className="w-full border border-gray-200 p-2 text-sm outline-none focus:border-red-400 rounded-sm"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs text-gray-500 block mb-1">Price</label>
              <input 
                type="number" 
                step="0.05"
                value={price} 
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border border-gray-200 p-2 text-sm outline-none focus:border-red-400 rounded-sm"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 flex justify-between items-center border-t border-gray-100">
          <div className="text-[11px] text-gray-400">
            Total Value: <span className="text-red-500 font-bold">₹{(qty * price).toLocaleString('en-IN')}</span>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handleSellClick}
              className="bg-red-500 text-white px-8 py-2 text-sm font-semibold rounded-sm hover:bg-red-600 transition-colors cursor-pointer"
            >
              Sell
            </button>
            <button 
              onClick={closeSellWindow}
              className="border border-gray-300 text-gray-600 px-6 py-2 text-sm rounded-sm hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellWindow;