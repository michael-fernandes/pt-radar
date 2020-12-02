import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setSession } from '../store/actions';

import { Tabs, Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import DemographicsInput from '../components/DemographicsInput';
import SessionInput from '../components/SessionInput';

import {
  PRE_DIMENSION,
  POST_DIMENSION,
} from '../resources/constants';

const { TabPane } = Tabs;

function DataInput() {
  const dispatch = useDispatch();
  const [demographics, showDemographics] = useState(false);

  const operations = (
    <Button type='link' onClick={() => showDemographics(true)}>
      <SettingOutlined />
    </Button>
  );
  const handleChange = useCallback(
    (key) => dispatch(setSession(key)),
    [dispatch],
  )

  return (
    <div className="data-entry">
      <DemographicsInput setVisibility={showDemographics} visible={demographics} />
      <Tabs tabBarExtraContent={operations} onChange={handleChange}>
        <TabPane tab="Pre" key='Pre' >
          <SessionInput sessionType={PRE_DIMENSION} />
        </TabPane>
        <TabPane tab="Post" key='Post'>
          <SessionInput sessionType={POST_DIMENSION} />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default DataInput;

