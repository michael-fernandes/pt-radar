/* eslint-disable import/prefer-default-export */
import { createAction } from 'redux-actions';
import {
  PRE_DIMENSION,
  POST_DIMENSION,
  DEMOGRAPHICS_DIMENSION,
  SCORE_DIMENSION,
  SESSION,
} from '../resources/constants';

import {
  binByDimension
} from '../util/bin';

export const addDimension = (session, dimension, input) => {
  const value = binByDimension[dimension](input);
  switch (session) {
    case PRE_DIMENSION:
      return preDimension(dimension, input, value);
    case POST_DIMENSION:
      return postDimension(dimension, input, value);
    case DEMOGRAPHICS_DIMENSION:
      return demographicDimension(dimension);
    default:
      return {};
  }
}

const demographicDimension = createAction(
  DEMOGRAPHICS_DIMENSION,
  (dimension, input, value) => ({
    [dimension]: input,
  })
);

const preDimension = createAction(
  PRE_DIMENSION,
  (dimension, input, value) => ({
    [dimension]: value,
    [`${dimension}_input`]: input,
  })
);

const postDimension = createAction(
  POST_DIMENSION,
  (dimension, input, value) => ({
    [dimension]: value,
    [`${dimension}_input`]: input,
  })
);


export const scoreDimension = createAction(
  SCORE_DIMENSION,
  (dimension, value) => ({
    [dimension]: value,
  })
);

export const setSession = createAction(
  SESSION,
  (key) => ({ session: key })
);


