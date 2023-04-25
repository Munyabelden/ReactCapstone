import React from 'react';
import './styles/Countries.css';

const Country = ({ country }) => {
  return (
    <div>
      <img src={ country.flags.svg } alt={`${country.name}'s flag` } />
      <h2>{country.name}</h2>
    </div>
  );
}

export default Country;
