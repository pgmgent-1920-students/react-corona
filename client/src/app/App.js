import React from 'react';

import { CountryStatistics, GlobalStatistics } from './components';
import { CoronaProvider } from './services';

import './App.css';

function App() {
  return (
    <div className="app">  
      <CoronaProvider>
        <GlobalStatistics /> 
        <CountryStatistics countryCode={`BE`} />
        <CountryStatistics countryCode={`NL`} />
        <CountryStatistics countryCode={`EC`} />
      </CoronaProvider>      
    </div>
  );
}

export default App;
