import React from 'react';

function Domain({ label, children }) {
  return (
    <div className="domain">
      <h4>{label}</h4>
      {children}
    </div>
  );
}

export default Domain;
