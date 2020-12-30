import React from 'react';

function NoData() {
  return (
    <div className="no-data">
      <img src="http://staff.washington.edu/mfern93/imgs/EnterData.png" height={200} width={200} alt="no data" />
      <p className="no-data-text"> Enter Data to see chart</p>
    </div>
  );
}

export default NoData;
