import React from 'react';
import { Radar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { getPreData, getPostData, getLabels } from '../../store/selectors';
import { SHORT_NAME_REVERSE } from '../../resources/constants';

function getData(data, labels) {
  const dataSlice = []
  labels.forEach((d) => dataSlice.push(data[SHORT_NAME_REVERSE[d]] || 0));
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
    data: getData(data, labels),
  }
}
const chartMargin = {
  y: 30,
  x: 10,
};

const colors = [
  '0, 63, 92',
  '88, 0, 181',
];

export default function RadarChart({ width, height }) {
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
    <Radar
      data={data}
      width={width - chartMargin.x}
      height={height - chartMargin.y}
      options={{ maintainAspectRatio: false }} />);
}

