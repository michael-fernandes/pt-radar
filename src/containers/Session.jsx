import React, {Fragment } from 'react';
import PropTypes from 'prop-types';
import { SingleInput } from '../components/ui';
import Domain from './Domain';
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
    <Fragment key={sessionType}>
      <Domain label="GAIT">
        <SingleInput label={GAIT_ID} convert={simpleConvert} type={sessionType} score={true} unit={SPEED} suffix={data[GAIT_ID]} />
        <SingleInput label={STRIDE_LENGTH_ID} convert={simpleConvert} type={sessionType} score={true} unit={DISTANCE} suffix={data[STRIDE_LENGTH_ID]} />
      </Domain>

      <Domain label="BALANCE">
        <SingleInput label={BALANCE_ID} convert={simpleConvert} type={sessionType} score={true} unit={TIME} suffix={data[BALANCE_ID]} />
        <SingleInput label={SWAY_AREA_ID} convert={simpleConvert} type={sessionType} score={true} unit={DEVICE_UNITS} suffix={data[SWAY_AREA_ID]} />
        <SingleInput label={SWAY_RMS_ID} convert={simpleConvert} type={sessionType} score={true} unit={DEVICE_UNITS} suffix={data[SWAY_RMS_ID]} />
      </Domain>

      <Domain label="TURNS">
        <SingleInput label={TURN_DURATION_ID} convert={simpleConvert} type={sessionType} score={true} unit={TIME} suffix={data[TURN_DURATION_ID]} />
        <SingleInput label={TURN_VELOCITY_ID} convert={simpleConvert} type={sessionType} score={true} unit={SPEED} suffix={data[TURN_VELOCITY_ID]} />
      </Domain>

      <Domain label="SIT TO STAND">
        <SingleInput label={FTSTS_TIME} convert={simpleConvert} type={sessionType} score={true} unit={TIME} suffix={data[FTSTS_TIME]} />
        <SingleInput label={SIT_TO_STAND_DURATION} convert={simpleConvert} type={sessionType} score={true} unit={TIME} suffix={data[SIT_TO_STAND_DURATION]} />
      </Domain>
    </Fragment>
  );
}

SessionInput.propTypes = {
  sessionType: PropTypes.string,
}

