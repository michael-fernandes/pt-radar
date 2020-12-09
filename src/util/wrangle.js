import { max } from 'd3';

export function generativeData({levels, dims, }) {
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

    labels.push({
      name: d,
      slice,
    })
    
    slice += 1;
  });
  console.log(levels, dims);
  return { data: dataSet, labels };
}

export const multiply = (vals) => vals.reduce((a,b) => a * b);

export function shapeData(inputData){
  console.log(inputData);
  return generativeData({
    dims: inputData,
    partitions: Object.keys(inputData).length - 1, 
    levels: max(Object.values(inputData)),
  })
}
