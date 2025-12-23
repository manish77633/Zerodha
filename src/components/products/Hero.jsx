function Hero() {
	return (
		<>


			{/* <section className="w-full flex items-center justify-center mt-8 bg-white"> */}
			<div className="w-full pt-20 pb-20 flex flex-col items-center justify-center  sm:w-full">

				<div className="flex flex-col items-center text-center w-full  gap-2">
					<h1 className='text-2xl md:text-3xl font-semibold text-gray-700 leading-tight '>
						Zerodha Products
					</h1>

					<p className='text-lg sm:text-lg md:text-lg text-gray-500 mt-3 md:mt-2 leading-relaxed'>

						Sleek, modern, and intuitive trading platforms

					</p>

					{/* BUTTON: Mobile pe text-base aur kam padding, Desktop pe text-xl aur zyada padding */}
					<p className="font-semibold text-gray-500">Check out our <a href="" className="text-blue-600 hover:text-black ">investment offerings →</a></p>
				</div>

			</div>
			{/* </section> */}

		</>
	);
}

export default Hero;