const { endpoint } = require('farso');

endpoint('events:list', { uri: '/api/events', method: 'get' });
endpoint('event:add', { uri: '/api/events', method: 'post' });
endpoint('event:update', { uri: '/api/events/:id', method: 'patch' });
endpoint('event:get', { uri: '/api/events/:id', method: 'get' });
endpoint('people:list', { uri: '/api/people', method: 'get' });
endpoint('spendings:list', { uri: '/api/spendings', method: 'get' });
endpoint('spendings:get', { uri: '/api/spendings/:id', method: 'get' });
