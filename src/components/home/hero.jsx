import React from 'react';

export default function Hero() {
    return ( 
        <section className="w-full flex items-center justify-center mt-8 bg-white">
            <div className="w-full flex flex-col items-center justify-center w-full sm:w-full">
                
                <div className="w-full md:max-w-[800px] flex justify-center mb-6 md:mb-14">
                    <img 
                        src="/media/homeHero.png" 
                        alt="Hero" 
                        className='w-full h-auto object-cover md:object-contain' 
                    />
                </div>
                
            </div>
        </section>
    );
}