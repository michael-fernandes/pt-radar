import { createStore } from 'redux';
import reducer from './reducer'

export default function store() {
  const store = createStore(reducer);
  window.s = store;
  return store;
}
