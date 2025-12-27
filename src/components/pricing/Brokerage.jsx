import React from 'react';

function Brokerage() {
    return (
        <section className="w-full py-12 bg-white">
            <div className="container mx-auto px-6 lg:px-24 w-[80%] space-y-20">
                
                {/* 1. Charges for account opening */}
                <div className="overflow-x-auto">
                    <h2 className="text-2xl font-medium text-gray-800 mb-6">
                        Charges for account opening
                    </h2>
                    <table className="w-full text-left border-collapse border border-gray-200">
                        <thead>
                            <tr className="border-b border-gray-200 bg-gray-50">
                                <th className="p-4 font-medium text-gray-600 w-2/3">Type of account</th>
                                <th className="p-4 font-medium text-gray-600">Charges</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr className="border-b border-gray-100">
                                <td className="p-4">Online account</td>
                                <td className="p-4">
                                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-bold">FREE</span>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="p-4">Offline account</td>
                                <td className="p-4">
                                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-bold">FREE</span>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="p-4">NRI account (offline only)</td>
                                <td className="p-4">₹ 500</td>
                            </tr>
                            <tr>
                                <td className="p-4">Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                                <td className="p-4">₹ 500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* 2. Demat AMC (Annual Maintenance Charge) */}
                <div className="overflow-x-auto">
                    <h2 className="text-2xl font-medium text-gray-800 mb-6">
                        Demat AMC (Annual Maintenance Charge)
                    </h2>
                    <table className="w-full text-left border-collapse border border-gray-200">
                        <thead>
                            <tr className="border-b border-gray-200 bg-gray-50">
                                <th className="p-4 font-medium text-gray-600 w-2/3">Value of holdings</th>
                                <th className="p-4 font-medium text-gray-600">AMC</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr className="border-b border-gray-100">
                                <td className="p-4">Up to ₹4 lakh</td>
                                <td className="p-4">
                                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-bold">FREE*</span>
                                </td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="p-4">₹4 lakh - ₹10 lakh</td>
                                <td className="p-4">₹ 100 per year, charged quarterly*</td>
                            </tr>
                            <tr>
                                <td className="p-4">Above ₹10 lakh</td>
                                <td className="p-4">₹ 300 per year, charged quarterly</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="mt-4 text-xs text-gray-500">
                        * Lower AMC is applicable only if the account qualifies as a BSDA. <a href="#" className="text-blue-500">Learn more</a>.
                    </p>
                </div>

                {/* 3. Charges for optional value added services (New) */}
                <div className="overflow-x-auto">
                    <h2 className="text-2xl font-medium text-gray-800 mb-6">
                        Charges for optional value added services
                    </h2>
                    <table className="w-full text-left border-collapse border border-gray-200">
                        <thead>
                            <tr className="border-b border-gray-200 bg-gray-50">
                                <th className="p-4 font-medium text-gray-600">Service</th>
                                <th className="p-4 font-medium text-gray-600">Billing Frequency</th>
                                <th className="p-4 font-medium text-gray-600">Charges</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr className="border-b border-gray-100">
                                <td className="p-4">Tickertape</td>
                                <td className="p-4">Monthly / Annual</td>
                                <td className="p-4">Free: 0 | Pro: 249/2399</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                                <td className="p-4">Smallcase</td>
                                <td className="p-4">Per transaction</td>
                                <td className="p-4">Buy & Invest More: 100 | SIP: 10</td>
                            </tr>
                            <tr>
                                <td className="p-4">Kite Connect</td>
                                <td className="p-4">Monthly</td>
                                <td className="p-4">Connect: 500 | Personal: Free</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    );
}

export default Brokerage;