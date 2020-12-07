import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Drawer from 'react-drag-drawer'

import { setSession } from '../store/actions';

import { Tabs, Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import DemographicsInput from '../components/DemographicsInput';
import ScrollButton from '../ui/ScrollButton';
import Session from './Session';
import { getPreData, getPostData, getSession } from '../store/selectors';

import {
  PRE_DIMENSION,
  POST_DIMENSION,
} from '../resources/constants';

const { TabPane } = Tabs;

function DataInput() {
  const dispatch = useDispatch();
  const preData = useSelector(getPreData);
  const postData = useSelector(getPostData);
  const session = useSelector(getSession);

  const [demographics, showDemographics] = useState(false);
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  const operations = (
    <Button type='link' onClick={() => showDemographics(true)}>
      <SettingOutlined />
    </Button>
  );

  const handleTab = useCallback(
    (key) => dispatch(setSession(key)),
    [dispatch],
  );

  return (
    <div className="dragg-up-button">
      <ScrollButton onClick={handleToggle} text="Enter Data" onTabChange={handleTab}  session={session} />
      
      <Drawer open={open} onRequestclose={handleToggle} modalElementClass={"data-entry-menu"} >
        <ScrollButton onClick={handleToggle} onTabChange={handleTab} text="Close Data" session={session} /> 
        <div className="data-entry">
          { session === 'Pre' 
            ? <Session sessionType={PRE_DIMENSION} data={preData} /> 
            : <Session sessionType={POST_DIMENSION} data={postData} />
          }
        </div>
      </Drawer>

    </div>
  );
}

export default DataInput;

