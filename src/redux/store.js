import { createStore } from 'redux';
import { listReducer } from './reducer';

export const initialState = {
  contacts: [],
  filter: '',
};

export const store = createStore(listReducer, initialState);
