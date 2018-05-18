const { endpoint } = require('farso');

endpoint('events:list', { uri: '/api/events', method: 'get' });
endpoint('event:add', { uri: '/api/events', method: 'post' });
endpoint('event:update', { uri: '/api/events/:id', method: 'patch' });
endpoint('event:get', { uri: '/api/events/:id', method: 'get' });
endpoint('event:delete', { uri: '/api/events/:id', method: 'delete' });
endpoint('people:list', { uri: '/api/people', method: 'get' });
