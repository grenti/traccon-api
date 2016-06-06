
const mongoose = require('mongoose');
const { Schema } = mongoose;

const presenterSchema = new Schema({
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true }
  },
  position: { type: String, required: true },
  employer: { type: String, required: false },
  description: { type: String, required: true },
  contact: [{
    type: { type: String, required: true, enum: ['Email', 'Twitter', 'Facebook', 'Google+', 'Web'] },
    value: { type: String, required: true }
  }],
  image: { type: String },
  reviews: [{
    rating: { type: Number, required: true, min: 0, max: 5, enum: [0, 1, 2, 3, 4, 5] },
    description: { type: String, required: true }
  }]
});

module.exports = mongoose.model('Presenter', presenterSchema);
