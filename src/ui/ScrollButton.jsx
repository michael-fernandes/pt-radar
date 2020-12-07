import React from 'react';
import { Tabs, Button } from 'antd';

const { TabPane } = Tabs;

function ScrollButton({onClick, onTabChange, text, session}) {
  const toggleDraw = (
    <Button onClick={onClick} type="link"> {text} </Button>
  )
  console.log(session);
  return (
    <div className="scroll-button-wrapper">
      <Tabs 
        tabBarExtraContent={toggleDraw} 
        onTabClick={onTabChange}
        tabBarStyle={{padding: 0, margin: 0}} 
        activeKey={session} >
        <TabPane tab="Pre" key='Pre' >
        </TabPane>
        <TabPane tab="Post" key='Post'>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default ScrollButton;