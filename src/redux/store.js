import { configureStore } from '@reduxjs/toolkit';
import { countrySlice } from './CountrySlice';

const Store = configureStore({
  reducer: {
    countries: countrySlice,
  }
});

export default Store;
