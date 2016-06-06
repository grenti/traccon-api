
const environment = process.env.NODE_ENV || 'development';
const base = require('./environments/all');
const environmentSettings = require(`./environments/${environment}`);

module.exports = Object.assign({}, base, environmentSettings);
