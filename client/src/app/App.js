import React from 'react';

import { CountryStatistics, GlobalStatistics } from './components';

import './App.css';

function App() {
  return (
    <div className="app">  
      <div className="container-fluid">
        <div className="row countries">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <GlobalStatistics /> 
          </div>
        </div>
        <div className="row countries">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <CountryStatistics countryCode={`BE`} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <CountryStatistics countryCode={`NL`} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <CountryStatistics countryCode={`EC`} />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <CountryStatistics countryCode={`US`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
