
const Holdings = () => {
  const holdings = [
    { name: "BHARTIARTL", qty: 2, avg: "538.05", ltp: "541.15", curVal: "1082.30", pnl: "6.20", netChg: "+0.58%", dayChg: "+2.99%", isLoss: false },
    { name: "HDFCBANK", qty: 2, avg: "1383.40", ltp: "1522.35", curVal: "3044.70", pnl: "277.90", netChg: "+10.04%", dayChg: "+0.11%", isLoss: false },
    { name: "HINDUNILVR", qty: 1, avg: "2335.85", ltp: "2417.40", curVal: "2417.40", pnl: "81.55", netChg: "+3.49%", dayChg: "+0.21%", isLoss: false },
    { name: "INFY", qty: 1, avg: "1350.50", ltp: "1555.45", curVal: "1555.45", pnl: "204.95", netChg: "+15.18%", dayChg: "-1.60%", isLoss: false },
    { name: "ITC", qty: 5, avg: "202.00", ltp: "207.90", curVal: "1039.50", pnl: "29.50", netChg: "+2.92%", dayChg: "+0.80%", isLoss: false },
    { name: "KPITTECH", qty: 5, avg: "250.30", ltp: "266.45", curVal: "1332.25", pnl: "80.75", netChg: "+6.45%", dayChg: "+3.54%", isLoss: false },
    { name: "M&M", qty: 2, avg: "809.90", ltp: "779.80", curVal: "1559.60", pnl: "-60.20", netChg: "-3.72%", dayChg: "-0.01%", isLoss: true },
    { name: "RELIANCE", qty: 1, avg: "2193.70", ltp: "2112.40", curVal: "2112.40", pnl: "-81.30", netChg: "-3.71%", dayChg: "+1.44%", isLoss: true },
    { name: "SBIN", qty: 4, avg: "324.35", ltp: "430.20", curVal: "1720.80", pnl: "423.40", netChg: "+32.62%", dayChg: "-0.34%", isLoss: false },
    { name: "TATAPOWER", qty: 5, avg: "104.20", ltp: "124.15", curVal: "620.75", pnl: "99.75", netChg: "+19.14%", dayChg: "-0.24%", isLoss: false },
    { name: "TCS", qty: 1, avg: "3041.70", ltp: "3194.80", curVal: "3194.80", pnl: "153.10", netChg: "+5.03%", dayChg: "-0.25%", isLoss: false },
    { name: "WIPRO", qty: 4, avg: "489.30", ltp: "577.75", curVal: "2311.00", pnl: "353.80", netChg: "+18.08%", dayChg: "+0.32%", isLoss: false },
  ];

  return (
    <div className="p-4 md:p-4 animate-in fade-in duration-500">
      <h3 className="text-gray-900 text-lg mb-6">Holdings ({holdings.length})</h3>

      {/* Table Section - Responsive Scroll */}
      <div className="overflow-x-auto border-b border-gray-100 mb-8">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="text-gray-400 text-[11px] uppercase tracking-wider border-b border-gray-50">
              <th className="py-2 font-medium">Instrument</th>
              <th className="py-2 font-medium text-right">Qty.</th>
              <th className="py-2 font-medium text-right">Avg. cost</th>
              <th className="py-2 font-medium text-right">LTP</th>
              <th className="py-2 font-medium text-right">Cur. val</th>
              <th className="py-2 font-medium text-right">P&L</th>
              <th className="py-2 font-medium text-right">Net chg.</th>
              <th className="py-2 font-medium text-right">Day chg.</th>
            </tr>
          </thead>
          <tbody className="text-[13px]">
            {holdings.map((stock, index) => (
              <tr key={index} className="border-b border-gray-300 hover:bg-gray-50 transition-colors">
                <td className="py-2 text-gray-700 font-medium">{stock.name}</td>
                <td className="py-2 text-right text-gray-600">{stock.qty}</td>
                <td className="py-2 text-right text-gray-600">{stock.avg}</td>
                <td className="py-2 text-right text-gray-600">{stock.ltp}</td>
                <td className="py-2 text-right text-gray-600">{stock.curVal}</td>
                <td className={`py-2 text-right ${stock.isLoss ? "text-red-500" : "text-green-500"}`}>
                  {stock.pnl}
                </td>
                <td className={`py-2 text-right ${stock.isLoss ? "text-red-500" : "text-green-500"}`}>
                  {stock.netChg}
                </td>
                <td className={`py-2 text-right ${stock.dayChg.startsWith("-") ? "text-red-500" : "text-green-500"}`}>
                  {stock.dayChg}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="flex flex-col">
          <p className="text-2xl font-normal text-gray-700">
            29,875<span className="text-sm">.55</span>
          </p>
          <p className="text-[11px] text-gray-400 uppercase mt-1">Total investment</p>
        </div>
        <div className="flex flex-col md:text-left">
          <p className="text-2xl font-normal text-gray-700">
            31,428<span className="text-sm">.95</span>
          </p>
          <p className="text-[11px] text-gray-400 uppercase mt-1">Current value</p>
        </div>
      </div>
    </div>
  );
};

export default Holdings;