import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

function ScrollButton({ onClick, text }) {
  return (
    <div className="scroll-button-wrapper">
      <Button onClick={onClick} type="link">
        {text}
      </Button>
    </div>
  );
}

export default ScrollButton;

ScrollButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
