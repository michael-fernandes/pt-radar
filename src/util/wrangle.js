import { max } from 'd3';
import { keys, union } from 'lodash';
import { NAME_LOOKUP, LABEL_ORDER } from '../resources/constants';

export function generativeData({ levels, dims, }) {
  const dataSet = [];
  const labels = []
  let slice = 0;
  Object.keys(dims).forEach(d => {
    for (let i = 0; i < levels; i++) {
      const active = i < dims[d]
      dataSet.push({
        slice: slice,
        name: d,
        level: i,
        active: active,
        ket: `${d + i + active}`
      })
    }

    labels.push({ name: d, slice })
    slice += 1;
  });

  return { data: dataSet, labels };
}

export const multiply = (vals) => vals.reduce((a, b) => a * b);

export function shapeData(inputData) {
  console.log(inputData);
  return generativeData({
    dims: inputData,
    partitions: Object.keys(inputData).length - 1,
    levels: max(Object.values(inputData)),
  })
}


export function sortLabelsByOrder(pre, post) {
  return union(keys(pre), keys(post))
    .map(d => NAME_LOOKUP[d])
    .sort((a, b) => LABEL_ORDER.find(() => a) < LABEL_ORDER.find(() => b))
    .filter((d) => d != null);
}
