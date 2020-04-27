// https://api.thevirustracker.com/free-api?countryTotal=BE

import React, { useEffect, useState, Fragment } from 'react';
import { useCorona } from '../services';

const GlobalStatistics = ({}) => {
  const {getGlobalStatistics} = useCorona();

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const jsonData = await getGlobalStatistics();      
      setData(jsonData);
    };

    fetchData();

  }, []);

  return (
    <div className="">
      {!!data
      ? (
          <Fragment>
            <table>
              <thead>
                <tr><th>Category</th><th>Number</th></tr>
              </thead>
              <tbody>
                <tr><td>Cases</td><td>{data.total_cases}</td></tr>
                <tr><td>Recovered</td><td>{data.total_recovered}</td></tr>
                <tr><td>Deaths</td><td>{data.total_deaths}</td></tr>
                <tr><td>New cases</td><td>{data.total_new_cases_today}</td></tr>
                <tr><td>New deaths</td><td>{data.total_new_deaths_today}</td></tr>
                <tr><td>Active cases</td><td>{data.total_active_cases}</td></tr>
                <tr><td>Serious cases</td><td>{data.total_serious_cases}</td></tr>
                <tr><td>Affected countries</td><td>{data.total_affected_countries}</td></tr>
              </tbody>
            </table>
          </Fragment>
        )
      : (<p>LADEN</p>)
      }
    </div>
  );
};

export default GlobalStatistics;