import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuContext } from '../context/MenuContext';

const DrinkCard = () => {
  const navigate = useNavigate();
  const { menuItems, loading, error } = useContext(MenuContext);

  // Filter to show only juices
  const juices = menuItems.filter(item => item.category.toLowerCase() === 'juice'); // Adjust the category condition based on your data structure

  // Show only the first 8 items
  const displayedItems = juices.slice(0, 8);

  // Navigate to the Drinks page
  const handleViewMore = () => {
    navigate('/drinks');
  };

  return (
    <div className="relative bg-cover bg-center p-4">
      <div className="flex items-center justify-center p-4">
        <div className="relative border border-white p-6 bg-black rounded-lg shadow-lg w-full max-w-5xl text-white">
          {/* Top images */}
          <img
            src=".https://img.pikbest.com/origin/09/21/28/27UpIkbEsTxqP.png!w700wp" // Replace with actual left image URL
            alt="Left"
            className="absolute top-0 left-0 w-24 h-24 -mt-8 ml-4"
          />
          <img
            src="https://img.pikbest.com/origin/09/21/28/27UpIkbEsTxqP.png!w700wp" // Replace with actual right image URL
            alt="Right"
            className="absolute top-0 right-0 w-24 h-246 -mt-8 mr-4"
          />

          {/* Content */}
          <div className="text-center mb-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">-----JUICES----</h1>
            <p className="text-gray-400 text-base md:text-lg">Explore our diverse range of refreshing juices.</p>
          </div>

          {/* List of demo items */}
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <ul className="list-disc list-inside text-left text-base md:text-lg">
                {loading && <li>Loading...</li>}
                {error && <li className="text-red-500">{error}</li>}
                {!loading && !error && displayedItems.slice(0, Math.ceil(displayedItems.length / 2)).map((item, index) => (
                  <li key={index} className="mb-4">
                    <h2 className="text-lg font-semibold flex justify-between">
                      <span>{item.title}</span>
                      <span>..............................</span>
                      <span className="text-lg text-gray-300">{item.price}/-</span>
                    </h2>
                    <p className="text-base md:text-sm">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <ul className="list-disc list-inside text-left text-base md:text-lg">
                {!loading && !error && displayedItems.slice(Math.ceil(displayedItems.length / 2)).map((item, index) => (
                  <li key={index} className="mb-4">
                    <h2 className="text-lg font-semibold flex justify-between">
                      <span>{item.title}</span>
                      <span>..............................</span>
                      <span className="text-lg text-gray-300">{item.price}/-</span>
                    </h2>
                    <p className="text-base md:text-sm">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* View More Button */}
          {juices.length > 8 && (
            <div className="text-center mt-4">
              <button
                onClick={handleViewMore}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                View More Drinks
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
