import React from 'react';

function NoData() {
  return (
    <div className="no-data">
      <div>
        <img src="http://staff.washington.edu/mfern93/imgs/EnterData.png" height={200} width={200} alt="no data" />
        <div> Enter Data to see chart</div>
      </div>
    </div>
  );
}

export default NoData;
