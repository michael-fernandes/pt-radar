import { max } from 'd3';
import { DATA_DIMENSIONS as dataDimensions } from '.';

export function generativeData(dataDimensions) {
  let dataset = [];
  let slice = 0;
   Object.keys(dataDimensions.dims).map(d => {
    for (let i = 0; i < dataDimensions.levels; i++) {
      const active = i < dataDimensions.dims[d]
      dataset.push({
        slice: slice,
        name: d,
        level: i,
        active: active,
        ket: `${d + i + active}`
      })
    }
    slice += 1;
   });

  return dataset;
}

export const multiply = (vals) => vals.reduce((a,b) => a * b);

export function shapeData(inputData){
  return generativeData({
    dims: inputData,
    partitions: Object.keys(inputData).length - 1, 
    levels: max(Object.values(inputData)),
  })
}
