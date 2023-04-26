import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import './styles/Details.css';

const Details = () => {
  const { countryName } = useParams();
  const { countries } = useSelector((state) => state.countries);
  const country = countries.find((country) => country.name === countryName)

  return (
    <div>
      <div className='top'>
        <NavLink to='/'>&crarr;</NavLink>
        <span>{country.name} Details</span>
        <span></span>
      </div>
      <div className='flag'>
        <img src={country.flag} alt={`${country.name}'s flag`} />
        <h2>{country.name}<br></br> <span>{country.timezones}</span></h2>
      </div>
      <h3>Statistics</h3>
      <ul className='statistics'>
        <li><span>Capital</span><br></br> {country.capital}</li>
        <li><span>Demonym</span><br></br> {country.demonym}</li>
        <li><span>Subregion</span><br></br> {country.subregion}</li>
        {country.languages && country.languages.length > 0 && (
          <li><span>First language</span><br></br> {country.languages[0].name}</li>
        )}
        {country.languages && country.languages.length > 1 && (
          <li><span>Second language</span><br></br>{country.languages[1].name}</li>
        )}
        {country.languages && country.languages.length > 2 && (
          <li><span>Third language</span><br></br>{country.languages[2].name}</li>
        )}
        <li><span>Population</span><br></br>{country.population}</li>
        <li><span>Region</span><br></br>{country.region}</li>
        <li><span>Area(square meters)</span><br></br>{country.area}</li>
      </ul>
    </div>
  );
};

export default Details;
