import React from 'react';

import './Panel.css';

const Panel = ({children, title}) => {
  return (
    <div className="panel">
      <div className="panel__header">{title}</div>
      <div className="panel__body">
        {children}
      </div>
    </div>
  );
};

export default Panel;