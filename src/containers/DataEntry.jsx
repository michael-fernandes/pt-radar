import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Drawer from 'react-drag-drawer';
import { useIsMobileContext } from '../App';

import { ScrollButton } from '../components/ui';
import InputTable from './InputTable';

function DataEntry() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobileContext();

  const handleToggle = () => setOpen(!open);

  return (
    isMobile
      ? (
        <div className="drag-up-button">
          <ScrollButton onClick={handleToggle} text="Enter Data" />
          <Drawer open={open} onRequestclose={handleToggle} modalElementClass="data-entry-menu">
            <ScrollButton onClick={handleToggle} text="Close Data" />
            <div className="data-entry">
              <InputTable />
            </div>
          </Drawer>
        </div>
      )
      : <InputTable />
  );
}

export default DataEntry;
