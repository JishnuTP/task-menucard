import React from 'react';

const ContactUs = () => {
    return (
        <div className="min-h-fit bg-black text-white p-8 flex flex-col md:flex-row">
            <div className="container mx-auto flex flex-col md:flex-row md:space-x-8 max-w-4xl">
                
                {/* Contact Information */}
                <div className="bg-black p-6 border-2 border-gray-600 rounded-lg shadow-md mb-8 md:mb-0 flex-1">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="text-gray-300 mb-2"><strong>Email:</strong> email@42barandgrill.com</p>
                    <p className="text-gray-300 mb-2"><strong>Phone:</strong> +1 470-788-8255</p>
                </div>

                {/* Company Logo and Name */}
                <div className="relative bg-black p-6 border-2 border-gray-600 rounded-lg shadow-md mb-8 md:mb-0 flex-1">
                    {/* Logo */}
                    <img
                        src="https://www.deepnetsoft.com/images/logo.png" // Replace with actual logo URL
                        alt="Company Logo"
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20  "
                    />
                    {/* Content */}
                    <div className="text-center pt-16">
                        <h3 className="text-xl font-bold">DEEP NET SOFT</h3>
                    </div>
                    <div className="text-center mt-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600 mx-2">
                            Facebook
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 mx-2">
                            Twitter
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 mx-2">
                            Instagram
                        </a>
                    </div>
                </div>

                {/* Location */}
                <div className="bg-black p-6 border-2 border-gray-600 rounded-lg shadow-md flex-1">
                    <h2 className="text-2xl font-bold mb-4">Our Location</h2>
                    <p className="text-gray-300">327 Memorial Dr SE, Atlanta, GA 30312, USA</p>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
