import React from 'react';
import { useMeasure } from "react-use";
import { ChartArea } from '../components/custom/chart';
// import { Radar } from '../components/charts/RadarChart';
import 'pure-react-carousel/dist/react-carousel.es.css';

// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
// import Pagination from 'docs/src/modules/components/Pagination';

// import Carousel, { Dots } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

// import RadarChart from '../components/charts/RadarChart';
// import RadarReact from '../components/charts/RadarReact';
// import BarReact from '../components/charts/BarReact';
// import RadarApex from '../components/charts/RadarApex';

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1
// };

export default function Chart() {
  const [ref, { width, height }] = useMeasure();

  // const [index, ] = useState(0);

  return (
    <div ref={ref} className="single-chart-wrapper">
      <h2>Physical Therapy Chart</h2>
      <ChartArea width={width} height={height} />
      {/* <RadarReact /> */}
    </div >
  )
}
