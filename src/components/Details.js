import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

const Details = () => {
  const { countryName } = useParams();
  const { countries } = useSelector((state) => state.countries);
  const country = countries.find((country) => country.name === countryName)

  // if(!country || !country.length) {
  //   return <div>Loading...</div>
  // }

  return (
    <div>
      <NavLink to='/'> v </NavLink>
      <div>
        <img src={country.flag} alt={`${country.name}'s flag`} />
        <h2>{country.name}</h2>
        <span>{country.timezones}</span>
      </div>
      <ul>
        <li>{country.capital}</li>
        <li>{country.demonym}</li>
        <li>{country.subregion}</li>
        {country.languages && country.languages.length > 0 && (
          <li>{country.languages[0].name}</li>
        )}
        {country.languages && country.languages.length > 1 && (
          <li>{country.languages[1].name}</li>
        )}
        {country.languages && country.languages.length > 2 && (
          <li>{country.languages[2].name}</li>
        )}
        <li>{country.population}</li>
        <li>{country.region}</li>
        <li>{country.area}</li>
      </ul>
    </div>
  );
};

export default Details;
