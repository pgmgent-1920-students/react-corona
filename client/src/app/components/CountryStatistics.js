// https://api.thevirustracker.com/free-api?countryTotal=BE

import React, { useEffect, useState } from 'react';
import { CoronaApi } from '../services';

import Panel from './Panel';
import PBar from './PBar';

const CountryStatistics = ({countryCode}) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {      
      const jsonData = await CoronaApi.getCountryStatistics(countryCode);
      setData(jsonData);
    };

    fetchData();
  }, [countryCode]);

  return (
    <div className="panel">
      {!!data
      ? (
          <Panel title={`Country Statistics: ${data.info.title} (${data.info.code})`}>
            <table>
              <tbody>
                <tr><td>Cases</td><td>{data.total_cases}</td></tr>
                <tr><td>Recovered</td><td><PBar percentage={Math.round((data.total_recovered/data.total_cases)*100)} /></td></tr>
                <tr><td>Deaths</td><td><PBar percentage={Math.round((data.total_deaths/data.total_cases)*100)} /></td></tr>
                <tr><td>New cases</td><td>{data.total_new_cases_today}</td></tr>
                <tr><td>New deaths</td><td>{data.total_new_deaths_today}</td></tr>
                <tr><td>Active cases</td><td>{data.total_active_cases}</td></tr>
                <tr><td>Serious cases</td><td>{data.total_serious_cases}</td></tr>
                <tr><td>Latitude</td><td>{data.geoLocation.lat}</td></tr>
                <tr><td>Longitude</td><td>{data.geoLocation.lng}</td></tr>
              </tbody>
            </table>
          </Panel>
        )
      : (<p>LADEN</p>)
      }
    </div>
  );
};

export default CountryStatistics;