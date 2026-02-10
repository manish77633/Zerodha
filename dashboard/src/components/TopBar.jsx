import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Fixed TopBar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3 h-14">
          
          {/* LEFT: Nifty & Sensex */}
          <div className="flex items-center gap-3 md:gap-6 text-[10px] md:text-[11px] font-medium">
            <div className="flex gap-1.5">
              <span className="text-gray-600 uppercase font-semibold">Nifty 50</span>
              <span className="text-red-500">19,425.35</span>
            </div>
            <div className="hidden sm:flex gap-1.5 border-l pl-3 md:pl-4 border-gray-200">
              <span className="text-gray-600 uppercase font-semibold">Sensex</span>
              <span className="text-red-500">65,216.09</span>
            </div>
          </div>

          {/* RIGHT: Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-6 text-[13px]">
            <Link to="/" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">
              Dashboard
            </Link>
            <Link to="/orders" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">
              Orders
            </Link>
            <Link to="/holdings" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">
              Holdings
            </Link>
            <Link to="/positions" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">
              Positions
            </Link>
            <Link to="/funds" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">
              Funds
            </Link>
            
            {/* User Profile */}
            <div className="flex items-center gap-2 border-l pl-6 border-gray-200">
              <div className="w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                ZU
              </div>
              <span className="text-gray-500 text-xs uppercase">UserID</span>
            </div>
          </nav>

          {/* RIGHT: Hamburger Menu (Mobile Only) */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay (Mobile Menu Background) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
          style={{ top: '56px' }} // Below navbar
        />
      )}

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-14 right-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* User Section */}
        <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
              ZU
            </div>
            <div>
              <p className="text-xs text-gray-500">Welcome,</p>
              <p className="text-sm font-bold text-gray-800">USERID</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 gap-2">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 text-gray-700 transition-all group"
          >
            <span className="font-medium">Dashboard</span>
            <span className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </Link>
          
          <Link
            to="/orders"
            onClick={closeMenu}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 text-gray-700 transition-all group"
          >
            <span className="font-medium">Orders</span>
            <span className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </Link>
          
          <Link
            to="/holdings"
            onClick={closeMenu}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 text-gray-700 transition-all group"
          >
            <span className="font-medium">Holdings</span>
            <span className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </Link>
          
          <Link
            to="/positions"
            onClick={closeMenu}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 text-gray-700 transition-all group"
          >
            <span className="font-medium">Positions</span>
            <span className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </Link>
          
          <Link
            to="/funds"
            onClick={closeMenu}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 text-gray-700 transition-all group"
          >
            <span className="font-medium">Funds</span>
            <span className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </Link>

          <hr className="my-4 border-gray-200" />

          {/* Extra Link */}
          <a
            href="https://zerodha-zeta-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-center bg-orange-500 text-white rounded-lg font-semibold shadow-lg hover:bg-orange-600 active:scale-95 transition-all"
          >
            Go to Zerodha Home
          </a>
        </nav>
      </div>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-14" />
    </>
  );
};

export default TopBar;