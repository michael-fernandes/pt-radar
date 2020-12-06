import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSession } from '../store/actions';

import { Tabs, Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import DemographicsInput from '../components/DemographicsInput';
import Session from './Session';
import { getPreData, getPostData } from '../store/selectors';

import {
  PRE_DIMENSION,
  POST_DIMENSION,
} from '../resources/constants';

const { TabPane } = Tabs;

function DataInput() {
  const dispatch = useDispatch();
  const preData = useSelector(getPreData);
  const postData = useSelector(getPostData);
  const [demographics, showDemographics] = useState(false);
  console.log(preData, postData);

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
          <Session sessionType={PRE_DIMENSION} data={preData} />
        </TabPane>
        <TabPane tab="Post" key='Post'>
          <Session sessionType={POST_DIMENSION} data={postData} />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default DataInput;

