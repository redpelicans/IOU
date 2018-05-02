const { endpoint } = require('farso');

endpoint('events', { uri: '/api/events', method: 'get' });
endpoint('people', { uri: '/api/people', method: 'get' });
