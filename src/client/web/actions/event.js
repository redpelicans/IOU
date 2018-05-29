import { requestJson } from './utils';

export const LOAD_SPENDINGS = 'spendings:load';
export const loadSpendings = () => dispatch => {
  requestJson({
    method: 'GET',
    url: '/api/spendings',
  })
    .then(data => dispatch(spendingsLoaded(data)))
    .catch(() => alert('spendings:load ERROR'));
};

export const SPENDINGS_LOADED = 'spendings:loaded';
export const spendingsLoaded = spendings => ({
  type: SPENDINGS_LOADED,
  payload: { spendings },
});

export const ADD_SPENDING = 'spending:add';
export const addSpending = data => dispatch => {
  requestJson({
    method: 'POST',
    url: '/api/spendings',
    body: data,
  })
    .then(data => dispatch(spendingAdded(data)))
    .catch(() => alert('spending:add ERROR'));
};

export const SPENDING_ADDED = 'spending:added';
export const spendingAdded = spending => ({
  type: SPENDING_ADDED,
  payload: { spending },
});

export const UPDATE_SPENDING = 'spending:update';
export const updateSpending = data => dispatch => {
  requestJson({
    method: 'PATCH',
    url: `/api/spendings/${data.id}`,
    body: data,
  })
    .then(data => dispatch(spendingUpdated(data)))
    .catch(() => alert('spendings:update ERROR'));
};

export const SPENDING_UPDATED = 'spending:updated';
export const spendingUpdated = spending => ({
  type: SPENDING_UPDATED,
  payload: { spending },
});

export const DELETE_SPENDING = 'spending:deleted';
export const deleteSpending = id => dispatch => {
  requestJson({
    method: 'DELETE',
    url: `/api/spendings/${id}`,
  })
    .then(data => dispatch(spendingDeleted(data)))
    .catch(() => alert('spending:delete ERROR'));
};

export const SPENDING_DELETED = 'spending:deleted';
export const spendingDeleted = ({ id }) => ({
  type: SPENDING_DELETED,
  payload: { id },
});
