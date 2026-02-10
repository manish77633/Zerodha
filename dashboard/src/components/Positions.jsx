import React from "react";

const Positions = ({ allPositions = [] }) => {
  const positionsData = allPositions;
  
  // Total P&L calculate karne ka dynamic logic
  const totalPnL = positionsData.reduce((acc, stock) => {
    const pnl = (Number(stock.price) - Number(stock.avg)) * Number(stock.qty);
    return acc + pnl;
  }, 0).toFixed(2);

  const formatValue = (val) => {
    return Number(val).toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header Section - Sticky */}
      <div className="px-4 md:px-6 py-4 border-b border-gray-100  top-0 bg-white z-10">
        <h3 className="text-gray-900 text-lg md:text-xl font-medium">
          Positions ({positionsData.length})
        </h3>
      </div>

      {/* Empty State */}
      {positionsData.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 md:p-20">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-10 h-10 md:w-12 md:h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <p className="text-gray-500 text-sm md:text-base">No open positions</p>
          <p className="text-gray-400 text-xs md:text-sm mt-1">Your active positions will appear here</p>
        </div>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="sticky top-[57px] bg-white z-10">
                <tr className="text-gray-500 text-[12px] md:text-[13px] uppercase border-b border-gray-300">
                  <th className="py-3 px-4 font-semibold">Product</th>
                  <th className="py-3 px-3 font-semibold">Instrument</th>
                  <th className="py-3 px-3 font-semibold text-right">Qty.</th>
                  <th className="py-3 px-3 font-semibold text-right">Avg.</th>
                  <th className="py-3 px-3 font-semibold text-right">LTP</th>
                  <th className="py-3 px-3 font-semibold text-right">P&L</th>
                  <th className="py-3 px-3 font-semibold text-right">Chg.</th>
                </tr>
              </thead>
              <tbody className="text-[13px]">
                {positionsData.map((stock, index) => {
                  const rowPnL = ((Number(stock.price) - Number(stock.avg)) * Number(stock.qty)).toFixed(2);
                  const isLoss = Number(rowPnL) < 0;
                  
                  return (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">
                        <span className={`px-2.5 py-1 rounded text-[10px] font-semibold ${
                          stock.product === "CNC" 
                          ? "bg-blue-100 text-blue-600" 
                          : "bg-red-100 text-red-600"
                        }`}>
                          {stock.product}
                        </span>
                      </td>
                      <td className="py-4 px-3 text-gray-800 font-semibold">{stock.name}</td>
                      <td className="py-4 px-3 text-right text-gray-700 font-semibold">{stock.qty}</td>
                      <td className="py-4 px-3 text-right text-gray-700 font-semibold">₹{formatValue(stock.avg)}</td>
                      <td className="py-4 px-3 text-right text-gray-700 font-semibold">₹{formatValue(stock.price)}</td>
                      <td className={`py-4 px-3 text-right font-bold ${isLoss ? "text-red-600" : "text-green-600"}`}>
                        {isLoss ? "" : "+"}₹{formatValue(rowPnL)}
                      </td>
                      <td className={`py-4 px-3 text-right font-semibold ${stock.day.startsWith("-") ? "text-red-600" : "text-green-600"}`}>
                        {stock.day}
                      </td>
                    </tr>
                  );
                })}
                
                {/* Total Row */}
                <tr className="bg-gray-50 border-t-2 border-gray-300">
                  <td colSpan="5" className="py-4 px-4 text-right font-semibold text-gray-900 text-[14px]">
                    Total P&L
                  </td>
                  <td className={`py-4 px-3 text-right text-[15px] font-bold ${Number(totalPnL) < 0 ? "text-red-600" : "text-green-600"}`}>
                    {Number(totalPnL) < 0 ? "" : "+"}₹{formatValue(totalPnL)}
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden">
            {positionsData.map((stock, index) => {
              const rowPnL = ((Number(stock.price) - Number(stock.avg)) * Number(stock.qty)).toFixed(2);
              const isLoss = Number(rowPnL) < 0;
              
              return (
                <div key={index} className="p-4 border-b border-gray-200 hover:bg-gray-50 active:bg-gray-100 transition-colors">
                  {/* Header Row */}
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-gray-900 font-bold text-[16px] mb-1">{stock.name}</p>
                      <span className={`px-2.5 py-1 rounded text-[10px] font-bold ${
                        stock.product === "CNC" 
                        ? "bg-blue-100 text-blue-600" 
                        : "bg-red-100 text-red-600"
                      }`}>
                        {stock.product}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className={`text-[18px] font-bold ${isLoss ? "text-red-600" : "text-green-600"}`}>
                        {isLoss ? "" : "+"}₹{formatValue(rowPnL)}
                      </p>
                      <p className={`text-[12px] font-semibold ${stock.day.startsWith("-") ? "text-red-600" : "text-green-600"}`}>
                        {stock.day}
                      </p>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-3 gap-3 text-[13px]">
                    <div>
                      <p className="text-gray-500 text-[11px] mb-0.5">Qty</p>
                      <p className="text-gray-900 font-semibold">{stock.qty}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[11px] mb-0.5">Avg</p>
                      <p className="text-gray-900 font-semibold">₹{formatValue(stock.avg)}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[11px] mb-0.5">LTP</p>
                      <p className="text-gray-900 font-semibold">₹{formatValue(stock.price)}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Total Card */}
            <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-t-2 border-gray-300 sticky bottom-0">
              <div className="flex justify-between items-center">
                <p className="text-gray-700 font-semibold text-[15px]">Total P&L</p>
                <p className={`text-[20px] font-bold ${Number(totalPnL) < 0 ? "text-red-600" : "text-green-600"}`}>
                  {Number(totalPnL) < 0 ? "" : "+"}₹{formatValue(totalPnL)}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Positions;