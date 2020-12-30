import React, { createContext, useContext } from 'react';
import Chart from './containers/Display';
import DataEntry from './containers/DataEntry';
import MobileContext from './MobileContext';
import './App.css';
import { useMeasure } from 'react-use'

const TABLE_WIDTH = 750;

const Context = createContext({ mobile: false });

function App() {
  const [ref, { width = 0 }] = useMeasure();
  const isMobile = width < TABLE_WIDTH;
  return (
    <>
      <Context.Provider value={isMobile}>
        <div>
          <div ref={ref} className="App">
            <Chart />
            <DataEntry />
          </div>
        </div>
      </Context.Provider>
    </>
  );
}

function useIsMobileContext() {
  const value = useContext(Context)
  return value;
}

export {
  App,
  useIsMobileContext,
};
