import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCountry } from '../redux/CountrySlice';
import Country from './Country';
import Form from './Search';
import Header from './Header';
import loadingGif from '../assets/loading.gif';
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
    return <div className="loading" data-testid="loading"><img src={loadingGif} alt="Loading...." /></div>;
  }

  return (
    <div>
      <div>
        <Form onSearch={handleSearch} />
        <Header country={countries}/>
      </div>
      <h3>
        Countries({countries.length}) Population
      </h3>
      <ul className="countries">
        {searchResults.length > 0 ? (
          searchResults.map((country) => (
            <li key={country.name}>
              <NavLink key={country.alpha2Code} to={{ pathname: `/details/${country.name}` }}>
              <span className="arrow-details">&rarr;</span>
                <Country 
                  key={country.alpha3Code} 
                  country={country} 
                />
              </NavLink>
            </li>
          ))
        ) : (
          countries.length > 0 ? (
            countries.map((country) => (
              <li key={country.name}>
                <NavLink key={country.alpha2Code} to={{ pathname: `/details/${country.name}` }}>
                <span className="arrow-details">&rarr;</span>
                  <Country 
                    key={country.alpha3Code} 
                    country={country} 
                  />
                </NavLink>
              </li>
            ))
          ) : (
            <div>Check your connection and reload</div>
          )
        )}
      </ul>
    </div>
  );
}

export default Countries;
