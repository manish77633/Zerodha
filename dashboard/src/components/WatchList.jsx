import React, { useState } from "react";
import { watchlist as initialWatchlist } from "../data/data";
import { BarChart2, ChevronDown, ChevronUp, Plus, Trash2, MoreHorizontal, Send, ShoppingCart } from "lucide-react";
import { v4 as uuidv4 } from 'uuid'; // uuid installation: npm i uuid

const WatchList = () => {
  const [stocks, setStocks] = useState(initialWatchlist);

  return (
    <div className="w-112.5 border-r border-gray-100 h-[calc(100vh-56px)] overflow-y-auto bg-white">
      {/* Search Bar */}
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center text-[12px] text-gray-400">
        <input 
          type="text" 
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx" 
          className="outline-none w-full bg-transparent text-gray-700 placeholder:text-gray-400"
        />
        <span className="ml-2 whitespace-nowrap">{stocks.length} / 50</span>
      </div>

      {/* Stocks List */}
      <ul>
        {stocks.map((stock) => {
          const id = uuidv4(); // Unique ID for each list item
          return (
            <li 
              key={id} 
              className="relative flex justify-between items-center px-4 py-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer group transition-all duration-200"
            >
              {/* Stock Name */}
              <span className={`text-[13px] font-medium ${stock.isDown ? 'text-red-400' : 'text-green-400'}`}>
                {stock.name}
              </span>

              {/* Price and Change (Visible when NOT hovering) */}
              <div className="flex items-center gap-4 text-[13px] group-hover:hidden">
                <span className="text-gray-400">{stock.percent}</span>
                <span className={stock.isDown ? 'text-red-500' : 'text-green-500'}>
                  {stock.isDown ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                </span>
                <span className="font-medium text-gray-700">{stock.price.toFixed(2)}</span>
              </div>

              {/* Hover Actions Buttons (Visible ONLY when hovering) */}
              <div className="hidden group-hover:flex items-center bg-gray-50 gap-1 pl-4">
                <button 
                  onClick={() => console.log(`Buy ${stock.name}`)}
                  className="bg-blue-500 text-white p-1 rounded-sm hover:bg-blue-600 transition-colors"
                  title="Buy (B)"
                >
                  <span className="px-4 text-[11px] font-bold">B</span>
                </button>
                <button 
                  onClick={() => console.log(`Sell ${stock.name}`)}
                  className="bg-orange-500 text-white p-1 rounded-sm hover:bg-orange-600 transition-colors"
                  title="Sell (S)"
                >
                  <span className="px-4 text-[11px] font-bold">S</span>
                </button>
                <button className="text-gray-500 p-1 hover:bg-gray-200 rounded transition-colors border border-gray-300">
                  <BarChart2 size={20} />
                </button>
                <button className="text-gray-500 p-1 hover:bg-gray-200 rounded transition-colors border border-gray-300">
                   <Trash2 size={20} />
                </button>
                <button className="text-gray-500 p-1 hover:bg-gray-200 rounded transition-colors border border-gray-300">
                   <MoreHorizontal size={20} />
                </button>
              </div>
            </li>
          );
        })}
      </ul> 
    </div>
  );
};

export default WatchList;