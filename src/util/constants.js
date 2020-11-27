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

export const COLORS = ["#AF697B", "#B98B97", "EAD9B5", "#A6C0E5", "#9599CB"];