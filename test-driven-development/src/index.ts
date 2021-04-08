/** Use Axios to get data from restcountries api */
import axios from 'axios';

/** Use the free API https://restcountries.eu/
 * You will use the following endpoints
 * https://restcountries.eu/rest/v2/name/{name} for countries by name
 * https://restcountries.eu/rest/v2/regionalbloc/{regionalbloc} for region blocks
 */

/** Create getCountry Function here */
async function getCountry(name: string) {
  const getApi = await axios(
    `https://restcountries.eu/rest/v2/name/${name}`
  );

  const data = getApi.data[0];

  return {
    capital: data.capital,
    region: data.region,
    numericCode: data.numericCode
  };
}

console.log(getCountry("canada"));


/** Create a test for this getRegion function */
async function getRegionCountries(regionalbloc: string) {
  const getApi = await axios(
    `https://restcountries.eu/rest/v2/regionalbloc/${regionalbloc}`
  );
  const data = getApi.data;
  const countries = [];
  for (let i = 0; i < data.length; i++) {
    countries.push(data[i].name);
  }
  return countries;
}

/** Create getRegionCapitals function here */
async function getRegionCapitals(regionalbloc: string) {
  const countryEndpoints = await getRegionCountries(regionalbloc);
  const promises = countryEndpoints.map((endpoint: any) => 
    axios(`https://restcountries.eu/rest/v2/name/${endpoint}`)
  );
  const arr = await Promise.all(promises);
  const capitals = arr.map(({ data }) => data[0].capital)

  return capitals;
}

console.log(getRegionCapitals("nafta"));

export default {
  getCountry,
  getRegionCountries,
  getRegionCapitals
};
