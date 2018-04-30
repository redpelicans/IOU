const { vibe } = require('trip-mock');
const { path } = require('ramda');

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
    mock('events')
      .checkHeader({ 'content-Type': /application\/json/ })
      .reply([200, events]);

    mock('people')
      .checkHeader({ 'content-Type': /application\/json/ })
      .reply([200, people]);
  },
);
