import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
	return (
		<section className="w-full bg-[#fbfbfb] border-b border-gray-200 pt-16 pb-12">
			<div className="max-w-6xl mx-auto px-6">

				{/* Top Row: Title & Button */}
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
					<h1 className="text-3xl md:text-4xl font-medium text-gray-900">
						Support Portal
					</h1>

					<button className="bg-[#387ed1] hover:bg-blue-600 text-white px-6 py-2 rounded-sm text-sm font-medium transition-colors shadow-sm">
						My tickets
					</button>
				</div>

				{/* Search Bar Row */}
				<div className="relative group max-w-5xl">
					{/* Search Icon */}
					<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
						<Search size={20} className="text-gray-700 group-focus-within:text-blue-500 transition-colors" />
					</div>

					{/* Input Box */}
					<input
						type="text"
						placeholder="Eg: How do I open my account, How do i activate F&O..."
						className="w-full p-4 pl-12 pr-4 bg-white border border-gray-200 rounded-sm text-lg outline-none focus:border-blue-400  transition-all placeholder:text-gray-400 text-gray-900"
					/>
				</div>

			</div>
		</section>
	);
};

export default Hero;