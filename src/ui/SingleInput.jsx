import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addDimension } from '../store/actions';
import { Input, Button } from 'antd';

function SingleInput({ label, convert, type, text, score }) {
  const dispatch = useDispatch();
  const [showInput, setInputVisibility] = useState(score !== false);

  const storeInput = useCallback(
    (dimension, value) => {
      dispatch(addDimension(type, dimension, value));
    }
    ,
    [dispatch, type],
  )

  return (
    <div className="input-wrapper">
      <div className="input-label">{label}:</div>
      {showInput
        ? <Button size="small" onClick={() => setInputVisibility()}>Score</Button>
        : <Input onChange={(e) => storeInput(label, e.target.value)} className="input-input" size='small' placeholder={text}></Input>
      }

      {/* {convert && <span>Conversion: {convert('')}</span>} */}
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
