// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Headers = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-black p-2">
            <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQn4Iunb4AX7H6oaSRCoXYq3Zdrh-_aGdxA&s" alt="Logo" className="w-10 h-10 mr-2" /> {/* Adjust size as needed */}
                    <div className="text-white text-1xl font-bold flex flex-col">
                        <span className="text-blue-500 hover:text-blue-600">DEEP</span>
                        <span>SOFT</span>
                    </div>
                </div>
                <nav className="hidden md:flex text-1x  space-x-8 fontfamily-Oswald">
                    <Link to="/" className="text-white mt-2 hover:text-blue-600">Home</Link>
                    <Link to="/admin" className="text-white mt-2 hover:text-blue-600">ADMIN- PAGE</Link>
                    <Link to="/services" className="text-white mt-2 hover:text-blue-600">Make a Reservation</Link>
                    <Link to="/contact" className="text-white mt-2 hover:text-blue-600">Contact</Link>
                </nav>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <nav className="md:hidden bg-black p-4">
                    <Link to="/" className="block text-white mb-2 mt-2">Home</Link>
                    <Link to="/admin" className="block text-white mb-2 mt-2">ADMIN PAGE</Link>
                  
                    <Link to="/contact" className="block text-white mt-2">Contact</Link>
                </nav>
            )}
        </header>
    );
};

export default Headers;
