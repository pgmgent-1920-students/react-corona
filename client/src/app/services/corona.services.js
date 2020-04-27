import React, { createContext, useContext } from 'react';

const CoronaContext = createContext();
const useCorona = () => useContext(CoronaContext);

const CoronaProvider = ({children}) => {
  const CORONA_API_DOMAIN = 'https://api.thevirustracker.com/free-api?';
  const CORONA_API_COUNTRY_STATISTICS = `${CORONA_API_DOMAIN}countryTotal=:countryCode`;
  const CORONA_API_GLOBAL_STATISTICS = `${CORONA_API_DOMAIN}global=stats`;

  const getGlobalStatistics = async () => {
    const response = await fetch(CORONA_API_GLOBAL_STATISTICS);
    let jsonData = await response.json();
    jsonData = jsonData.results[0];

    return jsonData;
  }

  return (
    <CoronaContext.Provider value={{getGlobalStatistics}}>
      {children}
    </CoronaContext.Provider>
  );
};

export {
  CoronaContext,
  CoronaProvider,
  useCorona,
}