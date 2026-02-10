import React from "react";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = ({ allHoldings = [] }) => {
  const holdingsData = allHoldings;

  // --- Calculations ---
  const totalInvestment = holdingsData.reduce((acc, stock) =>
    acc + (Number(stock.avg) * Number(stock.qty)), 0);

  const totalCurrentValue = holdingsData.reduce((acc, stock) =>
    acc + (Number(stock.price) * Number(stock.qty)), 0);

  const totalPnL = totalCurrentValue - totalInvestment;

  // Helper function
  const formatValue = (val) => {
    return Number(val).toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const labels = holdingsData.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: holdingsData.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <div className="p-2 md:p-4 animate-in fade-in duration-500 font-normal pb-20">
        <h3 className="text-gray-500 text-lg mb-4 md:mb-6 font-normal">
          Holdings ({holdingsData.length})
        </h3>

        {/* MOBILE RESPONSIVE TABLE LOGIC:
            1. overflow-x-auto: Side scrolling enable karta hai.
            2. whitespace-nowrap: Text ko tutne nahi deta.
        */}
        <div className="overflow-x-auto border border-gray-100 rounded-md mb-6 relative shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50">
              <tr className="text-gray-500 text-[10px] md:text-[14px] uppercase border-b border-gray-300">
                {/* Sticky First Column */}
                <th className="py-2 px-2 md:px-3 font-semibold sticky left-0 bg-gray-50 z-10 border-r border-gray-200">
                  Instrument
                </th>
                <th className="py-2 px-2 font-semibold text-right whitespace-nowrap">Qty.</th>
                <th className="py-2 px-2 font-semibold text-right whitespace-nowrap">Avg. cost</th>
                <th className="py-2 px-2 font-semibold text-right whitespace-nowrap">LTP</th>
                <th className="py-2 px-2 font-semibold text-right whitespace-nowrap">Cur. val</th>
                <th className="py-2 px-2 font-semibold text-right whitespace-nowrap">P&L</th>
                <th className="py-2 px-2 font-semibold text-right whitespace-nowrap">Net chg.</th>
                <th className="py-2 px-2 font-semibold text-right whitespace-nowrap">Day chg.</th>
              </tr>
            </thead>
            <tbody className="text-[11px] md:text-[13px]">
              {holdingsData.map((stock, index) => {
                const qty = Number(stock.qty);
                const avg = Number(stock.avg);
                const price = Number(stock.price);
                const curValue = qty * price;
                const actualPnL = curValue - (qty * avg);
                const netChangePercent = avg !== 0 ? (((price - avg) / avg) * 100).toFixed(2) : 0;
                const isLoss = actualPnL < 0;

                return (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 bg-white">
                    {/* Sticky First Column (Stock Name) */}
                    <td className="py-2 px-2 md:px-3 text-gray-700 font-bold md:font-medium sticky left-0 bg-white z-10 border-r border-gray-100 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      {stock.name}
                    </td>
                    
                    <td className="py-2 px-2 text-right text-gray-700 whitespace-nowrap">{qty}</td>
                    <td className="py-2 px-2 text-right text-gray-700 whitespace-nowrap">{formatValue(avg)}</td>
                    <td className="py-2 px-2 text-right text-gray-700 whitespace-nowrap">{formatValue(price)}</td>
                    <td className="py-2 px-2 text-right text-gray-700 whitespace-nowrap">{formatValue(curValue)}</td>
                    <td className={`py-2 px-2 text-right ${isLoss ? "text-red-600" : "text-green-600"} font-semibold whitespace-nowrap`}>
                      {formatValue(actualPnL)}
                    </td>
                    <td className={`py-2 px-2 text-right ${Number(netChangePercent) < 0 ? "text-red-600" : "text-green-600"} whitespace-nowrap`}>
                      {netChangePercent}%
                    </td>
                    <td className={`py-2 px-2 text-right ${stock.day.startsWith("-") ? "text-red-600" : "text-green-600"} whitespace-nowrap`}>
                      {stock.day}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Summary Section - Mobile pe Grid ban jayega */}
        <div className="grid grid-cols-2 md:flex md:gap-16 gap-6 mt-6 border-t border-gray-100 pt-6">
          <div>
            <p className="text-xl md:text-2xl font-normal text-gray-700">₹{formatValue(totalInvestment)}</p>
            <p className="text-[10px] md:text-[11px] text-gray-400 uppercase mt-1">Total investment</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl font-normal text-gray-700">₹{formatValue(totalCurrentValue)}</p>
            <p className="text-[10px] md:text-[11px] text-gray-400 uppercase mt-1">Current value</p>
          </div>
          <div className="col-span-2 md:col-auto border-t md:border-t-0 pt-4 md:pt-0 border-gray-100">
            <p className={`text-xl md:text-2xl font-normal ${totalPnL >= 0 ? "text-green-500" : "text-red-500"}`}>
              {formatValue(totalPnL)} <span className="text-sm">({totalInvestment !== 0 ? ((totalPnL / totalInvestment) * 100).toFixed(2) : 0}%)</span>
            </p>
            <p className="text-[10px] md:text-[11px] text-gray-400 uppercase mt-1">Total P&L</p>
          </div>
        </div>

        {/* Graph Section */}
        <div className="mt-10 h-[300px] w-full">
           <VerticalGraph data={data} />
        </div>
      </div>
    </>
  );
};

export default Holdings;