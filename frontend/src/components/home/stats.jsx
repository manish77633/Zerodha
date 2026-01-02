import React from 'react';
import { Users, ShieldAlert, Globe, TrendingUp, ArrowRight } from 'lucide-react';

function Stats() {
    return (
        <section className="bg-white py-12 md:py-24 font-sans">
            <div className="container w-[80%] mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                
                {/* Left Side: Content */}
                <div className="w-full md:w-[45%] text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 md:mb-14 tracking-tight">
                        Trust with confidence
                    </h2>

                    <div className="space-y-10">
                        <div className="flex gap-4">
                            <Users className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer-first always</h3>
                                <p className="text-gray-500 leading-relaxed text-base">
                                    That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, 
                                    making us India's largest broker.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <ShieldAlert className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">No spam or gimmicks</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    No gimmicks, spam, "gamification", or annoying push notifications. 
                                    High quality apps that you use at your pace.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Globe className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">The Zerodha universe</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer 
                                    you tailored services.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <TrendingUp className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Do better with money</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    With initiatives like Nudge and Kill Switch, we actively help you do better with your money.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image and Links */}
                <div className="w-full md:w-[55%] flex flex-col items-center">
                    <div className="w-full overflow-hidden">
                        <img 
                            src="/media/ecosystem.png" 
                            alt="Ecosystem illustration" 
                            className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105" 
                        />
                    </div>
                    
                    {/* YAHAN CHANGE KIYA HAI: flex-row hamesha rahega aur wrap handle karega */}
                    <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-12 mt-10">
                        <a href="#" className="group text-blue-500 font-semibold text-sm sm:text-lg flex items-center hover:text-blue-700 transition-colors whitespace-nowrap">
                            Explore our products 
                            <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a href="#" className="group text-blue-500 font-semibold text-sm sm:text-lg flex items-center hover:text-blue-700 transition-colors whitespace-nowrap">
                            Try Kite demo 
                            <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Stats;