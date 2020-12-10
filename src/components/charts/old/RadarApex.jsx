import React from 'react';
// import { Radar } from 'react-chartjs-2';
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';
import { getPreData, getPostData, getLabels } from '../../../store/selectors';

function getData(data, labels) {
  const dataSlice = []
  labels.forEach((d) => dataSlice.push(data[d] || 0));
  console.log(dataSlice);
  return dataSlice;
}

// const genSettings = (color, labels, data, label) => {
//   return {
//     label,
//     backgroundColor: `rgba(${color}, 0.2)`,
//     borderColor: `rgb(${color})`,
//     pointBackgroundColor: `rgb(${color})`,
//     pointBorderColor: '#fff',
//     pointHoverBackgroundColor: '#fff',
//     pointHoverBorderColor: `rgb(${color})`,
//     borderWidth: '10px',
//     data: getData(label, data, labels),
//   }
// }

const colors = [
  '0, 63, 92',
  '88, 0, 181',
];

export default function RadarApex() {

  const preData = useSelector(getPreData);
  const postData = useSelector(getPostData);
  const labels = useSelector(getLabels);

  const series = [{
    name: 'pre',
    data: getData(preData, labels),
  }, {
    name: 'post',
    data: getData(postData, labels),
  }];

  const options = {
    chart: {
      height: 350,
      type: 'radar',
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      }
    },
    title: {
      text: 'Physical Therapy Map'
    },
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.1
    },
    markers: {
      size: 0
    },
    xaxis: {
      categories: labels
    }
  };

  return (
    <div className="chart">
      <Chart
        options={options}
        series={series.series}
        type="radar"
        height={350} />
    </div >
  );
}

