import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuContext } from '../context/MenuContext';

const CategoryButtons = () => {
  const navigate = useNavigate();
  const { categories, loading, error } = useContext(MenuContext);

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div 
      className="flex flex-wrap items-center justify-center p-4 bg-black"
      style={{ 
        backgroundImage: "url('https://t4.ftcdn.net/jpg/01/98/50/63/360_F_198506301_zS7IDI4YU7kW0zFVagjTwl8AVI7lZvjP.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {loading && <p className="text-white">Loading categories...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && categories.length > 0 ? (
        categories.map((category) => (
          <button
            key={category.id}
            onClick={() => navigateTo(`/${category.name.toLowerCase()}`)}
            className="border text-white p-2 md:p-3 text-sm md:text-base font-bold bg-black rounded m-2 md:m-3 hover:bg-blue-600 hover:text-black transition-colors duration-300 ease-in-out"
          >
            {category.name.toUpperCase()}
          </button>
        ))
      ) : (
        <p className="text-white">No categories available.</p>
      )}
    </div>
  );
};

export default CategoryButtons;
