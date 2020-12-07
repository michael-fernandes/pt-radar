import React, { useState, useCallback } from 'react';
import { isNull } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { addDimension } from '../store/actions';
import { Input, Button } from 'antd';
import { getDimensionData } from '../store/selectors';
 
function SingleInput({ label, type, unit, score, suffix = "" }) {
  const dispatch = useDispatch();
  const valval = useSelector((type, label) => getDimensionData(type, label));

  const [showInput, setInputVisibility] = useState(score !== false);
  const storeInput = useCallback(
    (dimension, value) => {
      dispatch(addDimension(type, dimension, value));
    }, [dispatch, type]);

    return (
    <div className="input-wrapper">
      <div className="input-label">{label}:</div>
      {showInput
        ? <Button size="small" onClick={() => setInputVisibility()}>Score</Button>
        : <Input onChange={(e) => storeInput(label, e.target.value)} className="input-input" size='small' placeholder={unit} suffix={<span style={{color:'#BFBFBF'}}>{`${suffix} / 5`}</span>}></Input>
      }
    </div>
  )
}

export default SingleInput;

SingleInput.propTypes = {
  label: PropTypes.string,
  conversionFunction: PropTypes.func,
  update: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  score: PropTypes.bool,
  options: PropTypes.array,
}

SingleInput.defaultProps = {
  label: 'dimension',
  update: () => '',
  placeholder: '',
  score: false,
  options: [],
}
