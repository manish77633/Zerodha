import React from 'react';
import { Link } from 'react-router-dom';
function  Team () {
  return (
    <section className="py-16 px-6 md:py-20">
      <div className="container mx-auto max-w-5xl">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-center text-gray-800 font-medium mb-16">
          People
        </h2>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20">
          
          {/* Left Side: Profile Image & Name */}
          <div className="w-full md:w-1/3 flex flex-col items-center text-center">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden mb-4">
              <img 
                src="/media/nithinKamath.jpg" // Apna image path yahan dalein
                alt="Nithin Kamath"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-medium text-gray-800">Nithin Kamath</h3>
            <p className="text-gray-500 text-sm mt-1">Founder, CEO</p>
          </div>

          {/* Right Side: Bio & Links */}
          <div className="w-full md:w-2/3 text-gray-600 leading-relaxed space-y-5 text-center md:text-left">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the 
              hurdles he faced during his decade long stint as a trader. Today, 
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee 
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            
            <p className="pt-2">
              Connect on {" "}
              <span className="space-x-2">
                <Link to="/" className="text-blue-500 hover:underline">Homepage</Link> / 
                
                <a href="#" className="text-blue-500 hover:underline">Twitter</a>
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;