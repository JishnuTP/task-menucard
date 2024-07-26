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
      const response = await axios.get('https://task-menucard-api.vercel.app/api/items/categories',  {
        headers: {
          'Content-Type': 'application/json',
          // Include credentials if needed
        },
        withCredentials: true // Important for handling cookies or authentication headers
      })
      setCategories(response.data);
    } catch (err) {
      setError('Failed to fetch categories');
    }
  };

  // Fetch menu items from the server
  const fetchMenuItems = async () => {
    try {
      const response = await axios.get('https://task-menucard-api.vercel.app/api/items/menuitems' {
        headers: {
          'Content-Type': 'application/json',
          // Include credentials if needed
        },
        withCredentials: true // Important for handling cookies or authentication headers
      });
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
