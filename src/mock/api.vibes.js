const { vibe } = require('farso');
const faker = require('faker');
const { findIndex, propEq, find, path } = require('ramda');

vibe.default(
  'Main',
  (
    mock,
    {
      globals: {
        api: {
          clientId,
          clientSecret,
          data: { events, people },
        },
      },
    },
  ) => {
    mock('events:list').reply([200, events]);
    mock('people:list').reply([200, people]);
    mock('event:add').reply((req, res) => {
      console.log('req', req.body);
      const id = faker.random.uuid();
      const newEvent = {
        attendeeIds: [],
        currency: 'EUR',
        ...req.body,
        id,
        createdAt: new Date(),
      };
      events.push(newEvent);
      res.json(newEvent);
    });
    mock('event:update').reply((req, res) => {
      const updates = req.body;
      const index = findIndex(propEq('id', req.params.id), events);
      if (index === -1) return res.sendStatus(404);
      const updatedEvent = { ...events[index], ...updates };
      events[index] = updatedEvent;
      res.json(updatedEvent);
    });
    mock('event:get').reply((req, res) => {
      const { id } = req.params;
      res.json(find(propEq('id', id), events));
    });
  },
);
