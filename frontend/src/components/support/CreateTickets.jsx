import React, { useState } from 'react';
import { 
  PlusCircle, 
  User, 
  Layout, 
  CreditCard, 
  ChevronDown, 
  ChevronUp, 
  BarChart3, 
  Coins 
} from 'lucide-react';

const CreateTickets = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      title: "Account Opening",
      icon: <PlusCircle size={20} className="text-blue-500" />,
      links: ["Resident individual", "Minor", "Non Resident Indian (NRI)", "Company, Partnership, HUF and LLP", "Glossary"]
    },
    {
      title: "Your Zerodha Account",
      icon: <User size={20} className="text-blue-500" />,
      links: ["Login credentials", "Your Profile", "Account modification", "CMR & DP ID"]
    },
    {
      title: "Kite",
      icon: <Layout size={20} className="text-blue-500" />,
      links: ["Trading on Kite", "Kite Mobile", "Charts and Indicators", "Orders and Positions"]
    },
    {
      title: "Funds",
      icon: <CreditCard size={20} className="text-blue-500" />,
      links: ["Adding Funds", "Withdrawing Funds", "Adding Bank Accounts", "eMandates"]
    },
    {
      title: "Console",
      icon: <BarChart3 size={20} className="text-blue-500" />,
      links: ["Reports and Statements", "Portfolio and Holdings", "Tax P&L", "Value Added Services"]
    },
    {
      title: "Coin",
      icon: <Coins size={20} className="text-blue-500" />,
      links: ["Understanding Mutual Funds", "About Coin", "Buying and Selling", "NPS"]
    }
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT: Accordion FAQ Section */}
          <div className="w-full lg:w-2/3 space-y-6">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className="border border-gray-100 rounded-sm shadow-sm overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-md bg-white"
              >
                {/* Accordion Header */}
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <span className="bg-blue-50 p-2 rounded-sm transition-transform duration-300 group-hover:rotate-12">
                      {item.icon}
                    </span>
                    <span className="text-lg font-medium text-gray-700">{item.title}</span>
                  </div>
                  {openIndex === index ? 
                    <ChevronUp size={20} className="text-blue-500" /> : 
                    <ChevronDown size={20} className="text-gray-400" />
                  }
                </button>

                {/* Smooth Expand/Collapse Animation */}
                <div className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="p-6 bg-white border-t border-gray-50">
                      <ul className="grid grid-cols-1 gap-4">
                        {item.links.map((link, idx) => (
                          <li key={idx}>
                            <a 
                              href="#" 
                              className="text-blue-500 hover:text-gray-900 transition-all text-[15px] inline-block hover:pl-2 transform duration-200"
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Sidebar Links */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-blue-500 hover:underline text-[15px] font-medium block leading-relaxed">
                    Latest Intraday leverages and Square-off timings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-500 hover:underline text-[15px] font-medium block leading-relaxed">
                    Rights Entitlements listing in December 2025
                  </a>
                </li>
              </ul>
            </div>

            <div className="border border-gray-100 rounded-sm shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
              <div className="bg-gray-50 p-4 border-b border-gray-100">
                <h3 className="font-medium text-gray-700">Quick links</h3>
              </div>
              <div className="bg-white">
                {[
                  "Track account opening",
                  "Track segment activation",
                  "Intraday margins",
                  "Kite user manual",
                  "Learn how to create a ticket"
                ].map((text, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="block p-4 text-[15px] text-blue-500 hover:bg-blue-50 hover:pl-8 border-b border-gray-50 last:border-0 transition-all duration-300"
                  >
                    {i + 1}. {text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateTickets;