import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuContext } from '../context/MenuContext';

const BrunchCocktailCard = () => {
  const navigate = useNavigate();
  const { menuItems, loading, error } = useContext(MenuContext);

  // Filter items to show only cocktails
  const cocktails = menuItems.filter(item => item.category.toLowerCase() === 'cocktail');

  // Show only the first 15 items
  const displayedItems = cocktails.slice(0, 15);

  // Navigate to the Brunch Cocktails page
  const handleViewMore = () => {
    navigate('/brunch-cocktails');
  };

  return (
    <div className="relative bg-cover bg-center p-4">
      <div className="flex items-center justify-center p-4">
        <div className="relative border-2 border-white p-6 bg-black rounded-lg shadow-lg w-full max-w-5xl text-white">
          {/* Top image */}
          <img
            src="../public/img.png"
            alt="Top"
            className="absolute top-0 left-0 w-20 h-20 -mt-8 ml-4"
          />

          {/* Content */}
          <div className="text-center mb-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">-----BRUNCH COCKTAILS----</h1>
            <p className="text-gray-400 text-base md:text-lg">Enjoy a variety of refreshing brunch cocktails.</p>
          </div>

          {/* List of demo items */}
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <ul className="list-disc list-inside text-left text-base md:text-lg">
                {loading && <li>Loading...</li>}
                {error && <li className="text-red-500">{error}</li>}
                {!loading && !error && displayedItems.slice(0, Math.ceil(displayedItems.length / 2)).map((item, index) => (
                  <li key={index} className="mb-4 flex justify-between items-start">
                    <div className="flex-1 text-left">
                      <h2 className="text-lg font-semibold flex justify-between items-center">
                        <span className="flex-1">{item.title}</span>
                        <span>..............................</span>
                        <span className="text-lg text-gray-300 whitespace-nowrap">{item.price}</span>
                      </h2>
                      <p className="text-base md:text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <ul className="list-disc list-inside text-left text-base md:text-lg">
                {!loading && !error && displayedItems.slice(Math.ceil(displayedItems.length / 2)).map((item, index) => (
                  <li key={index} className="mb-4 flex justify-between items-start">
                    <div className="flex-1 text-left">
                      <h2 className="text-lg font-semibold flex justify-between items-center">
                        <span className="flex-1">{item.title}</span>
                        <span>..............................</span>
                        <span className="text-lg text-gray-300 whitespace-nowrap">{item.price}</span>
                      </h2>
                      <p className="text-base md:text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom image with overlap */}
          <div className="absolute bottom-0 right-0 mb-[-1rem] mr-[-1rem] z-10">
            <img
              src="../public/img.png"
              alt="Bottom"
              className="w-24 h-24 rounded border-2 border-transparent hover:border-white transition-colors duration-300 ease-in-out"
            />
          </div>

          {/* View More Button */}
          {cocktails.length > 15 && (
            <div className="text-center mt-4">
              <button
                onClick={handleViewMore}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                View More Brunch Cocktails
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrunchCocktailCard;
