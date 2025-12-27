import React from 'react';

function Hero() {
    return (
        <div className="bg-white">
            {/* 1. Top Header Section */}
            <div className="w-full pt-20 pb-10 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center text-center w-full gap-2">
                    <h1 className='text-3xl md:text-5xl font-semibold text-gray-700 leading-tight'>
                        Charges
                    </h1>
                    <p className='text-xl text-gray-400 mt-3'>
                        List of all charges and taxes
                    </p>
                </div>
            </div>

            {/* 2. Pricing Section */}
            <section className="w-full py-16">
                {/* Aapki fixed width setting w-[88%] */}
                <div className="container mx-auto px-6 lg:px-24 w-[88%]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center items-start">
                        
                        {/* Column 1: Free Equity Delivery */}
                        <div className="flex flex-col items-center p-4">
                            <div className="mb-6 h-32 w-full flex items-center justify-center">
                                <img 
                                    src="/media/pricing0.svg" 
                                    alt="Free equity delivery" 
                                    // w-40 aur h-40 add kiya hai taaki size force ho sake
                                    className="w-40 h-40 md:w-48 md:h-48 object-contain block" 
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                                Free equity delivery
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                                All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                            </p>
                        </div>

                        {/* Column 2: Intraday and F&O */}
                        <div className="flex flex-col items-center p-4">
                            <div className="mb-6 h-32 w-full flex items-center justify-center">
                                <img 
                                    // Path aur Filename check karein (intradayTrades vs intradayTradis)
                                    src="/media/intradayTrades.svg" 
                                    alt="Intraday and F&O trades" 
                                    className="w-40 h-40 md:w-48 md:h-48 object-contain block" 
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                                Intraday and F&O trades
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                            </p>
                        </div>

                        {/* Column 3: Free Direct MF */}
                        <div className="flex flex-col items-center p-4">
                            <div className="mb-6 h-32 w-full flex items-center justify-center">
                                <img 
                                    src="/media/pricing0.svg" 
                                    alt="Free direct MF" 
                                    className="w-40 h-40 md:w-48 md:h-48 object-contain block" 
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                                Free direct MF
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                                All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;