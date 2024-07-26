const mongoose = require('mongoose');

const HookahSchema = new mongoose.Schema({
  hookahName: { type: String, required: true },
  flavor: { type: String, required: true }
});

const Hookah = mongoose.model('Hookah', HookahSchema);
module.exports = Hookah;
