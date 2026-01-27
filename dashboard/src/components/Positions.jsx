import React from "react";
// axios aur useEffect hataya taaki delay na ho

// 1. Dashboard.jsx se 'allPositions' prop ko receive karo
const Positions = ({ allPositions = [] }) => {
  
  // Taaki niche ka tera purana code (positionsData.map etc.) bina badle chal jaye:
  const positionsData = allPositions;

  // Total P&L calculate karne ka dynamic logic
  const totalPnL = positionsData.reduce((acc, stock) => {
    const pnl = (Number(stock.price) - Number(stock.avg)) * Number(stock.qty);
    return acc + pnl;
  }, 0).toFixed(2);

  return (
    <div className="p-4 md:p-8 animate-in fade-in duration-500 font-normal">
      <h3 className="text-gray-900 text-[18px] mb-6 font-normal">
        Positions ({positionsData.length})
      </h3>

      <div className="overflow-x-auto border-b border-gray-100">
        <table className="w-full text-left border-collapse min-w-200">
          <thead>
            <tr className="text-gray-400 text-[12px] border-b border-gray-300">
              <th className="py-3 font-normal w-[10%]">Product</th>
              <th className="py-3 font-normal w-[25%] text-center">Instrument</th>
              <th className="py-3 font-normal text-right w-[10%]">Qty.</th>
              <th className="py-3 font-normal text-right w-[15%]">Avg.</th>
              <th className="py-3 font-normal text-right w-[15%]">LTP</th>
              <th className="py-3 font-normal text-right w-[15%]">P&L</th>
              <th className="py-3 font-normal text-right w-[10%]">Chg.</th>
            </tr>
          </thead>
          <tbody className="text-[13px]">
            {positionsData.map((stock, index) => {
              // Har row ka profit/loss dynamic calculation
              const rowPnL = ((Number(stock.price) - Number(stock.avg)) * Number(stock.qty)).toFixed(2);
              const isLoss = Number(rowPnL) < 0;

              return (
                <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="py-4">
                    <span className="bg-red-50 text-red-400 px-2 py-0.5 rounded-sm text-[10px] border border-red-100 font-medium">
                      {stock.product}
                    </span>
                  </td>
                  <td className="py-4 text-gray-700 text-center font-semibold">{stock.name}</td>
                  <td className="py-4 text-right text-gray-600 font-semibold">{stock.qty}</td>
                  <td className="py-4 text-right text-gray-600 font-semibold">{stock.avg.toFixed(2)}</td>
                  <td className="py-4 text-right text-gray-600 font-semibold">{stock.price.toFixed(2)}</td>
                  <td className={`py-4 text-right ${isLoss ? "text-red-500 font-semibold" : "text-green-500 font-semibold"}`}>
                    {rowPnL}
                  </td>
                  <td className={`py-4 text-right ${stock.day.startsWith("-") ? "text-red-500 font-semibold" : "text-green-500 font-semibold"}`}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
            
            {/* Total Row integrated into table for perfect alignment */}
            <tr className="border-b border-gray-300 font-normal">
              <td colSpan="4"></td>
              <td className="py-4 text-right font-semibold text-gray-900 text-[14px]">Total</td>
              <td className={`py-4 text-right text-[14px] font-semibold ${Number(totalPnL) < 0 ? "text-red-500" : "text-green-500"}`}>
                {totalPnL}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;