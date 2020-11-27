import React from 'react';
import PropTypes from 'prop-types';
import SingleInput from '../ui/SingleInput';
import SingleDropdown from '../ui/SingleDropdown';
import {
  GAIT_ID,
  STEPS_ID,
  TUG_ID,
  TURNS_ID,
  SWAY_ID,
  BALANCE_ID,
  FIVETS,
  SPEED,
  TIME,
  STEPS,
  DEVICE_UNITS,
} from '../resources/constants';

function simpleConvert(text) {
  return text.toUpperCase();
}

export default function SessionInput({ sessionType }) {
  return (
    <>
      <SingleDropdown label={BALANCE_ID} convert={simpleConvert} type={sessionType} score={true} />
      <SingleDropdown label={SWAY_ID} convert={simpleConvert} type={sessionType} score={true} text={DEVICE_UNITS} />
      <SingleInput label={FIVETS} convert={simpleConvert} type={sessionType} score={true} text={TIME} />
      <SingleInput label={TUG_ID} convert={simpleConvert} type={sessionType} score={true} text={TIME} />
      <SingleInput label={TURNS_ID} convert={simpleConvert} type={sessionType} score={true} text={SPEED} />
      <SingleInput label={STEPS_ID} convert={simpleConvert} type={sessionType} score={true} text={STEPS} />
      <SingleInput label={GAIT_ID} convert={simpleConvert} type={sessionType} score={true} text={SPEED} />
    </>
  );
}

SessionInput.propTypes = {
  sessionType: PropTypes.string,
}

