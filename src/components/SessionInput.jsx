import React from 'react';
import PropTypes from 'prop-types';
import SingleInput from '../ui/SingleInput';
import {
  GAIT_ID,
  STEPS_ID,
  TUG_ID,
  TURNS_ID,
  SWAY_ID,
  BALANCE_ID,
  FIVETS
} from '../resources/constants';

function simpleConvert(text) {
  return text.toUpperCase();
}

export default function SessionInput({ sessionType }) {
  return (
    <>
      <SingleInput label={BALANCE_ID} convert={simpleConvert} type={sessionType} text="" />
      <SingleInput label={SWAY_ID} convert={simpleConvert} type={sessionType} text="" />
      <SingleInput label={FIVETS} convert={simpleConvert} type={sessionType} text="" />
      <SingleInput label={TUG_ID} convert={simpleConvert} type={sessionType} text="" />
      <SingleInput label={TURNS_ID} convert={simpleConvert} type={sessionType} text="" />
      <SingleInput label={STEPS_ID} convert={simpleConvert} type={sessionType} text="" />
      <SingleInput label={GAIT_ID} convert={simpleConvert} type={sessionType} text="" />
    </>
  );
}

SessionInput.propTypes = {
  sessionType: PropTypes.string,
}

