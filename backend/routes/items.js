const express = require('express');
const router = express.Router();

const Category = require('../model/category');
const Items = require('../model/Items');
const Hookah = require('../model/hookah');




router.get('/categories', async (req, res) => {
 
  try {
    const category = await Category.find();
    res.json(category);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.get('/menuitems', async (req, res) => {
 
  try {
    const items = await Items.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});


// router.get('/flavors', async (req, res) => {
//  console.log("fghj");
//   try {
//     const item = await Hookah.find();
//     console.log(item);
//     res.json(item);
//   } catch (err) {
//     res.status(500).json({ msg: err.message });
//   }
// });

router.post('/addcategories', async (req, res) => {

  const { name} = req.body;

  try {
    const newcategory= new Category({ name });
    const category = await newcategory.save();
    res.json(category);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.post('/addflavor', async (req, res) => {
  const { hookahName, flavor } = req.body;
  console.log(req.body);

  try {
    console.log("fg");
    const newHookah = new Hookah({
      hookahName,
      flavor
    })
    ;
    newHookah.save();
    console.log("fgb");

    // Save the new Hookah document to the database
    ;
    console.log("dfghj");

    // Send the created Hookah document back in the response
    res.status(200).json(newHookah);
  } catch (err) {
    // Send an error response if something goes wrong
    res.status(500).json({ msg: err.message });
  }
});




router.post('/additems', async (req, res) => {

  console.log(req.body);
  const { title, description, price, category } = req.body;

  if (!title || !description || !price || !category) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newItem = new Items({
      title,
      description,
      price,
      category
    });

    const item = await newItem.save(); // Save the item to the database
    res.status(201).json(item); // Respond with the newly created item
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
