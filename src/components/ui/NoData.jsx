import React from 'react';
import img from '../../resources/EnterData.png';

function NoData(props) {
  return (
    <div className='no-data'>
      <div>
        <img src={img} height={200} width={200}/>
        <div>Enter Data to see chart</div>
      </div>
    </div>
  );
}

export default NoData;