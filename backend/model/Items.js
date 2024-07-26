const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  category: {
    type: String,
  },
});

module.exports = mongoose.model('Item', ItemSchema);
