import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Form = ({ onSearch }) => {
  const { countries } = useSelector((state) => state.countries);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(countries.filter((con) => con.name.toLowerCase().includes(value.toLowerCase())));
  };

  return (
    <div className="form">
      <span>
        <i className="fa-solid fa-chevron-left" />
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
        <i className="fa-solid fa-gear" />
        <i className="fa-solid fa-microphone" />
      </span>
    </div>
  );
};

Form.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Form;
