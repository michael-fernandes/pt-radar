import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend
} from 'recharts';

import { useSelector } from 'react-redux';
import { getPreData, getPostData, getLabels } from '../../store/selectors';

function generateData(pre, post, labels) {
  return labels.map(d => ({
    dimension: d,
    pre: Number(pre[d]) || 0,
    post: Number(post[d]) || 0,
    fullMark: 5,
  }));
}

export default function RadarReact() {
  const preData = useSelector(getPreData);
  const postData = useSelector(getPostData);
  const labels = useSelector(getLabels);
  const width = window.innerWidth < 500 ? window.innerWidth : 500;
  const height = width * 1.1;
  console.log(width);
  return (
    <RadarChart cx={width / 2.1} cy={height / 2} outerRadius={width * 0.6 / 2} width={width} height={height} data={generateData(preData, postData, labels)}>
      <PolarGrid />
      <PolarAngleAxis dataKey="dimension" />
      <PolarRadiusAxis angle={90} domain={[0, 5]} ticks={[1, 2, 3, 4]} />
      <Radar name="Pre" dataKey="pre" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
      <Radar name="Post" dataKey="post" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
      <Legend />
    </RadarChart>
  );
}
