import { requestJson } from './utils';

export const LOAD_SPENDINGS = 'spendings:load';
export const loadSpendings = () => dispatch => {
  requestJson({
    method: 'GET',
    url: '/api/spendings',
  })
    .then(data => dispatch(spendingsLoaded(data)))
    /* eslint-disable no-console */
    .catch(() => alert('spendings:load ERROR'));
  /* eslint-enable no-console */
};

export const SPENDINGS_LOADED = 'spendings:loaded';
export const spendingsLoaded = spendings => ({
  type: SPENDINGS_LOADED,
  payload: { spendings },
});
