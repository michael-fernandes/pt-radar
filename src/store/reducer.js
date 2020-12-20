import { combineReducers } from 'redux';
import {
  PRE_DIMENSION,
  POST_DIMENSION,
  SESSION,
  CHART,
} from '../resources/constants';

function pre(state = {}, action) {
  switch (action.type) {
    case PRE_DIMENSION:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
}

function post(state = {}, action) {
  switch (action.type) {
    case POST_DIMENSION:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
}

function session(state = {}, action) {
  switch (action.type) {
    case SESSION:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
}

function chart(state = {}, action) {
  switch (action.type) {
    case CHART:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
}

export default combineReducers({
  pre,
  post,
  session,
  chart,
});
