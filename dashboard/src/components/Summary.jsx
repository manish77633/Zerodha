import React from 'react';

function Summary() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="border-b border-gray-100 pb-6 mb-10">
        <h1 className="text-2xl font-normal text-gray-700">Hi, User!</h1>
      </div>
      <div className="grid grid-cols-2 gap-16">
        <div className="border-r border-gray-100 pr-10">
          <h3 className="text-lg text-gray-500 mb-6">Equity</h3>
          <p className="text-4xl font-light">3.74k</p>
          <p className="text-[11px] text-gray-400 uppercase mt-2">Margin available</p>
        </div>
        <div>
          <h3 className="text-lg text-gray-500 mb-6">Holdings</h3>
          <p className="text-4xl font-light text-green-500">1.55k</p>
          <p className="text-[11px] text-gray-400 uppercase mt-2">P&L +5.2%</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;