import React from 'react';

function Award() {
    return ( 
        <section className="w-full mt-12 flex justify-center py-10 md:py-20 bg-white">
            <div className="flex flex-col md:flex-row items-center justify-between w-[80%] max-w-[90%] md:max-w-[80%] gap-8 md:gap-16">
                
                <div className="w-full md:w-1/2 flex justify-center">
                    <img 
                        src="/media/largestBroker.svg" 
                        className="w-[80%] md:w-full h-auto object-contain" 
                        alt="Largest Broker" 
                    />
                </div>

                <div className="w-full md:w-1/2 text-left px-4 md:px-0">
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 leading-tight">
                        Largest stock broker in India
                    </h2>
                    
                    <p className="text-gray-600 mt-4 text-base md:text-lg">
                        2+ million Zerodha clients contribute to over 15% of all retail order volume in India daily by trading and investing in:
                    </p>

                    <div className="flex justify-between sm:justify-start sm:gap-20 mt-6 text-gray-700">
                        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                            <li>Stocks</li>
                            <li>ETFs</li>
                            <li>Mutual funds</li>
                            <li>Indices</li>
                        </ul>
                        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base">
                            <li>Derivatives</li>
                            <li>Commodities</li>
                            <li>Currencies</li>
                            <li>Bonds</li>
                        </ul>
                    </div>

                    <div className="mt-10 w-full">
                        <img 
                            src="/media/pressLogos.png" 
                            className="w-full md:w-[90%] h-auto grayscale opacity-80 hover:grayscale-0 transition-all duration-300" 
                            alt="Press Logos" 
                        />
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default Award;