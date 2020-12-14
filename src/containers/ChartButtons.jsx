import React from 'react';
import { Button } from 'antd';
import { RadarChartOutlined, HeatMapOutlined } from '@ant-design/icons';
import { RADAR, CONCENTRIC } from '../resources/constants';

export default function ChartButtons({ setView }) {
  return (
    <div>
      <div className="chart-buttons">
        <Button onClick={() => setView(RADAR)} icon={<RadarChartOutlined />} />
        <Button onClick={() => setView(CONCENTRIC)} icon={<HeatMapOutlined />} />
      </div>
    </div>
  );
};
