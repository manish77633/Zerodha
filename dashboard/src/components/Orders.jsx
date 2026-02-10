import React from "react";

const Orders = ({ allOrders = [] }) => {
  
  // 1. Helper Function: Value ko comma ke saath dikhane ke liye (e.g. 1,000.00)
  const formatValue = (val) => {
    return Number(val).toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  // 2. NEW Helper Function: Time ko 12-Hour format (AM/PM) mein badalne ke liye
  const convertTo12Hour = (timeStr) => {
    if (!timeStr) return "--";

    // Agar pehle se AM/PM hai (Puraane sahi orders), toh waisa hi return kar do
    if (timeStr.includes("AM") || timeStr.includes("PM") || timeStr.includes("am") || timeStr.includes("pm")) {
      return timeStr;
    }

    // Railway Time (HH:MM:SS) ko split karo
    const [hours, minutes] = timeStr.split(':'); // Seconds hata diye clean dikhane ke liye
    let h = parseInt(hours, 10);
    
    // Logic: AM ya PM determine karo
    const ampm = h >= 12 ? 'PM' : 'AM';
    
    // Logic: 24 ko 12 mein convert karo
    h = h % 12;
    h = h ? h : 12; // Agar 0 bachta hai (raat ke 12 baje) toh use 12 likho
    
    return `${h}:${minutes} ${ampm}`;
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="px-4 md:px-6 py-4 border-b border-gray-100 absolut top-0 bg-white z-10">
        <div className="flex justify-between items-center">
          <h3 className="text-gray-900 text-lg md:text-xl font-medium">
            Orders ({allOrders.length})
          </h3>
          {allOrders.length > 0 && (
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              Latest first
            </span>
          )}
        </div>
      </div>

      {/* Empty State */}
      {allOrders.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 md:p-20">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-10 h-10 md:w-12 md:h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-gray-500 text-sm md:text-base">You haven't placed any orders yet.</p>
          <p className="text-gray-400 text-xs md:text-sm mt-1">Start trading to see your orders here</p>
        </div>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="sticky top-[57px] bg-white z-10">
                <tr className="text-gray-500 text-[12px] md:text-[13px] uppercase border-b border-gray-300">
                  <th className="py-3 px-4 font-semibold">Time</th>
                  <th className="py-3 px-3 font-semibold">Type</th>
                  <th className="py-3 px-3 font-semibold">Instrument</th>
                  <th className="py-3 px-3 font-semibold text-right">Qty.</th>
                  <th className="py-3 px-3 font-semibold text-right">Avg. Price</th>
                  <th className="py-3 px-3 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="text-[13px]">
                {/* Note: .reverse() hata hua hai taaki Newest Top pe rahe */}
                {allOrders.map((order, index) => {
                  
                  // Yahan humne function call kiya time badalne ke liye
                  const displayTime = convertTo12Hour(order.addedTime);
                  
                  return (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 text-gray-600 font-medium">{displayTime}</td>
                      <td className="py-4 px-3">
                        <span className={`px-2.5 py-1 rounded text-[10px] font-semibold ${
                          order.mode === "BUY" 
                          ? "bg-blue-100 text-blue-600" 
                          : "bg-orange-100 text-orange-600"
                        }`}>
                          {order.mode}
                        </span>
                      </td>
                      <td className="py-4 px-3 text-gray-800 font-semibold">{order.name}</td>
                      <td className="py-4 px-3 text-right text-gray-700 font-semibold">{order.qty}</td>
                      <td className="py-4 px-3 text-right text-gray-700 font-semibold">
                        ₹{formatValue(order.price)}
                      </td>
                      <td className="py-4 px-3 text-right">
                        <span className="bg-green-100 text-green-600 px-2.5 py-1 rounded text-[10px] font-semibold">
                          COMPLETE
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden divide-y divide-gray-200">
            {allOrders.map((order, index) => {
              
              // Mobile view ke liye bhi function call kiya
              const displayTime = convertTo12Hour(order.addedTime);
              
              return (
                <div key={index} className="p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors">
                  {/* Header Row */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 rounded text-[11px] font-bold ${
                        order.mode === "BUY" 
                        ? "bg-blue-100 text-blue-600" 
                        : "bg-orange-100 text-orange-600"
                      }`}>
                        {order.mode}
                      </span>
                      <span className="text-gray-900 font-semibold text-[15px]">{order.name}</span>
                    </div>
                    <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-[10px] font-semibold">
                      COMPLETE
                    </span>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-3 text-[13px]">
                    <div>
                      <p className="text-gray-500 text-[11px] mb-0.5">Quantity</p>
                      <p className="text-gray-900 font-semibold">{order.qty}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[11px] mb-0.5">Avg. Price</p>
                      <p className="text-gray-900 font-semibold">₹{formatValue(order.price)}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-gray-500 text-[11px] mb-0.5">Time</p>
                      <p className="text-gray-700 font-medium text-[12px]">{displayTime}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;