import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/Details.css';

const Details = () => {
  const { countryName } = useParams();
  const { countries } = useSelector((state) => state.countries);
  const country = countries.find((country) => country.name === countryName);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <div className="top">
        <NavLink to="/">
          <i class="fa-solid fa-chevron-left"></i>
        </NavLink>
        <span>
          {country.name} 
          Details
        </span>
        <span>
          <i class="fa-solid fa-gear"></i>
        </span>
      </div>
      <div className="flag">
        <img src={country.flag} alt={`${country.name}'s flag`} />
        <h2>
          {country.name}<br></br> 
          <span>
            {country.area} 
            |
          </span>
        </h2>
      </div>
      <h3>Statistics</h3>
      <ul className="statistics">
        <li>
          <span>Capital</span>
          <p>{country.capital}</p>
        </li>
        <li>
          <span>Demonym</span>
          <p>{country.demonym}</p>
        </li>
        <li>
          <span>Subregion</span>
          <p>{country.subregion}</p>
        </li>
        {country.languages && country.languages.length > 0 && (
          <li>
            <span>First language</span>
            <p>{country.languages[0].name}</p>
          </li>
        )}
        {country.languages && country.languages.length > 1 && (
          <li>
            <span>Second language</span>
            <p>{country.languages[1].name}</p>
          </li>
        )}
        {country.languages && country.languages.length > 2 && (
          <li>
            <span>Third language</span>
            <p>{country.languages[2].name}</p>
          </li>
        )}
        <li>
          <span>Population</span>
          <p>{country.population}</p>
        </li>
        <li>
          <span>Region</span>
          <p>{country.region}</p>
        </li>
        <li>
          <span>Area(square meters)</span>
          <p>{country.area}</p>
        </li>
      </ul>
    </div>
  );
};

export default Details;
