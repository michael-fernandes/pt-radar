import React from 'react';
import PropTypes from 'prop-types';
import { InputControl } from '../components/ui';
import Domain from '../components/ui/Domain';
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
  SPEED,
  DISTANCE,
  DEVICE_UNITS,
} from '../resources/constants';

function simpleConvert(text) {
  return text.toUpperCase();
}

export default function SessionInput({ sessionType, isMobile, data = {} }) {
  return (
    <div className={"session-input"} >
      <Domain label="GAIT">
        <InputControl label={GAIT_ID} convert={simpleConvert} type={sessionType} unit={SPEED} defaultValue={data[GAIT_ID + '_input']} suffix={data[GAIT_ID]} />
        <InputControl label={STRIDE_LENGTH_ID} convert={simpleConvert} type={sessionType} unit={DISTANCE} defaultValue={data[STRIDE_LENGTH_ID + '_input']} suffix={data[STRIDE_LENGTH_ID]} />
      </Domain>
      <Domain label="BALANCE">
        <InputControl label={BALANCE_ID} convert={simpleConvert} type={sessionType} unit={TIME} defaultValue={data[BALANCE_ID + '_input']} suffix={data[BALANCE_ID]} />
        <InputControl label={SWAY_AREA_ID} convert={simpleConvert} type={sessionType} unit={DEVICE_UNITS} defaultValue={data[SWAY_AREA_ID + '_input']} suffix={data[SWAY_AREA_ID]} />
        <InputControl label={SWAY_RMS_ID} convert={simpleConvert} type={sessionType} unit={DEVICE_UNITS} defaultValue={data[SWAY_RMS_ID + '_input']} suffix={data[SWAY_RMS_ID]} />
      </Domain>
      <Domain label="TURNS">
        <InputControl label={TURN_DURATION_ID} convert={simpleConvert} type={sessionType} unit={TIME} defaultValue={data[TURN_DURATION_ID + '_input']} suffix={data[TURN_DURATION_ID]} />
        <InputControl label={TURN_VELOCITY_ID} convert={simpleConvert} type={sessionType} unit={SPEED} defaultValue={data[TURN_VELOCITY_ID + '_input']} suffix={data[TURN_VELOCITY_ID]} />
      </Domain>
      <Domain label="SIT TO STAND">
        <InputControl label={FTSTS_TIME} convert={simpleConvert} type={sessionType} unit={TIME} defaultValue={data[FTSTS_TIME + '_input']} suffix={data[FTSTS_TIME]} />
        <InputControl label={SIT_TO_STAND_DURATION} convert={simpleConvert} type={sessionType} unit={TIME} defaultValue={data[SIT_TO_STAND_DURATION + '_input']} suffix={data[SIT_TO_STAND_DURATION]} />
      </Domain>
    </div>
  );
}

SessionInput.propTypes = {
  sessionType: PropTypes.string,
}

