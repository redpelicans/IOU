const { endpoint } = require('trip-mock');

endpoint('events', { uri: '/api/events', method: 'get' });
endpoint('people', { uri: '/api/people', method: 'get' });
