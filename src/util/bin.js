import { isNull } from 'lodash';
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
  TIME,
} from '../resources/constants';

const lessThan = (a,b) => a < b;
const greaterThan = (a, b) => a > b;

const gaitBins = {
  operator: lessThan, 
  bins: [ 0.71, 0.86, 0.99, 1.33, Infinity]
};

const strideBins = {
  operator: lessThan, 
  bins: [ 0.828, 0.959, 1.19, 1.33, Infinity]
};

// < 35.3	35.3 - 44.9	45.0 - 53.0	53.1-82.9	83-90
const balanceBin = {
  operator: lessThan, 
  bins: [ 35.3, 44.9, 53, 82.9, Infinity]
};

// > 0.187	0.187 - 0.103	 0.111 - 0.087 	0.088- 0.047	< .046
const areaSwayBins = {
  operator: greaterThan, 
  bins: [ 0.187, 0.103, 1.87, 0.47, -Infinity]
};

// > 0.149	0.149 - 0.117	0.116 - 0.113	0.112 -0.90	<.091
const rmsSwayBins = {
  operator: greaterThan, 
  bins: [ 0.149, 0.117, 0.113, 0.90, -Infinity]
};

// >5.15	5.15-4.22	4.23 - 3.83	3.82-3.1	<3.1
const turnDurationBins = {
  operator: greaterThan, 
  bins: [ 5.15, 4.22, 3.83, 3.1, -Infinity]
};

// <151.0	151.0 - 163.0	163.1 -169.9	170.0 - 180.4	> 180.5
const turnVelocityBins = {
  operator: lessThan, 
  bins: [ 151, 163, 169.9, 180.4, Infinity]
};

// Unable or >60 sec	59.99 - 27.38	27.37 - 18.17	18.18- 14.75	14.74-11.0	<11.0
const ftstsBins = {
  operator: greaterThan, 
  bins: [60, 27.38, 18.17, 14.75, 11.0, -Infinity],
  shift:0,
};

// > 3.71 	3.71 -  1.31	1.30 - 1.11	1.12-1.0	<0.99
const sitToStandBins = {
  operator: greaterThan, 
  bins: [3.71, 1.31, 1.11, 1.0, -Infinity],
};

function bin(val, {bins, operator, shift = 0}) {
  const numReg = /\d+/;
  if(isNull(val.match(numReg))){
    return 0;
  } else{
    console.log(val, bins.findIndex((d)=> operator(val, d)) + shift);
    return bins.findIndex((d)=> operator(val, d)) + shift;
  }
}

export const binByDimension = {
  [GAIT_ID]: (d) => bin(d, gaitBins),
  [STRIDE_LENGTH_ID]: (d) => bin(d, strideBins),
  [BALANCE_ID]: (d) => bin(d, balanceBin),
  [SWAY_AREA_ID]: (d) => bin(d, areaSwayBins),
  [SWAY_RMS_ID]: (d) => bin(d, rmsSwayBins),
  [TURN_DURATION_ID]: (d) => bin(d, turnDurationBins),
  [TURN_VELOCITY_ID]: (d) => bin(d, turnVelocityBins),
  [FTSTS_TIME]: (d) => bin(d, ftstsBins),
  [SIT_TO_STAND_DURATION]: (d) => bin(d, sitToStandBins),
  [TIME]: (d) => bin(d, gaitBins),
}