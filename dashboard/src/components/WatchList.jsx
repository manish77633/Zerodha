import React, { useState, useContext } from "react"; // useContext add kiya
import { watchlist as initialWatchlist } from "../data/data";
import { BarChart2, ChevronDown, ChevronUp, Trash2, MoreHorizontal } from "lucide-react";
import { v4 as uuidv4 } from 'uuid';
import { GeneralContext } from "./GeneralContext";
import { DoughnutChart } from "./DoughnutChart";




const WatchList = () => {
  const { openBuyWindow } = useContext(GeneralContext); // Hook call
  const [stocks] = useState(initialWatchlist);

 const labels = initialWatchlist.map((subArray) => subArray["name"]);
 const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: initialWatchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      
    <div className="w-112.5 border-r border-gray-100 h-[calc(100vh-56px)] overflow-y-auto bg-white">
      <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center text-[12px] text-gray-400">
        <input 
          type="text" 
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx" 
          className="outline-none w-full bg-transparent text-gray-700 placeholder:text-gray-400"
        />
        <span className="ml-2 whitespace-nowrap">{stocks.length} / 50</span>
      </div>

      <ul>
        {stocks.map((stock) => {
          const id = uuidv4();
          return (
            <li key={id} className="relative flex justify-between items-center px-4 py-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer group transition-all duration-200">
              <span className={`text-[13px] font-medium ${stock.isDown ? 'text-red-400' : 'text-green-400'}`}>
                {stock.name}
              </span>

              <div className="flex items-center gap-4 text-[13px] group-hover:hidden">
                <span className="text-gray-400">{stock.percent}</span>
                <span className={stock.isDown ? 'text-red-500' : 'text-green-500'}>
                  {stock.isDown ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                </span>
                <span className="font-medium text-gray-700">{stock.price.toFixed(2)}</span>
              </div>

              <div className="hidden group-hover:flex items-center bg-gray-50 gap-1 pl-4">
                <button 
                  onClick={() => openBuyWindow(stock)}
                  className="bg-blue-500 cursor-pointer text-white p-1 rounded-sm hover:bg-blue-600 transition-colors"
                >
                  <span className="px-4 text-[11px] font-bold">B</span>
                </button>
                <button className="bg-orange-500 cursor-pointer text-white p-1 rounded-sm hover:bg-orange-600 transition-colors">
                  <span className="px-4 text-[11px] font-bold">S</span>
                </button>
                <button className="text-gray-500 cursor-pointer p-1 hover:bg-gray-200 rounded border border-gray-300">
                  <BarChart2 size={20} />
                </button>
                <button className="text-gray-500 p-1 cursor-pointer hover:bg-gray-200 rounded border border-gray-300">
                   <Trash2 size={20} />
                </button>
                <button className="text-gray-500 p-1 cursor-pointer hover:bg-gray-200 rounded border border-gray-300">
                   <MoreHorizontal size={20} />
                </button>
              </div>
            </li>
          );
        })}
      </ul> 
    </div>
    <DoughnutChart data={data} />
    </>
  );
};

export default WatchList;