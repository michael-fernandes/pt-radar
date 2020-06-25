import React, { useState } from 'react';

import SwipeableViews from 'react-swipeable-views';
// import Pagination from 'docs/src/modules/components/Pagination';

// import Carousel, { Dots } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

import RadarChart from '../components/charts/RadarChart';
import RadarReact from '../components/charts/RadarReact';
import BarReact from '../components/charts/BarReact';
import RadarApex from '../components/charts/RadarApex';
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function Chart() {
  const [index, updateIndex] = useState(0);

  return (
    <div styles={{ position: 'relative' }}>
      <SwipeableViews index={index} onChangeIndex={index => updateIndex(index)} >
        <div className="carousel-image">
          <BarReact />
        </div>
        <div className="carousel-image">
          <RadarReact />
        </div>
      </SwipeableViews >
    </div>
  )
}
