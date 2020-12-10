import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSession } from '../store/actions';

import { Tabs } from 'antd';
import Session from './Session';
import { getPreData, getPostData, getSession } from '../store/selectors';

import {
  PRE_DIMENSION,
  POST_DIMENSION,
} from '../resources/constants';

const { TabPane } = Tabs;

function InputTable({ isMobile }) {
  const dispatch = useDispatch();
  const preData = useSelector(getPreData);
  const postData = useSelector(getPostData);
  const session = useSelector(getSession);

  const handleTab = useCallback(
    (key) => dispatch(setSession(key)),
    [dispatch],
  );

  return (
    <Tabs
      onTabClick={handleTab}
      // tabBarStyle={{ padding: 0, margin: 0 }}
      activeKey={session} >
      <TabPane tab="Pre" key='Pre' >
        <Session sessionType={PRE_DIMENSION} data={preData} isMobile={isMobile} />
      </TabPane>
      <TabPane tab="Post" key='Post'>
        <Session sessionType={POST_DIMENSION} data={postData} isMobile={isMobile} />
      </TabPane>
    </Tabs>
  );
}

export default InputTable;

