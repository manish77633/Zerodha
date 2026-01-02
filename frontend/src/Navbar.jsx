import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Signup", href: '/signup' },
        { name: "About", href: '/about' },
        { name: "Product", href: '/product' },
        { name: "Pricing", href: '/pricing' },
        { name: "Support", href: '/support' },
    ];

    return (
        <nav className="bg-white shadow-md sticky  top-0 z-50">
            <div className="w-[80%]  mx-auto px-4 sm:px-6 lg:px-24">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="shrink-0">
                        <Link to="/" className="text-2xl font-bold text-blue-600">
                            <img
                                src="/media/logo.svg"
                                alt="Logo"
                                className="h-5"
                            />
                        </Link>
                    </div>

                    {/* Desktop Links */}
{/* Desktop Links */}
<div className="hidden md:flex space-x-8 items-center">
    {navLinks.map((link) => (
        <Link
            key={link.name}
            to={link.href}
            className="text-gray-500 hover:text-blue-600 transition-colors text-[14px]"
        >
            {link.name}
        </Link>
    ))}
    {/* Dashboard Link - Port 5174 */}
    <a 
        href="http://localhost:5174/" 
        className="text-gray-500 hover:text-blue-600 transition-colors text-[14px]"
    >
        Dashboard
    </a>
</div>
                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 py-4 space-y-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-gray-800 hover:text-blue-600 py-2"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;