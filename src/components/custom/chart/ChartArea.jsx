import React, { useCallback, useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';

import { arc, min, select } from 'd3';
import {
  PAD_ANGLE, SPACE_BETWEEN_ARCS, COLORS, INNER_RADIUS,
} from '../../../util';
import { ToggleChart } from '../../ui';
import { getSessionData } from '../../../store/selectors';

const DISABLED_OPACITY = 0.1;
const ACTIVE_OPACITY = 0.75;
const TEXT_WIDTH = 150;
const xRadius = (radius, theta, slice) => (radius) * Math.sin(theta * (slice) + theta / 2);
// const xRadius = (radius, theta, slice) => { console.log((radius, theta, slice)); return xFunc((radius, theta, slice)); };

const yRadius = (radius, theta, slice) => (radius) * Math.cos(theta * (slice) + theta / 2) * -1;

const isFullRadian = (theta, slice) => (10 * ((slice + 1 / 2) * theta / Math.PI) % 10 == 0);
const yTextOffset = (theta, slice) => (isFullRadian(theta, slice) ? 5 : 0);

function ChartArea({ width, height }) {
  const ref = useRef();
  const textRef = useRef();

  const data = useSelector(getSessionData);

  const slices = data.labels.length;
  const partitions = 6.5; // positions label at 5.5

  const sq = min([width, height - 20]) - TEXT_WIDTH;
  const radius = (sq / 2) - 20;
  const theta = (2 * Math.PI) / slices;

  const ringWidth = (radius - INNER_RADIUS) / (partitions);

  const getAngle = useCallback(
    (partition) => (((2 * Math.PI) / slices) * partition),
    [slices],
  );

  const getAnchor = useCallback(
    ({ slice }) => {
      if (isFullRadian(theta, slice)) {
        return 'middle';
      }

      const isRightOfCenter = Math.round((slice / slices) * 100) / 100 < 0.5;
      return isRightOfCenter ? 'start' : 'end';
    },
    [width, height, theta, slices],
  );

  const arcGen = useCallback((slice, level) => {
    const startRadius = (level * ringWidth) + INNER_RADIUS;
    return arc()
      .innerRadius(startRadius + SPACE_BETWEEN_ARCS)
      .outerRadius(startRadius + ringWidth)
      .startAngle(getAngle(slice))
      .endAngle(getAngle(slice + 1))
      .padAngle(PAD_ANGLE)
      .padRadius(radius)
      .cornerRadius(1)();
  }, [getAngle, ringWidth]);

  const enterRadar = useCallback((enter) => {
    enter
      .append('path')
      .attr('key', (d) => `${d.name + d.level}`)
      .attr('transform', `translate(${width / 2},${height / 2})`)
      .attr('d', (d) => arcGen(d.slice, d.level))
      .attr('opacity', (d) => (d.active ? ACTIVE_OPACITY : DISABLED_OPACITY))
      .attr('fill', (d) => COLORS[d.level])
      .attr('className', (d) => `${d.name}`);
  }, [arcGen, height, width]);

  const updateRadar = useCallback((update) =>
    update
      .attr('transform', `translate(${width / 2},${height / 2})`)
      .attr('d', (d) => arcGen(d.slice, d.level))
      .attr('opacity', (d) => (d.active ? ACTIVE_OPACITY : DISABLED_OPACITY))
      .attr('fill', (d) => COLORS[d.level]),
    [arcGen, height, width]);

  const textUpdate = useCallback((enter) =>
    enter
      .attr('transform', `translate(${width / 2},${height / 2})`)
      .attr('text-anchor', (d) => getAnchor(d))
      .attr('x', (d) => xRadius(radius, theta, d.slice))
      .attr('y', (d) => yRadius(radius, theta, d.slice) + yTextOffset(theta, d.slice)),
    [theta, height, width]);

  const textEnter = useCallback((enter) => {
    enter
      .append('text')
      .attr('key', d => `${d.name}`)
      .attr('transform', `translate(${width / 2},${height / 2})`)
      .attr('class', 'labels')
      .attr('font-size', 12)
      .attr('text-anchor', (d) => getAnchor(d))
      .attr('x', (d) => xRadius(radius, theta, d.slice))
      .attr('y', (d) => yRadius(radius, theta, d.slice) + yTextOffset(theta, d.slice))
      .text((d) => d.name);
  }, [theta, height, width]);

  useEffect(() => {
    // Select Radar
    if (ref.current && data.data) {
      select(ref.current)
        .selectAll('path')
        .data(data.data)
        .join(enterRadar, updateRadar, (exit) => exit.remove());
    }

    // Select labels
    if (textRef.current && data.labels) {
      console.log(data.labels);
      select(textRef.current) // rays
        .selectAll('.labels')
        .data(data.labels)
        .join(textEnter, textUpdate, (exit) => exit.remove());
    }
  }, [width, height, enterRadar, data.data, data.labels]);

  return (
    <div>
      <div>
        <svg width={width} height={height}>
          <g className="concentric-radar" ref={ref} />
          <g className="labels" ref={textRef} />
        </svg>
      </div>
      <div className="radio-buttons">
        <ToggleChart />
      </div>
    </div>
  );
}

export default ChartArea;
