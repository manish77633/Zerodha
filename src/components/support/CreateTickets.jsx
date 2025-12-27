

import React from 'react';

// 1. Individual Category Component
const CategoryCard = ({ title, icon, links }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-medium text-gray-700 flex items-center gap-2">
        <span className="text-gray-400">{icon}</span> {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="text-blue-500 hover:text-gray-900 text-[15px] leading-relaxed">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 2. Main Support Portal Component
const CreateTickets = () => {
  const categories = [
    {
      title: "Account Opening",
      icon: "👤",
      links: ["Online Account Opening", "Offline Account Opening", "Charges", "Company, Partnership and HUF"]
    },
    {
      title: "Your Zerodha Account",
      icon: "Login",
      links: ["Login credentials", "Your Profile", "Account modification and segment addition", "CMR & DP ID"]
    },
    {
      title: "Funds",
      icon: "💰",
      links: ["Adding Funds", "Withdrawing Funds", "Adding Bank Accounts", "eMandates"]
    },
    {
      title: "Console",
      icon: "📊",
      links: ["Reports and Statements", "Portfolio and Holdings", "Tax P&L", "Value Added Services"]
    },
    {
      title: "Coin",
      icon: "🪙",
      links: ["Understanding Mutual Funds", "About Coin", "Buying and Selling", "NPS"]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Blue Header Section */}
      <header className="bg-[#387ed1] pt-8 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex justify-between items-center mb-16">
            <img 
              src="https://zerodha.com/static/images/logo.svg" 
              alt="Zerodha" 
              className="w-32 brightness-0 invert" 
            />
            <div className="hidden md:flex gap-8 text-white text-sm font-medium">
              <a href="#">Signup</a>
              <a href="#">About</a>
              <a href="#">Knowledge Base</a>
            </div>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-white text-3xl font-normal mb-8">Support Portal</h1>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for answers, e.g. 'how to open account'"
                className="w-full p-4 pl-6 rounded-sm text-lg outline-none shadow-lg"
              />
              <div className="mt-4 flex gap-4 text-white text-sm underline opacity-90">
                <a href="#">Track tickets</a>
                <a href="#">Track segment activation</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* FAQ Grid Section */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-xl text-gray-500 font-normal mb-10">Featured Topics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {categories.map((cat, index) => (
            <CategoryCard 
              key={index} 
              title={cat.title} 
              icon={cat.icon} 
              links={cat.links} 
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CreateTickets;