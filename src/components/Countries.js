import { useEffect, useState } from 'react';
import { fetchCountry } from '../redux/CountrySlice';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Country from './Country';
import Form from './Search';
import './styles/Countries.css';

function Countries() {
  const { countries, loading } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    dispatch(fetchCountry());
  }, [dispatch]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Form onSearch={handleSearch} />
      {searchResults.length > 0 ? (
        searchResults.map((country) => (
          <NavLink key={country.alpha2Code} to={{ pathname: `/details/${country.name}` }}>
            <Country key={country.alpha3Code} country={country} />
          </NavLink>
        ))
      ) : (
        countries.length > 0 ? (
          countries.map((country) => (
            <NavLink key={country.alpha2Code} to={{ pathname: `/details/${country.name}` }}>
              <Country key={country.alpha3Code} country={country} />
            </NavLink>
          ))
        ) : (
          <div>Check your connection and try reloading</div>
        )
      )}
    </div>
  );
}

export default Countries;
