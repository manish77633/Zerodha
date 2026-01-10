import React from 'react';
import { ArrowRight } from 'lucide-react';
import {useNavigate} from 'react-router-dom';   

function Education() {
    const navigate = useNavigate();
    const handleClick = () => {
        // Redirect to the signup page
        navigate('/signup');
    }
    return (
        <section className="w-full bg-white py-12 md:py-24">
            <div className="container w-[80%] mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
                    
                    {/* Left side: Illustration Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img 
                            src="/media/education.svg" 
                            alt="Education Illustration" 
                            className="w-full max-w-[450px] h-auto object-contain" 
                        />
                    </div>

                    {/* Right side: Content */}
                    <div className="w-full md:w-1/2 text-left">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                            Free and open market education
                        </h2>

                        {/* Varsity Section */}
                        <div className="mb-10">
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                                Varsity, the largest online stock market education book in the world 
                                covering everything from the basics to advanced trading.
                            </p>
                            <a href="#" className="group text-blue-500 font-medium text-lg inline-flex items-center hover:text-blue-700 transition-colors">
                                Varsity 
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>

                        {/* TradingQ&A Section */}
                        <div>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                                TradingQ&A, the most active trading and investment community in 
                                India for all your market related queries.
                            </p>
                            <a href="#" className="group text-blue-500 font-medium text-lg inline-flex items-center hover:text-blue-700 transition-colors">
                                TradingQ&A 
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
             <div className="w-full mt-16 flex flex-col items-center justify-center w-full sm:w-full">
                
                         <div className="flex flex-col items-center text-center w-full px-6 md:px-0 max-w-2xl">
                    <h2 className='text-2xl md:text-3xl font-semibold text-gray-700 leading-tight '>
                        Open a Zerodha account
                    </h2>
                    
                     <p className='text-lg sm:text-lg md:text-lg text-gray-500 mt-3 md:mt-2 leading-relaxed'>

                        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.

                    </p> 
                    
                    {/* BUTTON: Mobile pe text-base aur kam padding, Desktop pe text-xl aur zyada padding */}
                    <button
                    onClick={handleClick}
                    className='mt-8 md:mt-12 bg-[#387ed1] hover:bg-gray-900 text-white 
                        text-base md:text-xl 
                        px-6 md:px-10 
                        py-2 md:py-3 
                        rounded-sm font-semibold transition-all shadow-md active:scale-95 
                        w-auto'>
                        Sign up for free
                    </button>
                </div>
                
            </div>
        </section>
        
    );
}

export default Education;