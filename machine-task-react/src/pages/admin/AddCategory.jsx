import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import { MenuContext } from '../../context/MenuContext';

function AddCategory() {
  const { categories, setCategories, fetchCategories } = useContext(MenuContext); // Use the context
  const [categoryName, setCategoryName] = useState('');

  // Handle form submission
  const handleAddCategory = async (event) => {
    event.preventDefault();
    if (categoryName.trim() === '') return; // Prevent empty categories

    try {
      // Post the new category to the server
      await axios.post('http://localhost:5000/api/items/addcategories', { name: categoryName });

      // Refetch categories from the server
      await fetchCategories();

      setCategoryName(''); // Clear the input field
    } catch (err) {
      console.error('Error adding category:', err);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h5" gutterBottom style={{ marginBottom: '20px', textAlign: 'center' }}>
        Add Category
      </Typography>
      <Paper style={{ padding: '20px', marginBottom: '20px' }}>
        <form onSubmit={handleAddCategory}>
          <TextField
            label="Category Name"
            variant="outlined"
            fullWidth
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            style={{ marginBottom: '20px' }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Add Category
          </Button>
        </form>
      </Paper>
      <Paper style={{ padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Categories List
        </Typography>
        <List>
          {categories.length === 0 ? (
            <ListItem>
              <ListItemText primary="No categories added yet" />
            </ListItem>
          ) : (
            categories.map((category) => (
              <ListItem key={category._id}>
                <ListItemText primary={category.name} />
              </ListItem>
            ))
          )}
        </List>
      </Paper>
    </div>
  );
}

export default AddCategory;
