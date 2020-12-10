import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addDimension } from '../../store/actions';
import { Input, Button } from 'antd';

function InputControl({ defaultValue, label, type, unit, score = true, suffix = "" }) {
  const dispatch = useDispatch();

  const [showInput, setInputVisibility] = useState(score !== false);

  const storeInput = useCallback(
    (dimension, value) => {
      dispatch(addDimension(type, dimension, value));
    }, [dispatch, type]);

  return (
    <div className="input-wrapper">
      <div className="input-label">{label}:</div>
      <div className="input">
        {showInput && !defaultValue
          ? <Button size="small" onClick={() => setInputVisibility()}>Score</Button>
          : <Input onChange={(e) => storeInput(label, e.target.value)}
            defaultValue={defaultValue}
            className="input-input"
            size='small'
            placeholder={unit}
            suffix={<span style={{ color: '#BFBFBF' }}>{`${suffix}/5`}</span>} />
        }
      </div>
    </div>
  )
}

export default InputControl;

InputControl.propTypes = {
  label: PropTypes.string,
  conversionFunction: PropTypes.func,
  update: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  score: PropTypes.bool,
  options: PropTypes.array,
}

InputControl.defaultProps = {
  label: 'dimension',
  update: () => '',
  placeholder: '',
  options: [],
}
