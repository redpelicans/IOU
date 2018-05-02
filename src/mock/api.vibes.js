const { vibe } = require('farso');
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
    mock('events').reply([200, events]);

    mock('people').reply([200, people]);
  },
);
