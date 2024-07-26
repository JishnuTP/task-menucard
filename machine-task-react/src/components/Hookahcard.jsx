import React from 'react';
import { useNavigate } from 'react-router-dom';

const HookahCard = () => {
    const navigate = useNavigate();

    const flavors = [
        'Mint',
        'Grape',
        'Apple',
        'Watermelon',
    ];

    const handleOrderNow = () => {
        // Handle navigation or any other action
        navigate('/order-hookah'); // Replace with your actual route
    };

    return (
        <div className="relative bg-cover bg-center" style={{ backgroundImage: 'url(https://your-background-image-url.com)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative flex items-center justify-center min-h-screen p-4">
                <div className="relative border border-gray-700 p-6 md:p-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-2xl w-full max-w-4xl md:max-w-5xl text-white">
                    
                    {/* Hookah Logo */}
                    <div className="text-center mb-6 md:mb-8">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3XYlmo3gSubRk3zr8JoOcFtKJUgIEWMxO5g&s" // Replace with actual hookah logo URL
                            alt="Hookah Logo"
                            className="w-32 h-32 md:w-36 md:h-36 mx-auto mb-4 rounded-full border-4 border-gray-600"
                        />
                    </div>

                    {/* Content */}
                    <div className="text-center mb-6 md:mb-8">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">-----HOOKAH BAR----</h1>
                        <p className="text-gray-300 text-base md:text-lg lg:text-xl">Explore our variety of flavorful hookah options.</p>
                    </div>

                    {/* List of flavors */}
                    <div className="flex flex-col md:flex-row md:justify-center">
                        <div className="w-full md:w-4/5 px-2 md:px-4">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 text-center">
                                {flavors.map((flavor, index) => (
                                    <div key={index} className="p-4 md:p-6 bg-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                        <p className="text-sm md:text-base font-semibold">{flavor}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Order Now Button */}
                    <div className="text-center mt-6">
                        <button
                            onClick={handleOrderNow}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Order Now
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default HookahCard;
