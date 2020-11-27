import React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { arc, min, select, max } from 'd3';
import { generativeData, multiply, shapeData,  DATA_DIMENSIONS, PAD_ANGLE, SPACE_BETWEEN_ARCS, COLORS } from '../../../util';
import { getPreData, getPostData, getLabels } from '../../../store/selectors';



function ChartArea() {
  const ref = useRef();

  const preData = useSelector(getPreData);
  const dims = preData;
  const partitions = Object.keys(preData).length - 1; 
  const shapedData = shapeData(preData);

  // const postData = useSelector(getPostData);
  // const labels = useSelector(getLabels);

  const width = 600;
  const height = 600;

  const sq = min([width, height]);
  const radius = sq / 2

  const innerRadiusBuffer = 25;
  const ringWidth = (radius - innerRadiusBuffer) / (partitions + 1);
  
  const getAngle = useCallback(
    (partition) => ((2 * Math.PI / Object.keys(dims).length ) * partition)
  , [dims]);

  const arcGen = useCallback((slice, level) => {
    let startRadius = (level * ringWidth) + innerRadiusBuffer;
    return arc()
      .innerRadius(startRadius + SPACE_BETWEEN_ARCS)
      .outerRadius(startRadius + ringWidth)
      .startAngle(getAngle(slice))
      .endAngle(getAngle(slice + 1))
      .padAngle(PAD_ANGLE)
      .padRadius(radius)
      .cornerRadius(1)();
  }, [getAngle, ringWidth, radius, dims]);

  // const makeCentroid = (level, slice) => {
  //   let startRadius = (level * ringWidth) + innerRadiusBuffer;
  //   var centroid = arc().innerRadius(startRadius + 0.25)
  //     .outerRadius(startRadius + ringWidth)
  //     .startAngle(getAngle(slice))
  //     .endAngle(getAngle(slice + 1))
  //     .padAngle(PAD_ANGLE)
  //     .padRadius(radius)
  //     .cornerRadius(1);
  //   return centroid;
  // }

  // const mouseOver = (d,i ) => {
  //   console.log(d,i);
  // }

  const enterRadar = useCallback((enter) => {
    enter
      .append("path")
        .attr('key', d => `${d.name + d.level}`)
        .attr("transform", `translate(${width / 2},${height / 2})`)
        .attr("d", d => arcGen(d.slice, d.level))
        .attr('opacity', d =>  d.active ? 1.0 : 0.2)
        .attr('color', d =>  console.log(d))
        .attr('fill', d => COLORS[d.level])
        .attr('stroke', d => d.active ? 'grey' : 'none')
        .attr('stroke-width', d => d.active ? '0.5px' : 'none')
        .attr('className', d => `${d.name}`);
        // .on('mouseover', (d) => console.log(d));
  }, [arcGen, height, width]);

  const updateRadar = useCallback((update) => {
    update
      .attr('fill', 'orange');
  }, [arcGen, height, width]);

  useEffect(()=> {
    if(ref.current){
      select(ref.current)
      .selectAll('path')
      .data(shapedData, ({key}) => key)
      .join(enterRadar, updateRadar => updateRadar, exit => exit.remove());
    }
  }, [ width, height, enterRadar, shapedData ]);

  return (
    <div className="chart-wrapper">
      <svg width={width} height={height} className="chart" >
        <g className="concentric-radar"  ref={ref} />
      </svg>
    </div>
  );
}

export default ChartArea;