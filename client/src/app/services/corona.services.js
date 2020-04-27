import countries from '../../_data/countries.json';

const CORONA_API_DOMAIN = 'https://api.thevirustracker.com/free-api?';
const CORONA_API_COUNTRIES_STATISTICS = `${CORONA_API_DOMAIN}countryTotals=ALL`;
const CORONA_API_COUNTRY_STATISTICS = `${CORONA_API_DOMAIN}countryTotal=:countryCode`;
const CORONA_API_GLOBAL_STATISTICS = `${CORONA_API_DOMAIN}global=stats`;

class CoronaApi {

  static getCountriesStatistics = async (countryCode) => {
    const response = await fetch(CORONA_API_COUNTRIES_STATISTICS);
    const countriesData = [];
    let jsonData = await response.json();
    jsonData = jsonData.countryitems[0];
    Object.entries(jsonData).forEach((item) => {
      const v = item[1];
      const country = countries.find((c) => c.iso2Code === v.code);
      if (country) {
        countriesData.push({
          ...v,
          geoLocation: {
            lat: country.latitude,
            lng: country.longitude
          }
        });
      }
    });

    return countriesData;
  };

  static getCountryStatistics = async (countryCode) => {
    const response = await fetch(CORONA_API_COUNTRY_STATISTICS.replace(':countryCode',countryCode));
    let jsonData = await response.json();
    jsonData = jsonData.countrydata[0];
    const country = countries.find((c) => c.iso2Code === jsonData.info.code);

    jsonData = {
      ...jsonData,
      geoLocation: {
        lat: country.latitude,
        lng: country.longitude
      }
    }

    return jsonData;
  };

  static getGlobalStatistics = async () => {
    const response = await fetch(CORONA_API_GLOBAL_STATISTICS);
    let jsonData = await response.json();
    jsonData = jsonData.results[0];    

    return jsonData;
  };
};

export {
  CoronaApi,
}