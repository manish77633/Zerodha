const SellWindow = ({ selectedStock }) => {
  const { closeSellWindow } = useContext(GeneralContext);
  const [qty, setQty] = useState(1);

  const handleSell = async () => {
    try {
      await axios.post("https://zerodha-u5jq.onrender.com/newOrder", {
        name: selectedStock.name,
        qty: qty,
        price: selectedStock.price,
        mode: "SELL",
        product: "CNC",
        addedTime: new Date().toLocaleTimeString()
      });
      alert("Sold Successfully!");
      closeSellWindow();
      window.location.reload(); 
    } catch (err) {
      alert(err.response.data.error); // "Insufficient Qty" wala error dikhayega
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-80">
        <h2 className="text-red-500 font-bold mb-4">Sell {selectedStock.name}</h2>
        <input type="number" value={qty} onChange={(e) => setQty(e.target.value)} className="border p-2 w-full mb-4" />
        <div className="flex gap-2">
          <button onClick={handleSell} className="bg-red-500 text-white px-4 py-2 flex-1">Sell</button>
          <button onClick={closeSellWindow} className="bg-gray-200 px-4 py-2">Cancel</button>
        </div>
      </div>
    </div>
  );
};