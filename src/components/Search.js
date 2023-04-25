import { useState } from "react";
import { useSelector } from "react-redux";

const Form = ({ onSearch }) => {
  const { countries } = useSelector((state) => state.countries);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );
    onSearch(filteredCountries);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search by country name"
        name="Search by country name"
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
