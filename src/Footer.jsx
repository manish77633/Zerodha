import React from 'react';

function Footer() {
    return (
        <footer className="bg-[#fbfbfb] border-t border-gray-200 pt-12 pb-8 font-sans">
            <div className="container w-[70%] p-4 mx-auto">
                
                {/* Section 1: Logo and Main Links */}
                <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-4 mb-12">
                    <div className="w-full md:w-1/4">
                        <img src="/media/logo.svg" alt="Zerodha Logo" className="h-5 mb-6" />
                        <p className="text-gray-500 text-[13px] leading-relaxed mb-6">
                            © 2010 - 2025, Zerodha Broking Ltd. <br /> All rights reserved.
                        </p>
                        <div className="flex gap-4 text-gray-600 mb-6">
                            <span className="hover:text-blue-500 cursor-pointer text-xl">𝕏</span>
                            <span className="hover:text-blue-500 cursor-pointer text-xl">𝑓</span>
                            <span className="hover:text-blue-500 cursor-pointer text-xl">📸</span>
                            <span className="hover:text-blue-500 cursor-pointer text-xl">in</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:w-3/4">
                        <div>
                            <h4 className="font-semibold text-gray-700 mb-4 text-[17px]">Company</h4>
                            <ul className="space-y-2 text-[14px] text-gray-500">
                                <li className="hover:text-blue-500 cursor-pointer">About</li>
                                <li className="hover:text-blue-500 cursor-pointer">Philosophy</li>
                                <li className="hover:text-blue-500 cursor-pointer">Careers</li>
                                <li className="hover:text-blue-500 cursor-pointer">Zerodha.tech</li>
                                <li className="hover:text-blue-500 cursor-pointer">Press & media</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-700 mb-4 text-[17px]">Support</h4>
                            <ul className="space-y-2 text-[14px] text-gray-500">
                                <li className="hover:text-blue-500 cursor-pointer">Contact us</li>
                                <li className="hover:text-blue-500 cursor-pointer">Support portal</li>
                                <li className="hover:text-blue-500 cursor-pointer">Z-Connect blog</li>
                                <li className="hover:text-blue-500 cursor-pointer">List of charges</li>
                                <li className="hover:text-blue-500 cursor-pointer">Downloads & resources</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-700 mb-4 text-[17px]">Account</h4>
                            <ul className="space-y-2 text-[14px] text-gray-500">
                                <li className="hover:text-blue-500 cursor-pointer">Open demat account</li>
                                <li className="hover:text-blue-500 cursor-pointer">Minor demat account</li>
                                <li className="hover:text-blue-500 cursor-pointer">NRI demat account</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Section 2: Detailed Legal Text (As per your request) */}
                <div className="text-[10px] text-[#9b9b9b] leading-[1.8] space-y-5 border-t border-gray-200 pt-8 text-justify">
                    <p>
                        Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
                    </p>

                    <p>
                        Procedure to file a complaint on <span className="text-blue-500 cursor-pointer">SEBI SCORES</span>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances.
                    </p>

                    <p className="font-semibold text-gray-600">
                        Smart Online Dispute Resolution | Grievances Redressal Mechanism
                    </p>

                    <p>
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>

                    <p>
                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    </p>

                    <p>
                        India's largest broker based on networth as per NSE. <span className="text-blue-500 cursor-pointer">NSE broker factsheet</span>
                    </p>

                    <p>
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <span className="text-blue-500 cursor-pointer">create a ticket here</span>.
                    </p>

                    <p className="italic">
                        *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent).
                    </p>
                </div>

                {/* Section 3: Bottom Footer Links */}
                <div className="flex flex-wrap justify-center gap-6 mt-10 text-[12px] font-semibold text-gray-500 border-t border-gray-100 pt-6">
                    <span className="hover:text-blue-600 cursor-pointer">NSE</span>
                    <span className="hover:text-blue-600 cursor-pointer">BSE</span>
                    <span className="hover:text-blue-600 cursor-pointer">MCX</span>
                    <span className="hover:text-blue-600 cursor-pointer">Terms & conditions</span>
                    <span className="hover:text-blue-600 cursor-pointer">Policies & procedures</span>
                    <span className="hover:text-blue-600 cursor-pointer">Privacy policy</span>
                    <span className="hover:text-blue-600 cursor-pointer">Disclosure</span>
                    <span className="hover:text-blue-600 cursor-pointer">For investor's attention</span>
                    <span className="hover:text-blue-600 cursor-pointer">Investor charter</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;