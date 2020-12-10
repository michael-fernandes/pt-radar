import React, { useState } from 'react';
import Drawer from 'react-drag-drawer';

import { ScrollButton } from '../components/ui';
import InputTable from './InputTable';

function DataEntry({ isMobile }) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    isMobile
      ? <div className="dragg-up-button">
        <ScrollButton onClick={handleToggle} text="Enter Data" />
        <Drawer open={open} onRequestclose={handleToggle} modalElementClass={"data-entry-menu"} >
          <ScrollButton onClick={handleToggle} text="Close Data" />
          <div className="data-entry">
            <InputTable isMobile={isMobile} />
          </div>
        </Drawer>
      </div>
      : <InputTable isMobile={isMobile} />
  );
}

export default DataEntry;

