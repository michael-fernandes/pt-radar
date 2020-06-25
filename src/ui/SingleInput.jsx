import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addDimension } from '../store/actions';
import { Input } from 'antd';

function SingleInput({ label, convert, type }) {
  const dispatch = useDispatch();

  const storeInput = useCallback(
    (dimension, value) => {
      dispatch(addDimension(type, dimension, value));
    }
    ,
    [dispatch],
  )
  return (
    <div>
      <span>{label}</span>
      <Input onChange={(e) => storeInput(label, e.target.value)}></Input>
      {convert && <span>Conversion: {convert('')}</span>}
    </div>
  )
}

export default SingleInput;

SingleInput.propTypes = {
  label: PropTypes.string,
  conversionFunction: PropTypes.func,
  update: PropTypes.func,
  type: PropTypes.string,
}

SingleInput.defaultProps = {
  label: 'dimension',
  update: () => '',
}
