import React from 'react';
import './styles/Country.css';

const Country = ({ country }) => {
  return (
    <div>
      <img src={ country.flags.svg } alt={`${country.name}'s flag` } />
      <h4>{country.name}</h4>
      <p>{country.population}</p>
    </div>
  );
}

export default Country;
