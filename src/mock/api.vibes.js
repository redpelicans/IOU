const { vibe } = require('farso');
const faker = require('faker');
const { findIndex, propEq, find, path, remove, filter } = require('ramda');

vibe.default(
  'Main',
  (
    mock,
    {
      globals: {
        api: {
          clientId,
          clientSecret,
          data: { events, people, spendings },
        },
      },
    },
  ) => {
    mock('events:list').reply([200, events]);
    mock('event:add').reply((req, res) => {
      const id = faker.random.uuid();
      const newEvent = {
        id,
        attendeeIds: [],
        currency: 'EUR',
        ...req.body,
        image: faker.image.image(),
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

    mock('spendings:list').reply((req, res) =>
      res.send(filter(spending => !spending.deleted, spendings)),
    );
    mock('spending:add').reply((req, res) => {
      const id = faker.random.uuid();
      const newSpending = {
        id,
        currency: 'EUR',
        createdAt: new Date(),
        ...req.body,
      };
      spendings.push(newSpending);
      res.json(newSpending);
    });
    mock('spending:update').reply((req, res) => {
      const updates = req.body;
      const index = findIndex(propEq('id', req.params.id), spendings);
      if (index === -1) return res.sendStatus(404);
      const updatedSpending = { ...spendings[index], ...updates };
      spendings[index] = updatedSpending;
      res.json(updatedSpending);
    });
    mock('spending:delete').reply((req, res) => {
      const updates = req.body;
      const index = findIndex(propEq('id', req.params.id), spendings);
      if (index === -1) return res.sendStatus(404);
      const updatedSpending = { ...spendings[index], deleted: true };
      spendings[index] = updatedSpending;
      res.json(updatedSpending);
    });

    mock('people:list').reply([200, people]);
  },
);
