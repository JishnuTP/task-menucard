import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { MenuContext } from '../../context/MenuContext';

const AdminAddMenu = () => {
  const { categories, menuItems, setMenuItems, loading, error } = useContext(MenuContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [newFlavor, setNewFlavor] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  // Filter items based on selected category
  useEffect(() => {
    if (category) {
      setFilteredItems(menuItems.filter(item => item.category === category));
    } else {
      setFilteredItems(menuItems);
    }
  }, [category, menuItems]);

  const handleAddMenuItem = async () => {
    if (category === 'hookah') {
      if (!newFlavor) {
        alert('Please enter a flavor');
        return;
      }
      try {
        const response = await axios.post('https://task-menucard-api.vercel.app/api/items/addflavor', {
          flavor: newFlavor.trim(),
          hookahName: title // Assuming title is used as hookah name
        });
        console.log('Flavor Added:', response.data);

        // Clear the new flavor input after successful addition
        setNewFlavor('');

        // Optionally reset the category to show the new flavor
        setCategory('');
      } catch (err) {
        console.error('Failed to add flavor', err);
      }
    } else {
      if (!title || !description || !price || !category) {
        alert('Please fill out all fields');
        return;
      }
      try {
        const response = await axios.post('https://task-menucard-api.vercel.app/api/items/additems', {
          title,
          description,
          price,
          category
        });
        console.log('Menu Item Added:', response.data);

        // Add the new item to the list and reset filter
        const newItem = response.data;
        setMenuItems([...menuItems, newItem]);
        setCategory(''); // Reset the filter when a new item is added

        // Reset form fields
        setTitle('');
        setDescription('');
        setPrice('');
        setCategory('');
      } catch (err) {
        console.error('Failed to add menu item', err);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Add Menu Item</h1>
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        {loading && <p>Loading categories...</p>}
        {error && <p className="text-red-500">{error}</p>}
        
        {/* Conditional Rendering Based on Category */}
        {category === 'hookah' ? (
          <>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter hookah name"
              className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
            />
            <input
              type="text"
              value={newFlavor}
              onChange={(e) => setNewFlavor(e.target.value)}
              placeholder="Enter new flavor"
              className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
            />
          </>
        ) : (
          <>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter menu item title"
              className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter menu item description"
              className="border border-gray-300 rounded-lg p-2 mb-4 w-full h-24 resize-none"
            />
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter menu item price"
              className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
            />
          </>
        )}
        
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        
        <button
          onClick={handleAddMenuItem}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
        >
          {category === 'hookah' ? 'Add Flavor' : 'Add Menu Item'}
        </button>
      </div>
      
      {/* List Menu Items */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg mt-6">
        <h2 className="text-2xl font-bold mb-4">Menu Items</h2>
        <div className="mb-4">
          <label htmlFor="filter-category" className="block text-gray-700 mb-2">Filter by Category</label>
          <select
            id="filter-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-2">{item.description}</p>
                <p className="text-gray-900 font-bold mb-2">${item.price}</p>
                <p className="text-gray-600">Category: {item.category}</p>
              </div>
            ))
          ) : (
            <p>No menu items available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminAddMenu;
