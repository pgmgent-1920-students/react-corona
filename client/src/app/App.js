import React from 'react';

import { CountryStatistics } from './components';


import './App.css';

function App() {
  return (
    <div className="app">   
      <CountryStatistics countryCode={`BE`} />
      <CountryStatistics countryCode={`NL`} />
      <CountryStatistics countryCode={`EC`} />
    </div>
  );
}

export default App;
