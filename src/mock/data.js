const faker = require('faker');
const { times, map, uniq, compose, prop } = require('ramda');

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandom = list => () => list[random(0, list.length - 1)];

let i = 0;
const Person = () => ({
  id: `${i++}`,
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  email: faker.internet.email(),
  createdAt: faker.date.past(),
});

const people = times(Person, 10);

i = 0;
const Event = () => ({
  id: `${i++}`,
  label: faker.lorem.words(),
  attendeeIds: compose(uniq, map(prop('id')))(
    times(getRandom(people), random(1, 10)),
  ),
  image: faker.image.image(),
  currency: 'EUR',
  createdAt: faker.date.past(),
});

const events = times(Event, 4);

i = 0;
const Spending = () => ({
  id: `${i++}`,
  eventId: prop('id', getRandom(events)()),
  ownerId: prop('id', getRandom(people)()),
  attendees: [
    { id: i, personId: '1', key: '40' },
    { id: i, personId: '2', key: '20' },
    { id: i, personId: '3', key: '30' },
    { id: i, personId: '4', key: '10' },
  ],
  label: faker.lorem.words(),
  amount: random(10, 1000),
  currency: 'EUR',
  createdAt: faker.date.past(),
});

const spendings = times(Spending, 10);

module.exports = {
  people,
  events,
  spendings,
};
