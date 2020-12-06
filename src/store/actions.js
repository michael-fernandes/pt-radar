import { isNull } from 'lodash';

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

export const addDimension = (session, dimension, value) => {
  console.log(dimension);
  const validatedValue = binByDimension[dimension](value);
  switch (session) {
    case PRE_DIMENSION:
      return preDimension(dimension, validatedValue);
    case POST_DIMENSION:
      return postDimension(dimension, validatedValue);
    case DEMOGRAPHICS_DIMENSION:
      return demographicDimension(dimension, validatedValue);
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


export const scoreDimension = createAction(
  SCORE_DIMENSION,
  (dimension, value) => ({
    [dimension]: value,
  })
);

export const setSession = createAction(
  SESSION,
  (key) =>({session:key})
);


