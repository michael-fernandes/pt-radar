import { combineReducers } from 'redux';
import {
  PRE_DIMENSION,
  POST_DIMENSION,
  DEMOGRAPHICS_DIMENSION,
  SESSION,
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

function demographics(state = {}, action) {
  switch (action.type) {
    case DEMOGRAPHICS_DIMENSION:
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

export default combineReducers({
  pre,
  post,
  demographics,
  session
});
