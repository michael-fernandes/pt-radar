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
    pre: pre[d] || 0,
    post: post[d] || 0,
    fullMark: 5,
  }));
}

export default function RadarReac() {
  const preData = useSelector(getPreData);
  const postData = useSelector(getPostData);
  const labels = useSelector(getLabels);

  return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={generateData(preData, postData, labels)}>
      <PolarGrid />
      <PolarAngleAxis dataKey="dimension" />
      <PolarRadiusAxis angle={90} domain={[0, 5]} ticks={[1, 2, 3, 4, 5]} />
      <Radar name="Pre" dataKey="pre" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="Post" dataKey="post" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
  );
}
