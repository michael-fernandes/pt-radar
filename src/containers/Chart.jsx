import React, { useState } from 'react';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { useMeasure } from "react-use";
import { ChartArea } from '../components/custom/chart';
import RadarChart from '../components/charts/RadarChart';
import NoData from '../components/ui/NoData';
import { getEmptyData } from '../store/selectors';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { RadarChartOutlined, HeatMapOutlined } from '@ant-design/icons';
import SwipeableViews from 'react-swipeable-views';

const RADAR = 'radar';
const CONCENTRIC = 'concentric'

const charts = {
  [RADAR]: RadarChart,
  [CONCENTRIC]: ChartArea,
}

export default function Chart() {
  const [view, setView] = useState(RADAR);
  const [ref, { width, height }] = useMeasure();
  const enteredData = useSelector(getEmptyData)

  const ChartComponent = charts[view];

  return (
    <>
      <h2>Physio Map</h2>
      <div ref={ref} className="single-chart-wrapper">
        <div className="chart-wrapper">
          {enteredData
            ? <NoData />
            : <ChartComponent width={width} height={height} className="single-chart-chart" />
          }
        </div>
      </div>
      {/* <div>
        <RadarChartOutlined />
      </div> */}
    </>
  )
}
