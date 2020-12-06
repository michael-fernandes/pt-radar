import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SingleInput from '../ui/SingleInput';
import Domain from './Domain';
import { getSessionData } from '../store/selectors';
// import SingleDropdown from '../ui/SingleDropdown';
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
  STEPS,
  SPEED,
  DISTANCE,
  DEVICE_UNITS,
} from '../resources/constants';

function simpleConvert(text) {
  return text.toUpperCase();
}

export default function SessionInput({ sessionType, data = {} }) {
  return (
    <>
      <Domain label="Gait">
        <SingleInput label={GAIT_ID} convert={simpleConvert} type={sessionType} score={true} unit={SPEED} suffix={data[GAIT_ID]} />
        <SingleInput label={STRIDE_LENGTH_ID} convert={simpleConvert} type={sessionType} score={true} unit={DISTANCE} suffix={data[STRIDE_LENGTH_ID]} />
      </Domain>

      <Domain label="Balance">
        <SingleInput label={BALANCE_ID} convert={simpleConvert} type={sessionType} score={true} unit={TIME} suffix={data[BALANCE_ID]} />
        <SingleInput label={SWAY_AREA_ID} convert={simpleConvert} type={sessionType} score={true} unit={DEVICE_UNITS} suffix={data[SWAY_AREA_ID]} />
        <SingleInput label={SWAY_RMS_ID} convert={simpleConvert} type={sessionType} score={true} unit={DEVICE_UNITS} suffix={data[SWAY_RMS_ID]} />
      </Domain>

      <Domain label="turns">
        <SingleInput label={TURN_DURATION_ID} convert={simpleConvert} type={sessionType} score={true} unit={TIME} suffix={data[TURN_DURATION_ID]} />
        <SingleInput label={TURN_VELOCITY_ID} convert={simpleConvert} type={sessionType} score={true} unit={SPEED} suffix={data[TURN_VELOCITY_ID]} />
      </Domain>

      <Domain label="Sit to Stand">
        <SingleInput label={FTSTS_TIME} convert={simpleConvert} type={sessionType} score={true} unit={TIME} suffix={data[FTSTS_TIME]} />
        <SingleInput label={SIT_TO_STAND_DURATION} convert={simpleConvert} type={sessionType} score={true} unit={TIME} suffix={data[SIT_TO_STAND_DURATION]} />
      </Domain>

    </>
  );
}

SessionInput.propTypes = {
  sessionType: PropTypes.string,
}

