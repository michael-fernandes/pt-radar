import { max } from 'd3';
import { keys, union, reduce } from 'lodash';
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
        key: `${d + i + active}`
      })
    }

    labels.push({ name: NAME_LOOKUP[d], slice })
    slice += 1;

  });

  return { data: dataSet, labels };
}

export const multiply = (vals) => vals.reduce((a, b) => a * b);

export function shapeData(inputData) {
  const filteredInput = reduce(keys(inputData), (result, value) => {
    if (NAME_LOOKUP[value] !== undefined) {
      result[value] = inputData[value];
    }

    return result;
  }, {});

  return generativeData({
    dims: filteredInput,
    partitions: Object.keys(filteredInput).length - 1,
    levels: 5,
  })
}


export function sortLabelsByOrder(pre, post) {
  return union(keys(pre), keys(post))
    .map(d => NAME_LOOKUP[d])
    .sort((a, b) => LABEL_ORDER.find(() => a) < LABEL_ORDER.find(() => b))
    .filter((d) => d != null);
}
