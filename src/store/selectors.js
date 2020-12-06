import { createSelector } from 'reselect';
import { shapeData } from '../util';
import { get, union, keys } from 'lodash';
import {
  GAIT_ID,
  STRIDE_LENGTH_ID,
  BALANCE_ID,
  SWAY_AREA_ID,
  SWAY_RMS_ID,
  TURN_DURATION_ID,
  TURN_VELOCITY_ID,
  FTSTS_TIME,
  SIT_TO_STAND_DURATION,
} from '../resources/constants';

const labelOrder = [
  GAIT_ID,
  STRIDE_LENGTH_ID,
  BALANCE_ID,
  SWAY_AREA_ID,
  SWAY_RMS_ID,
  TURN_DURATION_ID,
  TURN_VELOCITY_ID,
  FTSTS_TIME,
  SIT_TO_STAND_DURATION,
];

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

export const getSessionData = createSelector(
  getPreData,
  getPostData,
  (state) => get(state, ['session', 'session'], {}),
  (session) => shapeData(session === 'Post' ? getPostData : getPreData),
)

export const getDimensionData =( sesh, dim) => {
  return createSelector(
    state => get(state, ['session', `${sesh === "POST_DIMENSION" ? 'pre' : 'post'}`, dim], 0),
    (val) => console.log(val),
  );
}