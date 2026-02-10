import React, { useState, useContext } from "react";
import { watchlist as initialWatchlist } from "../data/data";
import { 
  BarChart2, ChevronDown, ChevronUp, Trash2, MoreHorizontal, X 
} from "lucide-react"; 
import GeneralContext from "./Context";
import { DoughnutChart } from "./DoughnutChart";

const WatchList = () => {
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);
  const [stocks] = useState(initialWatchlist);
  
  // States
  const [activeStockId, setActiveStockId] = useState(null); // Mobile row toggle ke liye
  const [isChartOpen, setIsChartOpen] = useState(false);    // Chart visibility ke liye

  // Toggle handlers
  const handleStockClick = (id) => {
    setActiveStockId(activeStockId === id ? null : id);
  };

  const toggleChart = () => {
    setIsChartOpen(!isChartOpen);
  };

  // Chart Data
  const labels = initialWatchlist.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: initialWatchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)", "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)", "rgba(153, 102, 255, 0.5)", "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col h-full bg-white relative">
      
      {/* 1. HEADER SECTION (Clean - No Chart Button) */}
      <div className="sticky top-0 bg-white z-20 px-4 py-3 border-b border-gray-200 flex justify-between items-center shadow-sm">
        <input 
          type="text" 
          placeholder="Search eg: infy, bse..." 
          className="outline-none w-full bg-transparent text-gray-700 placeholder:text-gray-400 font-medium text-sm"
        />
        <span className="whitespace-nowrap bg-gray-100 text-gray-500 px-2 py-1 rounded text-[10px] font-bold">
          {stocks.length} / 50
        </span>
      </div>

      {/* 2. WATCHLIST ITEMS */}
      <div className="flex-1 overflow-y-auto pb-20 md:pb-0">
        <ul>
          {stocks.map((stock) => {
            const id = stock.name;
            const isActive = activeStockId === id;

            return (
              <li 
                key={id} 
                className="relative border-b border-gray-50 cursor-pointer group transition-all duration-200"
                onClick={() => handleStockClick(id)}
              >
                <div className={`flex justify-between items-center px-4 py-3 hover:bg-gray-50 ${isActive ? 'bg-gray-50' : ''}`}>
                  
                  {/* Stock Name */}
                  <div className="flex flex-col">
                    <span className={`text-[13px] font-medium ${stock.isDown ? 'text-red-500' : 'text-green-600'}`}>
                      {stock.name}
                    </span>
                    <span className="text-[10px] text-gray-400 md:hidden">NSE</span>
                  </div>

                  {/* Price Info (Hidden when Active/Hovered) */}
                  <div className={`flex items-center gap-3 text-[13px] ${isActive ? 'hidden' : 'flex'} md:flex md:group-hover:hidden`}>
                    <span className={`text-[11px] ${stock.isDown ? 'text-red-500' : 'text-green-500'}`}>
                      {stock.percent}
                    </span>
                    <span className={stock.isDown ? 'text-red-500' : 'text-green-500'}>
                      {stock.isDown ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
                    </span>
                    <span className={`font-medium ${stock.isDown ? 'text-red-500' : 'text-green-600'}`}>
                      {stock.price.toFixed(2)}
                    </span>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className={`${isActive ? 'flex' : 'hidden'} md:hidden md:group-hover:flex items-center gap-2 animate-in fade-in slide-in-from-right-4 duration-200`}>
                    
                    <button 
                      onClick={(e) => { e.stopPropagation(); openBuyWindow(stock); }}
                      className="bg-blue-500 text-white px-3 py-1.5 rounded-[3px] hover:bg-blue-600 shadow-sm"
                    >
                      <span className="text-[11px] font-bold">B</span>
                    </button>
                    
                    <button 
                      onClick={(e) => { e.stopPropagation(); openSellWindow(stock); }}
                      className="bg-orange-500 text-white px-3 py-1.5 rounded-[3px] hover:bg-orange-600 shadow-sm"
                    >
                      <span className="text-[11px] font-bold">S</span>
                    </button>
                    
                    {/* Extra Options */}
                    <div className="flex gap-1">
                       
                       {/* --- YAHAN CHANGE KIYA HAI --- */}
                       {/* Is button pe click karne se Chart open hoga */}
                       <button 
                         onClick={(e) => { 
                           e.stopPropagation(); // Taaki row band na ho
                           toggleChart();       // Chart Modal Open
                         }} 
                         className="text-gray-500 p-1.5 hover:bg-white rounded border border-transparent hover:border-gray-200 transition-all text-blue-500 hover:text-blue-600"
                         title="View Analytics"
                       >
                         <BarChart2 size={16} />
                       </button>

                       <button className="text-gray-500 p-1.5 hover:bg-white rounded border border-transparent hover:border-gray-200 transition-all">
                         <Trash2 size={16} />
                       </button>
                       <button className="text-gray-500 p-1.5 hover:bg-white rounded border border-transparent hover:border-gray-200 transition-all">
                         <MoreHorizontal size={16} />
                       </button>
                    </div>

                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 3. CHART MODAL */}
      {isChartOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg rounded-lg shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <h3 className="text-gray-700 font-medium">Market Overview</h3>
              <button onClick={toggleChart} className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 flex justify-center items-center bg-gray-50/50">
              <div className="w-full max-w-[300px]">
                <DoughnutChart data={data} />
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default WatchList;