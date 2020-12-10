import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
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

function categories(dimension) {
  switch (dimension) {
    default:
      return [];
  }
}

export default function BarReact() {
  const preData = useSelector(getPreData);
  const postData = useSelector(getPostData);
  const labels = useSelector(getLabels);

  return (
    <BarChart
      width={500}
      height={300}
      data={generateData(preData, postData, labels)}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="dimension" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pre" fill="#8884d8" />
      <Bar dataKey="post" fill="#82ca9d" />
    </BarChart>
  );
}
