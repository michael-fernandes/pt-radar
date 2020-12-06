import React from 'react';

function Domain({label, children}) {
  return (
    <div className="domain">
      <h3>{label}</h3>
      {children}
    </div>
  );
}

export default Domain;