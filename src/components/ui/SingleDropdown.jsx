import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, Dropdown, Menu } from 'antd';

import { DownOutlined } from '@ant-design/icons';
import { addDimension } from '../../store/actions';

function SingleDropdown({
  label, type, score,
}) {
  const dispatch = useDispatch();
  const [showInput, setInputVisibility] = useState(score !== false);
  const [selected, selectOption] = useState('');

  const options = [
    'Usual Base for 30sec',
    'Narrow Base for 30sec',
    'Semi-tandem for 30sec',
    'Tandem for 30sec',
    'Single Leg for 30sec',
  ];

  const storeInput = useCallback(
    (dimension, value) => {
      selectOption(options[value]);
      dispatch(addDimension(type, dimension, value));
    },
    [dispatch],
  );

  const handleChange = (value) => {
    storeInput(label, value.item.props.value);
  };

  const menu = (
    <Menu onClick={handleChange} size="medium">
      <Menu.Item key="1" value={1}>
        1- 20 seconds
      </Menu.Item>
      <Menu.Item key="2" value={2}>
        21- 40 seconds
      </Menu.Item>
      <Menu.Item key="3" value={3}>
        41- 60 seconds
      </Menu.Item>
      <Menu.Item key="4" value={4}>
        61- 80 seconds
      </Menu.Item>
      <Menu.Item key="5" value={5}>
        81- 100 seconds
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="input-wrapper">
      <div className="input-label">
        {label}
        :
      </div>
      {showInput
        ? <Button size="small" onClick={() => setInputVisibility()}>Score</Button>
        : (
          <Dropdown overlay={menu}>
            <Button size="small" className="input-input">
              {selected}
              {' '}
              <DownOutlined />
            </Button>
          </Dropdown>
        )}
    </div>
  );
}

export default SingleDropdown;

SingleDropdown.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  score: PropTypes.bool,
};

SingleDropdown.defaultProps = {
  label: 'dimension',
  score: false,
};
