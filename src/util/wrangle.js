import { max } from 'd3';

export function generativeData(dataDimensions) {
  const dataSet = [];
  const labels = []
  let slice = 0;
  Object.keys(dataDimensions.dims).forEach(d => {
    for (let i = 0; i < dataDimensions.levels; i++) {
      const active = i < dataDimensions.dims[d]
      dataSet.push({
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
