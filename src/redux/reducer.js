import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const items = createReducer([], {
  [actions.fetchContactsSuccess]: (_, action) => action.payload,
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [actions.fetchContactsError]: (_, action) => action.payload,
});

const phonebookReducer = combineReducers({
  items,
  filter,
  error,
});

export default phonebookReducer;
