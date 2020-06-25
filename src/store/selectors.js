import { createSelector } from 'reselect';
import { get, union, uniqBy, keys } from 'lodash';
import {
  GAIT_ID,
  STEPS_ID,
  TUG_ID,
  TURNS_ID,
  SWAY_ID,
  BALANCE_ID,
  FIVETS
} from '../resources/constants';

const labelOrder = [
  GAIT_ID,
  STEPS_ID,
  TUG_ID,
  TURNS_ID,
  SWAY_ID,
  BALANCE_ID,
  FIVETS
];

window.l = labelOrder;

function sortLabelsByOrder(pre, post) {
  const labels = union(keys(pre), keys(post));
  return labels.sort((a, b) => labelOrder.find(() => a) < labelOrder.find(() => b));
}

export const getPreData = createSelector(
  (state) => get(state, ['pre'], {}),
  preData => preData
);

export const getPostData = createSelector(
  (state) => get(state, ['post'], {}),
  postData => postData
);

export const getNorm = createSelector(
  (state) => get(state, ['demographics'], {}),
  demographics => demographics
);

export const getLabels = createSelector(
  getPreData,
  getPostData,
  (pre, post) => sortLabelsByOrder(pre, post)
);
