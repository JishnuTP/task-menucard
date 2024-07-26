import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a Context
const MenuContext = createContext();

// Create a Provider Component
const MenuProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch categories from the server
  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://task-menucard-api.vercel.app/categories')
      setCategories(response.data);
    } catch (err) {
      setError('Failed to fetch categories');
    }
  };

  // Fetch menu items from the server
  const fetchMenuItems = async () => {
    try {
      const response = await axios.get('https://task-menucard-api.vercel.app/menuitems');
      setMenuItems(response.data);
    } catch (err) {
      setError('Failed to fetch menu items');
    } finally {
      setLoading(false);
    }
  };

  

  // Initial fetch
  useEffect(() => {
    fetchCategories();
    fetchMenuItems();
  }, []);

  return (
    <MenuContext.Provider value={{ categories, setCategories, fetchCategories, menuItems, setMenuItems, loading, error }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuContext, MenuProvider };
