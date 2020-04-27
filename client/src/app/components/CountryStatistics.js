// https://api.thevirustracker.com/free-api?countryTotal=BE

import React, { useEffect, useState, Fragment } from 'react';

import PBar from './PBar';

import countries from '../../_data/countries.json';

const CountryStatistics = ({countryCode}) => {
  const CORONA_API_DOMAIN = 'https://api.thevirustracker.com/free-api?';
  const CORONA_API_COUNTRY_STATISTICS = `${CORONA_API_DOMAIN}countryTotal=${countryCode}`;

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(CORONA_API_COUNTRY_STATISTICS);
      let jsonData = await response.json();
      jsonData = jsonData.countrydata[0];
      const country = countries.find((country) => country.iso2Code == jsonData.info.code);
      
      setData({
        ...jsonData,
        countryName: country.name
      });
    };

    fetchData();

  }, []);

  return (
    <div className="panel">
      {!!data
      ? (
          <Fragment>
            <div className="">{data.countryName}</div>
            <table>
              <thead>
                <tr><th>Category</th><th>Number</th></tr>
              </thead>
              <tbody>
                <tr><td>Cases</td><td>{data.total_cases}</td></tr>
                <tr><td>Recovered</td><td><PBar percentage={Math.round((data.total_recovered/data.total_cases)*100)} /></td></tr>
                <tr><td>Deaths</td><td><PBar percentage={Math.round((data.total_deaths/data.total_cases)*100)} /></td></tr>
                <tr><td>New cases</td><td>{data.total_new_cases_today}</td></tr>
                <tr><td>New deaths</td><td>{data.total_new_deaths_today}</td></tr>
                <tr><td>Active cases</td><td>{data.total_active_cases}</td></tr>
                <tr><td>Serious cases</td><td>{data.total_serious_cases}</td></tr>
              </tbody>
            </table>
          </Fragment>
        )
      : (<p>LADEN</p>)
      }
    </div>
  );
};

export default CountryStatistics;