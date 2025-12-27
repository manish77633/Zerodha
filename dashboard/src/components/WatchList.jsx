import React from 'react';

const WatchList = () => {
  const stocks = [
    { name: "INFY", price: "1555.45", change: "-1.60%", isDown: true },
    { name: "ONGC", price: "116.8", change: "-0.09%", isDown: true },
    { name: "TCS", price: "3194.8", change: "-0.25%", isDown: true },
    { name: "KPITTECH", price: "266.45", change: "3.54%", isDown: false },
    { name: "RELIANCE", price: "2112.4", change: "1.44%", isDown: false },
    { name: "HUL", price: "512.4", change: "1.04%", isDown: false },
  ];

  return (
    <div className="w-[450px] border-r border-gray-100 h-[calc(100vh-56px)] overflow-y-auto bg-white">
      {/* Search Bar */}
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center text-[12px] text-gray-700">
        <span>Search eg:infy, bse, nifty fut</span>
        <span>9 / 50</span>
      </div>

      {/* Stocks List */}
      <ul>
        {stocks.map((stock, index) => (
          <li key={index} className="flex justify-between items-center px-4 py-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer group">
            <span className={`text-[13px] font-medium ${stock.isDown ? 'text-red-400' : 'text-green-400'}`}>
              {stock.name}
            </span>
            <div className="flex items-center gap-4 text-[13px]">
              <span className="text-gray-400">{stock.change}</span>
              <span className={stock.isDown ? 'text-red-500' : 'text-green-500'}>
                {stock.isDown ? '↓' : '↑'}
              </span>
              <span className="font-medium text-gray-700">{stock.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WatchList;