import { createSelector } from 'reselect';
import { shapeData, sortLabelsByOrder } from '../util';
import { isEmpty, get } from 'lodash';

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

export const getSession = createSelector(
  (state) => get(state, ['session', 'session'], {}),
  (session) => session,
)

export const getSessionData = createSelector(
  getPreData,
  getPostData,
  (state) => get(state, ['session', 'session'], {}),
  (pre, post, session) => shapeData(session === 'Post' ? post : pre),
)

export const getEmptyData = createSelector(
  getPreData,
  getPostData,
  (pre, post) => isEmpty({ ...post, ...pre }),
);

export const getChartType = createSelector(
  (state) => get(state, ['chart', 'chart'], 'radar'),
  chart => chart,
);
