import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMeasure } from "react-use";
import { ChartArea } from '../components/custom/chart';
import ChartButtons from './ChartButtons'
import RadarChart from '../components/charts/RadarChart';
import NoData from '../components/ui/NoData';
import { getEmptyData } from '../store/selectors';

import { RADAR, CONCENTRIC } from '../resources/constants';

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
            : <div className="chart">
              <ChartComponent width={width} height={height} className="single-chart-chart" />
              <ChartButtons setView={setView} />
            </div>
          }
        </div>
      </div>
    </>
  )
}
