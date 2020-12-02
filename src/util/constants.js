import { max } from 'd3';

export const PAD_ANGLE = 0.01;
export const SPACE_BETWEEN_ARCS = 3;

export const inputData = {
  'foot': 4, 
  'leg': 5, 
  'knee': 0, 
  'arm': 2, 
  'neck': 1
};

export const DATA_DIMENSIONS = { 
  dims: inputData,
  partitions: Object.keys(inputData).length - 1, 
  levels: max(Object.values(inputData)),
};

export const COLORS = ["#af697b", "#b98b97", "#ffcccc", "#a6c0e5", "#9599cb"];