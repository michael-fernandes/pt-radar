import React, { useState } from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
// import Pagination from 'docs/src/modules/components/Pagination';

// import Carousel, { Dots } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

import RadarChart from '../components/charts/RadarChart';
import RadarReact from '../components/charts/RadarReact';
import BarReact from '../components/charts/BarReact';
import RadarApex from '../components/charts/RadarApex';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function Chart() {
  // const [index, ] = useState(0);

  return (
    <div className="single-chart-wrapper">
      <h2>Physio Map</h2>
      <RadarReact className="single-chart-chart" />
    </div >
  )
}
