

function Hero() {
	return ( 
		<>
		<div className="flex items-center justify-center m-30">
				<h1 className="text-2xl font-semibold text-gray-700 ">We pioneered the discount broking model in India. <br />
Now, we are breaking ground with our technology. </h1>

		</div>
		<section className="py-4 px-6 md:py-4 border-b  border-gray-100">
      <div className="container mx-auto  w-[70%]">
        {/* Main Grid Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 text-gray-600 leading-relaxed text-lg">
          
          {/* Left Column */}
          <div className="space-y-6">
            <p>
              We kick-started operations on the 15th of August, 2010 with the goal of 
              breaking all barriers that traders and investors face in India in terms 
              of cost, support, and technology. We named the company Zerodha, a 
              combination of Zero and "Rodha", the Sanskrit word for barrier.
            </p>
            <p>
              Today, our disruptive pricing models and in-house technology have 
              made us the biggest stock broker in India.
            </p>
            <p>
              Over 1.6+ crore clients place billions of orders every year through 
              our powerful ecosystem of investment platforms, contributing over 15% 
              of all Indian retail trading volumes.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <p>
              In addition, we run a number of popular open online educational 
              and community initiatives to empower retail traders and investors.
            </p>
            <p>
              <a href="#" className="text-blue-500 hover:underline">Rainmatter</a>, 
              our fintech fund and incubator, has invested in several fintech 
              startups with the goal of growing the Indian capital markets.
            </p>
            <p>
              And yet, we are always up to something new every day. Catch up on 
              the latest updates on our{" "}
              <a href="#" className="text-blue-500 hover:underline">blog</a> or 
              see what the media is{" "}
              <a href="#" className="text-blue-500 hover:underline">saying about us</a>{" "}
              or learn more about our business and product{" "}
              <a href="#" className="text-blue-500 hover:underline">philosophies</a>.
            </p>
          </div>

        </div>
      </div>
    </section>
			
		</>
	 );
}

export default Hero;