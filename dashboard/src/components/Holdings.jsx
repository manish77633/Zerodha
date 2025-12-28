import React from "react";
import { holdings } from "../data/data"; 

const Holdings = () => {
  // 1. Overall Summary Calculations - Adding Number() for safety
  const totalInvestment = holdings.reduce((acc, stock) => 
    acc + (Number(stock.avg) * Number(stock.qty)), 0);
    
  const totalCurrentValue = holdings.reduce((acc, stock) => 
    acc + (Number(stock.price) * Number(stock.qty)), 0);
    
  const totalPnL = totalCurrentValue - totalInvestment;

  return (
    <div className="p-4 md:p-2 animate-in fade-in duration-500 font-normal">
      <h3 className="text-gray-500 text-lg mb-6 font-normal">Holdings ({holdings.length})</h3>

      <div className="overflow-x-auto border-b border-gray-100 mb-8">
        <table className="w-full text-left border-collapse min-w-200">
          <thead>
            <tr className="text-black text-[14px] uppercase border-b border-gray-400">
              <th className="py-2 font-semibold">Instrument</th>
              <th className="py-2 font-semibold text-right">Qty.</th>
              <th className="py-2 font-semibold text-right">Avg. cost</th>
              <th className="py-2 font-semibold text-right">LTP</th>
              <th className="py-2 font-semibold text-right">Cur. val</th>
              <th className="py-2 font-semibold text-right">P&L</th>
              <th className="py-2 font-semibold text-right">Net chg.</th>
              <th className="py-2 font-semibold text-right">Day chg.</th>
            </tr>
          </thead>
          <tbody className="text-[13px]">
            {holdings.map((stock, index) => {
              // Explicitly convert to Numbers to ensure math works
              const qty = Number(stock.qty);
              const avg = Number(stock.avg);
              const price = Number(stock.price);

              const curValue = qty * price;
              const actualPnL = curValue - (qty * avg);
              
              const netChangePercent = (((price - avg) / avg) * 100).toFixed(2);
              const isLoss = actualPnL < 0;

              return (
                <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="py-1.5 text-gray-700 font-medium">{stock.name}</td>
                  <td className="py-1.5 text-right text-gray-700 font-semibold">{qty}</td>
                  <td className="py-1.5 text-right text-gray-700 font-semibold">{avg.toFixed(2)}</td>
                  <td className="py-1.5 text-right text-gray-700 font-semibold">{price.toFixed(2)}</td>
                  {/* Cur Val Update Check */}
                  <td className="py-1.5 text-right text-gray-700 font-semibold">{curValue.toFixed(2)}</td>
                  {/* P&L Update Check */}
                  <td className={`py-1.5 text-right ${isLoss ? "text-red-600 font-semibold " : "text-green-600 font-semibold"}`}>
                    {actualPnL.toFixed(2)}
                  </td>
                  {/* Net Chg Update Check */}
                  <td className={`py-1.5 text-right ${Number(netChangePercent) < 0 ? "text-red-600 font-semibold " : "text-green-600 font-semibold"}`}>
                    {netChangePercent}%
                  </td>
                  <td className={`py-1.5 text-right ${stock.day.startsWith("-") ? "text-red-600 font-semibold " : "text-green-600 font-semibold"}`}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex gap-16 mt-10 border-t border-gray-100 pt-6">
        <div>
          <p className="text-2xl font-normal text-gray-700">{totalInvestment.toFixed(2)}</p>
          <p className="text-[11px] text-gray-400 uppercase mt-1">Total investment</p>
        </div>
        <div>
          <p className="text-2xl font-normal text-gray-700">{totalCurrentValue.toFixed(2)}</p>
          <p className="text-[11px] text-gray-400 uppercase mt-1">Current value</p>
        </div>
        <div>
          <p className={`text-2xl font-normal ${totalPnL >= 0 ? "text-green-500" : "text-red-500"}`}>
            {totalPnL.toFixed(2)} ({((totalPnL/totalInvestment)*100).toFixed(2)}%)
          </p>
          <p className="text-[11px] text-gray-400 uppercase mt-1">Total P&L</p>
        </div>
      </div>
    </div>
  );
};

export default Holdings;