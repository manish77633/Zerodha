import React from "react";

const Orders = ({ allOrders = [] }) => {
  const formatValue = (val) => {
    return Number(val).toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="p-4 md:p-8 animate-in fade-in duration-500 font-normal">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-gray-900 text-[18px] font-normal">
          Orders ({allOrders.length})
        </h3>
      </div>

      {allOrders.length === 0 ? (
        <div className="text-center p-20 border border-dashed border-gray-200 rounded-md">
          <p className="text-gray-400 text-sm">You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto border-b border-gray-100">
          <table className="w-full text-left border-collapse min-w-200">
            <thead>
              <tr className="text-gray-400 text-[12px] border-b border-gray-300">
                <th className="py-3 font-normal">Time</th>
                <th className="py-3 font-normal">Type</th>
                <th className="py-3 font-normal">Instrument</th>
                <th className="py-3 font-normal text-right">Qty.</th>
                <th className="py-3 font-normal text-right">Avg. Price</th>
                <th className="py-3 font-normal text-right">Status</th>
              </tr>
            </thead>
            <tbody className="text-[13px]">
              {[...allOrders].reverse().map((order, index) => {
                
                // --- FIX: Seedha database ka addedTime string uthayega ---
                const displayTime = order.addedTime ; 

                return (
                  <tr key={index} className="border-b border-gray-300 hover:bg-gray-50">
                    <td className="py-4 text-gray-500 font-medium">{displayTime}</td>
                    <td className="py-4">
                      <span className={`px-2 py-0.5 rounded-sm text-[10px] font-medium border ${
                        order.mode === "BUY" 
                        ? "bg-blue-50 text-blue-400 border-blue-100" 
                        : "bg-orange-50 text-orange-400 border-orange-100"
                      }`}>
                        {order.mode}
                      </span>
                    </td>
                    <td className="py-4 text-gray-700 font-semibold">{order.name}</td>
                    <td className="py-4 text-right text-gray-600 font-semibold">{order.qty}</td>
                    <td className="py-4 text-right text-gray-600 font-semibold">
                      {formatValue(order.price)}
                    </td>
                    <td className="py-4 text-right">
                      <span className="text-green-500 bg-green-50 px-2 py-0.5 rounded-sm text-[11px] font-medium">
                        COMPLETE
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;