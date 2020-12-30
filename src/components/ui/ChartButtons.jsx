import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { RadarChartOutlined, HeatMapOutlined } from '@ant-design/icons';
import { setChartType } from '../../store/actions';
import { getChartType } from '../../store/selectors';
import { RADAR, CONCENTRIC } from '../../resources/constants';

export default function ChartButtons({ setView, session }) {
  const dispatch = useDispatch();
  const chart = useSelector(getChartType);

  return (
    <div>
      <div className="chart-buttons">
        {chart === CONCENTRIC
          ? <Button
            onClick={() => dispatch(setChartType(RADAR))}
            icon={<RadarChartOutlined />}
            type="text" >
            Toggle Chart
          </Button>
          : <Button
            onClick={() => dispatch(setChartType(CONCENTRIC))}
            icon={<HeatMapOutlined />}
            type="text" >
            Toggle Chart
          </Button>
        }
      </div>
    </div >
  );
};
