import React from 'react';

import './PBar.css';

const PBar = ({percentage = 0}) => {
  return (
    <div className="pbar">
      <div className="pbar__progress" style={{width: `${percentage}%`}}></div>
    </div>
  );
};

export default PBar;