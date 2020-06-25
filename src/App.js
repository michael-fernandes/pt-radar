import React, { useState } from 'react';
import Chart from './containers/Chart';
import DataEntry from './containers/DataEntry';
import './App.css';

function App() {
  return (
    <div className="App">
      <Chart />
      <DataEntry />
    </div>
  );
}

export default App;
