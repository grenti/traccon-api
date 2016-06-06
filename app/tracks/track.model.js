
const mongoose = require('mongoose');
const { Schema } = mongoose;

const trackSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Track', trackSchema);
