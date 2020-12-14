import React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { arc, min, select } from 'd3';
import { PAD_ANGLE, SPACE_BETWEEN_ARCS, COLORS, INNER_RADIUS } from '../../../util';
import { getSessionData } from '../../../store/selectors';

const xRadius = (radius, theta, slice) =>
  (radius) * Math.sin(theta * (slice) + theta / 2);

const yRadius = (radius, theta, slice) =>
  (radius) * Math.cos(theta * (slice) + theta / 2) * -1;

const yTextOffset = (theta, slice) => isFullRadian(theta, slice) ? 5 : 0;

const isFullRadian = (theta, slice) => (10 * ((slice + 1 / 2) * theta / Math.PI) % 10 == 0);

function ChartArea({ width, height }) {
  const ref = useRef();
  const textRef = useRef();

  const data = useSelector(getSessionData);

  const slices = data.labels.length;
  const partitions = 5.5; // positions label at 5.5

  const sq = min([width, height]) - 150;
  const radius = (sq / 2) - 20;
  const theta = 2 * Math.PI / slices;

  const ringWidth = (radius - INNER_RADIUS) / (partitions);

  const getAngle = useCallback(
    (partition) => ((2 * Math.PI / slices) * partition)
    , [slices]);

  const getAnchor = useCallback(
    ({ slice }) => {
      if (isFullRadian(theta, slice)) {
        return 'middle';
      }

      const circlePosition = Math.round((slice / slices) * 100) / 100;
      if (circlePosition < 0.5) {
        return 'start';
      } else {
        return 'end';
      }
    }
    , [width, height, theta, slices]);

  const arcGen = useCallback((slice, level) => {
    let startRadius = (level * ringWidth) + INNER_RADIUS;
    return arc()
      .innerRadius(startRadius + SPACE_BETWEEN_ARCS)
      .outerRadius(startRadius + ringWidth)
      .startAngle(getAngle(slice))
      .endAngle(getAngle(slice + 1))
      .padAngle(PAD_ANGLE)
      .padRadius(radius)
      .cornerRadius(1)();
  }, [getAngle, ringWidth]);

  // const makeCentroid = (slice, level) => {
  //   let startRadius = (level * ringWidth) + INNER_RADIUS;
  //   return arc().innerRadius(startRadius + 0.25)
  //     .outerRadius(startRadius + ringWidth)
  //     .startAngle(getAngle(slice))
  //     .endAngle(getAngle(slice + 1))
  //     .padAngle(PAD_ANGLE)
  //     .padRadius(radius)
  //     .cornerRadius(1)();
  // }

  const enterRadar = useCallback((enter) => {
    enter
      .append("path")
      .attr('key', d => `${d.name + d.level}`)
      .attr("transform", `translate(${width / 2},${height / 2})`)
      .attr("d", d => arcGen(d.slice, d.level))
      .attr('opacity', d => d.active ? 1.0 : 0.2)
      .attr('fill', d => COLORS[d.level])
      .attr('className', d => `${d.name}`);
  }, [arcGen, height, width]);

  const updateRadar = useCallback((enter) => {
    enter
      .attr("transform", `translate(${width / 2},${height / 2})`)
      .attr("d", d => arcGen(d.slice, d.level))
      .attr('opacity', d => d.active ? 1.0 : 0.2)
      .attr('fill', d => COLORS[d.level])
  }, [arcGen, height, width]);

  const textUpdate = useCallback((update) =>
    update
      .attr("x", (d) => xRadius(radius, theta, d.slice))
      .attr('y', (d) => yRadius(radius, theta, d.slice) + yTextOffset(theta, d.slice))
      .attr('color', (d, i) => 'orange')
      .attr('text-anchor', (d) => getAnchor(d))
      .text(d => d.name)
    , [radius, theta]);

  const textEnter = useCallback((enter) =>
    enter
      .append('text')
      .attr("transform", `translate(${width / 2},${height / 2})`)
      .attr('key', d => `${d.name + d.slice}`)
      .attr('class', 'labels')
      .attr('font-size', 12)
      .attr('text-anchor', (d) => getAnchor(d))
      .text(d => d.name)
      .attr("x", (d) => xRadius(radius, theta, d.slice))
      .attr('y', (d) => yRadius(radius, theta, d.slice) + yTextOffset(theta, d.slice))
    , [slices, width, height, theta]);

  useEffect(() => {
    if (ref.current && data.data) {
      select(ref.current)
        .selectAll('path')
        .data(data.data, ({ key }) => key)
        .join(enterRadar, updateRadar, exit => exit.remove());
    }

    if (textRef.current && data.labels) {
      select(textRef.current) // rays
        .selectAll(".labels")
        .data(data.labels, key => key)
        .join(textEnter, textUpdate, exit => exit.remove());
    }
  }, [width, height, enterRadar, data.data, data.labels]);

  return (
    <svg width={width} height={height} >
      <g className="concentric-radar" ref={ref} />
      <g className="labels" ref={textRef} />
    </svg>
  );
}

export default ChartArea;
