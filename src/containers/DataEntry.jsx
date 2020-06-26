import React, { useState } from 'react';
import { Tabs, Button, Modal } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import DemographicsInput from '../components/DemographicsInput';
import SessionInput from '../components/SessionInput';

import {
  PRE_DIMENSION,
  POST_DIMENSION,
} from '../resources/constants';

const { TabPane } = Tabs;

function DataInput() {
  const [demographics, showDemographics] = useState(false);

  const operations = (
    <Button type='link' onClick={() => showDemographics(true)}>
      <SettingOutlined />
    </Button>
  );

  return (
    <div className="data-entry">
      <DemographicsInput setVisibility={showDemographics} visible={demographics} />
      <Tabs tabBarExtraContent={operations}>
        <TabPane tab="Pre" key='1'>
          <SessionInput sessionType={PRE_DIMENSION} />
        </TabPane>
        <TabPane tab="Post" key='2'>
          <SessionInput sessionType={POST_DIMENSION} />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default DataInput;

