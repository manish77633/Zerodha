  import React, { useState, useContext } from "react";
  import axios from "axios";
  import GeneralContext from "./Context";

  const BuyWindow = ({ selectedStock }) => {
    const { closeBuyWindow, refreshDashboard } = useContext(GeneralContext);
    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(selectedStock?.price || 0);
    
    // 1. Naya state variable product ke liye (Default CNC rakhte hain)
    const [product, setProduct] = useState("CNC"); 

    const handleBuyClick = async () => {
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
        // 2. Order place karo - Ab isme product aur exchange (NSE) bhi jayega
        await axios.post("https://zerodha-u5jq.onrender.com/newOrder", {
          name: selectedStock.name,
          qty: qty,
          price: price,
          mode: "BUY",
          product: product, // CNC ya MIS jayega
          exchange: "NSE",  // Hardcoded NSE
          addedTime: new Date().toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          })
        });

        console.log("Order Successful with product:", product);

        setTimeout(() => {
          refreshDashboard();
        }, 500);

        closeBuyWindow();
      } catch (err) {
        alert("Order failed! Please try again.");
        console.log(err);
      }
    };

    return (
      <div className="fixed inset-0 bg-gray-900/40 flex items-center justify-center z-[1000]">
        <div className="bg-white w-100 shadow-2xl rounded-md overflow-hidden animate-in fade-in zoom-in duration-200">
          
          <div className="bg-blue-500 text-white p-4">
            <div className="flex justify-between items-center font-semibold">
              {/* Yahan bhi dynamic product dikhao */}
              <span>Buy {selectedStock?.name} x {qty} Qty ({product})</span>
              <span className="text-sm">NSE: ₹{selectedStock?.price.toFixed(2)}</span>
            </div>
          </div>

          <div className="p-6">
            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <label className="text-xs text-gray-500 block mb-1">Qty</label>
                <input 
                  type="number" 
                  value={qty} 
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="w-full border border-gray-200 p-2 text-sm outline-none focus:border-blue-400"
                />
              </div>
              <div className="flex-1">
                <label className="text-xs text-gray-500 block mb-1">Price</label>
                <input 
                  type="number" 
                  step="0.05"
                  value={price} 
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full border border-gray-200 p-2 text-sm outline-none focus:border-blue-400"
                />
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs text-gray-600">
              {/* 3. Radio buttons pe onChange lagao */}
              <label className="flex items-center gap-1 cursor-pointer">
                <input 
                  type="radio" 
                  name="productType" 
                  value="MIS" 
                  checked={product === "MIS"}
                  onChange={(e) => setProduct(e.target.value)}
                /> Intraday <span className="text-[10px] text-gray-400">MIS</span>
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input 
                  type="radio" 
                  name="productType" 
                  value="CNC" 
                  checked={product === "CNC"}
                  onChange={(e) => setProduct(e.target.value)}
                /> Longterm <span className="text-[10px] text-gray-400">CNC</span>
              </label>
            </div>
          </div>

          <div className="bg-gray-50 p-4 flex justify-between items-center border-t border-gray-100">
            <div className="text-[11px] text-gray-400">
              Margin required <span className="text-blue-500 font-bold">₹{(qty * price).toLocaleString('en-IN')}</span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={handleBuyClick}
                className="bg-blue-500 text-white px-6 py-2 text-sm font-semibold rounded-sm hover:bg-blue-600 transition-colors cursor-pointer"
              >
                Buy
              </button>
              <button 
                onClick={closeBuyWindow}
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

  export default BuyWindow;