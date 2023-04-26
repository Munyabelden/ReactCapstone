import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

const Details = () => {
  const { countryName } = useParams();
  const { countries } = useSelector((state) => state.countries);
  const country = countries.find((country) => country.name === countryName)

  return (
    <div>
      <NavLink to='/'> v </NavLink>
      <div>
        <img src={country.flag} alt={`${country.name}'s flag`} />
        <h2>{country.name}</h2>
        <span>{country.timezones}</span>
      </div>
      <ul>
        <li><span>Capital</span>{country.capital}</li>
        <li><span>Demonym</span>{country.demonym}</li>
        <li><span>Subregion</span>{country.subregion}</li>
        {country.languages && country.languages.length > 0 && (
          <li><span>First language</span>{country.languages[0].name}</li>
        )}
        {country.languages && country.languages.length > 1 && (
          <li><span>Second language</span>{country.languages[1].name}</li>
        )}
        {country.languages && country.languages.length > 2 && (
          <li><span>Third language</span>{country.languages[2].name}</li>
        )}
        <li><span>Population</span>{country.population}</li>
        <li><span>Region</span>{country.region}</li>
        <li><span>Area(square meters)</span>{country.area}</li>
      </ul>
    </div>
  );
};

export default Details;
