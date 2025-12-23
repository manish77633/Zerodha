import React from 'react';
import { ArrowRight } from 'lucide-react';

function Pricing() {
    return (
        <section className="w-full bg-white py-12 md:py-20">
            <div className="container w-[80%] mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8">
                    
                    {/* Left Content */}
                    <div className="w-full lg:w-2/5">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                            Unbeatable pricing
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            We pioneered the concept of discount broking and price transparency in India. 
                            Flat fees and no hidden charges.
                        </p>
                        <a href="#" className="group text-blue-500 font-medium text-lg flex items-center hover:text-blue-700 transition-colors">
                            See pricing 
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>

                    {/* Right Pricing Cards - Changed to flex-col for mobile */}
                    <div className="w-full lg:w-3/5 flex flex-col sm:flex-row items-center justify-between gap-4 border-t lg:border-t-0 pt-10 lg:pt-0">
                        
                        {/* Free Account Opening */}
                        <div className="flex items-center gap-2 border border-gray-100 p-4 rounded-lg sm:border-none sm:p-0 w-full sm:flex-1 min-w-[140px]">
                            <img src="/media/pricing0.svg" alt="Free account" className="w-21 h-21 md:w-26 md:h-26 object-contain" />
                            <p className="text-[10px] md:text-xs text-gray-500 leading-tight">
                                Free account <br /> opening
                            </p>
                        </div>

                        {/* Free Equity Delivery */}
                        <div className="flex items-center gap-2 border border-gray-100 p-4 rounded-lg sm:border-none sm:p-0 w-full sm:flex-1 min-w-[140px]">
                            <img src="/media/pricing0.svg" alt="Free delivery" className="w-16 h-16 md:w-26 md:h-26 object-contain" />
                            <p className="text-[10px] md:text-xs text-gray-500 leading-tight">
                                Free equity delivery <br /> and direct mutual funds
                            </p>
                        </div>

                        {/* Intraday and F&O */}
                        <div className="flex items-center gap-2 border border-gray-100 p-4 rounded-lg sm:border-none sm:p-0 w-full sm:flex-1 min-w-[140px]">
                            <img src="/media/intradayTrades.svg" alt="Intraday trades" className="w-16 h-16 md:w-26 md:h-26  object-contain" />
                            <p className="text-[10px] md:text-xs text-gray-500 leading-tight">
                                Intraday and <br /> F&O
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;