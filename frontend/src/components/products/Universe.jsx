import React from 'react';
import { useNavigate } from 'react-router-dom';

function Universe() {
    const navigate = useNavigate();
    const handleClick = () => {
        // Redirect to the signup page
        navigate('/signup');
    }
    // Partner platforms ka data array
    const partners = [
        {
            image: "media/zerodhaFundhouse.png",
            description: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
        },
        {
            image: "media/sensibull-logo.svg",
            description: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
        },
        {
            image: "media/tijorilogo.svg",
            description: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
        },
        {
            image: "media/streakLogo.png",
            description: "Systematic trading platform that allows you to create and backtest strategies without coding."
        },
        {
            image: "media/smallcaseLogo.png",
            description: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
        },
        {
            image: "media/dittoLogo.png",
            description: "Personalized advice on life and health insurance. No spam and no mis-selling."
        }
    ];

    return (
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto w-[80%] px-6 lg:px-24">
                
                {/* Header Text */}
                <div className="text-center mb-16 md:mb-12">
                    <h1 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                        The Zerodha Universe
                    </h1>
                    <p className="text-gray-500 text-lg">
                        Extend your trading and investment experience even further with our partner platforms
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
                    {partners.map((partner, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="h-16 md:h-20 flex items-center justify-center mb-4">
                                <img 
                                    src={partner.image} 
                                    alt="Partner Logo" 
                                    className="max-w-[180px] max-h-full object-contain  opacity-100  group-hover:opacity-80 transition-all duration-300"
                                />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed px-4">
                                {partner.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center mt-8 md:mt-8f">
                    <button
                    onClick={handleClick}
                    className="bg-[#387ed1] hover:bg-gray-900 text-white text-xl px-12 py-3 rounded-sm font-medium transition-all shadow-md active:scale-95">
                        Sign up for free
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Universe;