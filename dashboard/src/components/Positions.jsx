import React from "react";

const Positions = () => {
  const positions = [
    {
      product: "CNC",
      instrument: "EVEREADY",
      qty: 2,
      avg: "316.27",
      ltp: "312.35",
      pnl: "-7.84",
      chg: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      instrument: "JUBLFOOD",
      qty: 1,
      avg: "3124.75",
      ltp: "3082.65",
      pnl: "-42.10",
      chg: "-1.35%",
      isLoss: true,
    },
  ];

  return (
    <div className="p-4 md:p-8 animate-in fade-in duration-500 font-normal">
      <h3 className="text-gray-900 text-[18px] mb-6 font-normal">
        Positions ({positions.length})
      </h3>

      <div className="overflow-x-auto border-b border-gray-100">
        <table className="w-full text-left border-collapse min-w-[800px]">
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
            {positions.map((stock, index) => (
              <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">
                <td className="py-4">
                  <span className="bg-red-50 text-red-400 px-2 py-0.5 rounded-sm text-[10px] border border-red-100 font-medium">
                    {stock.product}
                  </span>
                </td>
                <td className="py-4 text-gray-700 text-center font-semibold">{stock.instrument}</td>
                <td className="py-4 text-right text-gray-600 font-semibold">{stock.qty}</td>
                <td className="py-4 text-right text-gray-600 font-semibold">{stock.avg}</td>
                <td className="py-4 text-right text-gray-600 font-semibold">{stock.ltp}</td>
                <td className={`py-4 text-right ${stock.isLoss ? "text-red-500 font-semibold" : "text-green-500 font-semibold"}`}>
                  {stock.pnl}
                </td>
                <td className={`py-4 text-right ${stock.isLoss ? "text-red-500 font-semibold" : "text-green-500 font-semibold"}`}>
                  {stock.chg}
                </td>
              </tr>
            ))}
            
            {/* Total Row integrated into table for perfect alignment */}
            <tr className="border-b border-gray-300 font-normal">
              <td colSpan="4"></td>
              <td className="py-4 text-right font-semibold text-gray-900 text-[14px]">Total</td>
              <td className="py-4 text-right text-red-500 text-[14px] font-semibold">-49.94</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;