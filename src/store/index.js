import { createStore } from 'redux';
import reducer from './reducer'
import defaultState from './defaultState';

export default function store() {
  const store = createStore(reducer, defaultState);
  window.s = store;
  return store;
}
