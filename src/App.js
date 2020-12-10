import React from 'react';
import Chart from './containers/Chart';
import DataEntry from './containers/DataEntry';
import './App.css';
import { useMeasure } from 'react-use'

const TABLE_WIDTH = 750;

function App() {
  const [ref, { width = 0 }] = useMeasure();
  const isMobile = width < TABLE_WIDTH;

  return (
    <div ref={ref} className="App">
      <Chart />
      <DataEntry isMobile={isMobile} />
    </div>
  );
}

export default App;
