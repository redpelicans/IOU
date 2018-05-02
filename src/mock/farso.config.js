const path = require('path');
const data = require('./data');

module.exports = {
  host: 'localhost',
  port: 8181,
  vibes: path.join(__dirname, './*.vibes.js'),
  endpoints: path.join(__dirname, './endpoints.js'),
  globals: {
    api: {
      clientId: 1,
      clientSecret: 2,
      data,
    },
  },
};
