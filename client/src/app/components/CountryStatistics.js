// https://api.thevirustracker.com/free-api?countryTotal=BE

import React, { useEffect, useState } from 'react';

const CountryStatistics = () => {
  const CORONA_API_DOMAIN = 'https://api.thevirustracker.com/free-api?';
  const CORONA_API_COUNTRY_STATISTICS = `${CORONA_API_DOMAIN}countryTotal=BE`;

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(CORONA_API_COUNTRY_STATISTICS);
      const jsonData = await response.json();
      setData(jsonData.countrydata[0]);
    };

    fetchData();

  }, []);

  return (
    <div className="">
      {!!data
      ? (<p>GELADEN</p>)
      : (<p>LADEN</p>)
      }
    </div>
  );
};

export default CountryStatistics;