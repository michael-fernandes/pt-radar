import React from 'react';
import { Radar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { getPreData, getPostData, getLabels } from '../../store/selectors';

function getData(label, data, labels) {
  const dataSlice = []
  labels.forEach((d) => dataSlice.push(data[d] || 0));
  return dataSlice;
}

const genSettings = (color, labels, data, label) => {
  return {
    label,
    backgroundColor: `rgba(${color}, 0.2)`,
    borderColor: `rgb(${color})`,
    pointBackgroundColor: `rgb(${color})`,
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: `rgb(${color})`,
    borderWidth: '10px',
    data: getData(label, data, labels),
  }
}

const colors = [
  '0, 63, 92',
  '88, 0, 181',
];

export default function RadarChart() {

  const preData = useSelector(getPreData);
  const postData = useSelector(getPostData);
  const labels = useSelector(getLabels);

  const data = {
    labels,
    datasets: [
      genSettings(colors[0], labels, preData, 'Pre'),
      genSettings(colors[1], labels, postData, 'Post')
    ],
  }

  return (
    <div className="chart">
      <Radar data={data} width={10} height={9} />
    </div >
  );
}

