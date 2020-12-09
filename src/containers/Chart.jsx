import React from 'react';
import { useSelector } from 'react-redux';
import { useMeasure } from "react-use";
import { ChartArea } from '../components/custom/chart';
import RadarChart from './RadarChart';
import NoData from '../components/ui/NoData';
import { getEmptyData } from '../store/selectors';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { RadarChartOutlined } from '@ant-design/icons';
import SwipeableViews from 'react-swipeable-views';


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
  const enteredData = useSelector(getEmptyData)

  return (
    <>
      <div ref={ref} className="single-chart-wrapper">
        <div className="chart-wrapper">
          <h2>Physio Map</h2>
          { enteredData 
            ? <NoData />
            : <ChartArea width={width} height={height} />
            // : (<SwipeableViews>
            //     <RadarChart width={width} height={height} className="single-chart-chart" />
            //     <ChartArea width={width} height={height} />   
            // </SwipeableViews>)
          }
        </div>
      </div>
      <div>
        <RadarChartOutlined />
      </div>
    </>
  )
}
