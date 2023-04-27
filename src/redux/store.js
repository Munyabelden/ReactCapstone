import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { countrySlice } from './CountrySlice';

const Store = configureStore({
  reducer: {
    countries: countrySlice,
  },
  middleware: [thunk],
});

export default Store;
