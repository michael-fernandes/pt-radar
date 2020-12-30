import { max } from 'd3';

export const PAD_ANGLE = 0.01;
export const SPACE_BETWEEN_ARCS = 1;
export const INNER_RADIUS = 15;

export const inputData = {
  foot: 4,
  leg: 5,
  knee: 0,
  arm: 2,
  neck: 1,
};

export const DATA_DIMENSIONS = {
  dims: inputData,
  partitions: Object.keys(inputData).length - 1,
  levels: max(Object.values(inputData)),
};

export const COLORS = ['#958c84', '#cc8fa0', '#f2abab', '#8e92c1', '#7baece', '#92be6c'];
