
const mongoose = require('mongoose');
const { Schema } = mongoose;

const sessionSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  length: { type: Number, required: true },
  level: { type: String, required: true, enum: ['Beginner', 'Intermediate', 'Advanced'] },
  presenter: { type: Schema.Types.ObjectId, ref: 'Presenter' },
  track: { type: Schema.Types.ObjectId, ref: 'Track' },
  reviews: [{
    rating: { type: Number, required: true, min: 0, max: 5, enum: [0, 1, 2, 3, 4, 5] },
    description: { type: String, required: true }
  }]
});

module.exports = mongoose.model('Session', sessionSchema);
