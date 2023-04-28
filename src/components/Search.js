import { useState } from 'react';
import { useSelector } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.css';

const Form = ({ onSearch }) => {
  const { countries } = useSelector((state) => state.countries);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const {value}= event.target;
    setSearchTerm(value);
    const filteredCountries = countries.filter((country) => country.name.toLowerCase().includes(value.toLowerCase()));
    onSearch(filteredCountries);
  };

  return (
    <div className="form">
      <span>
        <i class="fa-solid fa-chevron-left"></i>
      </span>
      <form>
        <h2>Metrics Webapp</h2>
        <input
          type="text"
          placeholder="Search by country name"
          name="Search by country name"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <span>
        <i class="fa-solid fa-gear"></i>
        <i class="fa-solid fa-microphone"></i>
      </span>
    </div>
  );
};

export default Form;
