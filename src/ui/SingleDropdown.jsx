import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addDimension } from '../store/actions';
import { Button, Dropdown, Menu } from 'antd';

import { DownOutlined, UserOutlined } from '@ant-design/icons';


function SingleDropdown({ label, convert, type, text, score }) {
  const dispatch = useDispatch();
  const [showInput, setInputVisibility] = useState(score !== false);
  const [selected, selectOption] = useState('');

  const options = [
    "Usual Base for 30sec",
    "Narrow Base for 30sec",
    "Semi-tandem for 30sec",
    "Tandem for 30sec",
    "Single Leg for 30sec",
  ];
  
  const storeInput = useCallback(
    (dimension, value) => {
      selectOption(options[value]);
      dispatch(addDimension(type, dimension, value));
    }
    ,
    [dispatch, type, options],
  )

  const menu = (
    <Menu onClick={(e) => storeInput(label, e.key)} size="medium">
      <Menu.Item key="1">
        1st menu item
      </Menu.Item>
      <Menu.Item key="2">
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd item
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="input-wrapper">
      <div className="input-label">{label}:</div>
      {showInput
        ? <Button size="small" onClick={() => setInputVisibility()}>Score</Button>
        : <Dropdown overlay={menu}>
          <Button size="small" className="input-input">
            {selected} <DownOutlined />
          </Button>
        </Dropdown>
      }
    </div>
  )
}

export default SingleDropdown;

SingleDropdown.propTypes = {
  label: PropTypes.string,
  conversionFunction: PropTypes.func,
  update: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  score: PropTypes.bool,
  options: PropTypes.array,
}

SingleDropdown.defaultProps = {
  label: 'dimension',
  update: () => '',
  placeholder: '',
  score: false,
  options: [],
}
