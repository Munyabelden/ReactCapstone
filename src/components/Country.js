import React from 'react';
import PropTypes from 'prop-types'
import './styles/Country.css';

const Country = ({ country }) => {
  return (
    <div>
      <img src={country.flags.svg} alt={`${country.name}'s flag`} />
      <h4>{country.name}</h4>
      <p>{country.population}</p>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flags: PropTypes.shape({
      svg: PropTypes.string.isRequired
    }).isRequired,
    population: PropTypes.number.isRequired
  }).isRequired
};

export default Country;
