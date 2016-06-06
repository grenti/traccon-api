// Bring Mongoose into the app
const mongoose = require('mongoose');
const config = require('./index');
// const Logger = require('bunyan');
// const log = new Logger({ name: 'MongooseConfig' });
const { database } = config;
const { mongo } = database;

mongoose.connect(mongo.url);
console.info(mongo.url);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', () => {
  console.log(`Mongoose default connection open to ${mongo.url}`);
});

// If the connection throws an error
mongoose.connection.on('error', err => {
  console.log(`Mongoose default connection error: ${err}`);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
