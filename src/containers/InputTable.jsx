import React, { useCallback, useContext } from 'react';
// import { Context } from '../App';

import { useDispatch, useSelector } from 'react-redux';
import { ChartButtons } from '../components/ui';
import { setSession } from '../store/actions';

import { Tabs } from 'antd';
import Session from './Session';
import { getPreData, getPostData, getSession } from '../store/selectors';

import {
  PRE_DIMENSION,
  POST_DIMENSION,
} from '../resources/constants';

const { TabPane } = Tabs;

function InputTable() {
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
      activeKey={session}
      tabBarExtraContent={<ChartButtons session={session} />}
    >
      <TabPane tab="Pre" key='Pre' >
        <Session sessionType={PRE_DIMENSION} data={preData} />
      </TabPane>
      <TabPane tab="Post" key='Post'>
        <Session sessionType={POST_DIMENSION} data={postData} />
      </TabPane>
    </Tabs>
  );
}

export default InputTable;

