

import React from 'react';

function RightSection({
    image,
    heading,
    description,
    learnmore
}) {
    return (
        <section className="w-full py-4 md:py-20 border-b border-gray-100">
            <div className="container mx-auto px-6 lg:px-24">
                {/* md:flex-row-reverse: Ye desktop par image ko right aur text ko left kar dega.
                   flex-col: Ye mobile par normal stack karega (Text upar, Image niche).
                */}
                <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 lg:gap-32">
                    
                    {/* Right Side: Image Section */}
                    <div className="w-full md:w-1/2">
                        <img 
                            src={image} 
                            alt={heading} 
                            className="w-full h-auto object-contain" 
                        />
                    </div>

                    {/* Left Side: Content Section */}
                    <div className="w-full md:w-[40%] flex flex-col space-y-6">
                        <h2 className="text-3xl md:text-4xl font-medium text-gray-800">
                            {heading}
                        </h2>
                        
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {description}
                        </p>

                        {/* Learn More Link */}
                        <div className="pt-2">
                            <a 
                                href="#" 
                                className="text-blue-500 hover:text-gray-900 transition-colors font-medium flex items-center gap-1"
                            >
                                {learnmore} <span className="text-xl"></span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default RightSection;