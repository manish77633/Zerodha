import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100 bg-white fixed top-0 left-0 right-0 z-50 h-14">
      {/* Indices */}
      <div className="flex items-center gap-6 text-[11px] font-medium text-gray-400">
        <div className="flex gap-1"><span className="text-gray-600 uppercase">Nifty 50</span> <span className="text-red-500">19,425.35</span></div>
        <div className="flex gap-1 border-l pl-4 border-gray-100"><span className="text-gray-600 uppercase">Sensex</span> <span className="text-red-500">65,216.09</span></div>
      </div>

      {/* Navigation Menu */}
      {/* Navigation Menu inside Dashboard */}
      <nav className="flex items-center gap-8 text-[13px] text-gray-600">
        <Link to="/" className="hover:text-orange-500 transition-colors">Dashboard</Link>
        <Link to="/orders" className="hover:text-orange-500 transition-colors">Orders</Link>
        <Link to="/holdings" className="hover:text-orange-500 transition-colors">Holdings</Link>
        <Link to="/positions" className="hover:text-orange-500 transition-colors">Positions</Link>
        <Link to="/funds" className="hover:text-orange-500 transition-colors">Funds</Link>

        {/* Back to Home Page - Port 5173 */}
        <a
          href="http://localhost:5173/"
          className="hover:text-orange-500 transition-colors border-l pl-4 border-gray-200"
        >
          Zerodha
        </a>

        <div className="flex items-center gap-2 border-l pl-6 border-gray-100 uppercase">
          <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-[10px] font-bold">ZU</div>
          <span className="text-gray-400">USERID</span>
        </div>
      </nav>
    </div>
  );
};

export default TopBar;