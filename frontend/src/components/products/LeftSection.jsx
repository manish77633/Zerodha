import React from 'react';

function LeftSection({
    image,
    heading,
    description,
    trydemo,
    learnmore,
    playstore,
    appstore
}) {
    return (
        <section className="w-full py-4 md:py-20 border-b border-gray-100">
            <div className="container mx-auto w-[80%] px-6 lg:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
                    
                    {/* Left: Image Section */}
                    <div className="w-full md:w-1/2">
                        <img 
                            src={image} 
                            alt={heading} 
                            className="w-full h-auto object-contain" 
                        />
                    </div>

                    {/* Right: Content Section */}
                    <div className="w-full md:w-1/2 flex flex-col space-y-6">
                        <h2 className="text-3xl md:text-4xl font-medium text-gray-800">
                            {heading}
                        </h2>
                        
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {description}
                        </p>

                        {/* Links Section */}
                        <div className="flex flex-wrap items-center gap-8 md:gap-12 text-blue-500 font-medium">
                            <a href="#" className="hover:text-gray-900 transition-colors flex items-center gap-1">
                                {trydemo} <span className="text-xl"></span>
                            </a>
                            <a href="#" className="hover:text-gray-900 transition-colors flex items-center gap-1">
                                {learnmore} <span className="text-xl"></span>
                            </a>
                        </div>

                        {/* Store Badges */}
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            <a href="#" className="transition-transform hover:scale-105">
                                <img src={playstore} alt="Google Play" className="h-10 md:h-12" />
                            </a>
                            <a href="#" className="transition-transform hover:scale-105">
                                <img src={appstore} alt="App Store" className="h-10 md:h-12" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default LeftSection;