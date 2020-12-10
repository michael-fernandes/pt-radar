import React from 'react';
import { Button } from 'antd';

function ScrollButton({ onClick, text }) {
  return (
    <div className="scroll-button-wrapper">
      <Button onClick={onClick} type="link"> {text} </Button>
    </div>
  );
}

export default ScrollButton;
