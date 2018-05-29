const faker = require('faker');
const { times, map, uniq, compose, prop } = require('ramda');

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandom = list => () => list[random(0, list.length - 1)];

const Person = () => ({
  id: faker.random.uuid(),
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  email: faker.internet.email(),
  createdAt: faker.date.past(),
});

const people = times(Person, 50);

const Spending = () => ({
  id: faker.random.uuid(),
  label: faker.lorem.words(),
  due: random(10, 1000),
  currency: 'EUR',
  createdAt: faker.date.past(),
});

const spendings = times(Spending, 5);

const Event = () => ({
  id: faker.random.uuid(),
  label: faker.lorem.words(),
  attendeeIds: compose(uniq, map(prop('id')))(
    times(getRandom(people), random(0, 10)),
  ),
  spendingIds: compose(uniq, map(prop('id')))(
    times(getRandom(spendings), random(0, 10)),
  ),
  image: faker.image.image(),
  currency: 'EUR',
  createdAt: faker.date.past(),
});

const events = times(Event, 10);

module.exports = {
  people,
  events,
  spendings,
};
