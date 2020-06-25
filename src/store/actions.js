/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions';
import {
  PRE_DIMENSION,
  POST_DIMENSION,
  DEMOGRAPHICS_DIMENSION,
} from '../resources/constants';

export const addDimension = (session, dimension, value) => {
  switch (session) {
    case PRE_DIMENSION:
      return preDimension(dimension, value);
    case POST_DIMENSION:
      return postDimension(dimension, value);
    case DEMOGRAPHICS_DIMENSION:
      console.log(session);
      return demographicDimension(dimension, value);
    default:
      return {};
  }
}

const demographicDimension = createAction(
  DEMOGRAPHICS_DIMENSION,
  (dimension, value) => ({
    [dimension]: value,
  })
);

const preDimension = createAction(
  PRE_DIMENSION,
  (dimension, value) => ({
    [dimension]: value,
  })
);

const postDimension = createAction(
  POST_DIMENSION,
  (dimension, value) => ({
    [dimension]: value,
  })
);

