import React from "react";

const Funds = () => {
	return (
		<div className="px-4 py-4 md:px-8 md:py-2 animate-in fade-in duration-500 max-h-screen">
			{/* Top Header Section - Compact */}
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-3 mb-4 gap-2">
				<p className="text-gray-400 text-[13px]">
					Instant, zero-cost fund transfers with UPI
				</p>
				<div className="flex gap-2">
					<button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-sm text-md font-semibold transition-colors">
						Add funds
					</button>
					<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-sm text-md font-semibold transition-colors">
						Withdraw
					</button>
				</div>
			</div>

			{/* Equity Section Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Left Column: Equity Details */}
				<div>
					<div className="flex items-center gap-2 mb-3">
						<span className="text-gray-400 text-sm">🕒</span>
						<h2 className="text-md font-normal text-gray-700">Equity</h2>
					</div>

					<div className="space-y-0 text-[13px] border border-gray-300 p-4">
						{/* Main Highlighted Rows - Reduced Padding */}
						<div className="flex justify-between py-2 border-b border-gray-50">
							<span className="text-gray-500 text-md">Available margin</span>
							<span className="text-2xl font-normal text-blue-700">4,043.10</span>
						</div>
						<div className="flex justify-between py-2 border-b border-gray-50">
							<span className="text-gray-500 text-md">Used margin</span>
							<span className="text-2xl font-normal text-gray-900">3,757.30</span>
						</div>
						<div className="flex justify-between py-2 border-b border-gray-200 mb-2">
							<span className="text-gray-500 text-md">Available cash</span>
							<span className="text-2xl font-normal text-gray-900">4,043.10</span>
						</div>

						{/* Detailed Rows - Very Compact */}
						{[
							{ label: "Opening Balance", value: "4,043.10" },
							{ label: "Opening Balance", value: "4,043.10" },
							{ label: "Payin", value: "4064.00" },
							{ label: "SPAN", value: "0.00" },
							{ label: "Delivery margin", value: "0.00" },
							{ label: "Exposure", value: "0.00" },
							{ label: "Options premium", value: "0.00" },
						].map((item, index) => (
							<div key={index} className="flex justify-between py-1.5 border-b border-gray-50">
								<span className="text-gray-500 text-md ">{item.label}</span>
								<span className="text-gray-800 text-md font-semibold">{item.value}</span>
							</div>
						))}

						<div className="flex justify-between py-1.5 border-t border-gray-200">
							<span className="text-gray-500   text-md">Collateral (Liquid funds)</span>
							<span className="text-gray-700 text-md font-semibold">0.00</span>
						</div>
						<div className="flex justify-between py-1.5 border-b border-gray-50">
							<span className="text-gray-500  text-md">Collateral (Equity)</span>
							<span className="text-gray-700 text-md font-semibold">0.00</span>
						</div>

						{/* Total Collateral Added */}
						<div className="flex justify-between py-2 mt-1">
							<span className="text-gray-500 font-semibold text-md">Total collateral</span>
							<span className="text-gray-900 font-semibold text-md font-semibold">0.00</span>
						</div>
					</div>
				</div>

				{/* Right Column: Commodity Placeholder */}
				<div className="hidden md:flex flex-col items-center justify-center text-center p-6 border-l border-gray-100 h-fit my-auto">
					<p className="text-gray-300 text-base italic">
						You don't have any commodity account
					</p>
					<button className="mt-3 text-blue-500 hover:underline text-xs">
						Activate Commodity
					</button>
				</div>
			</div>
		</div>
	);
};

export default Funds;