import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const Countries_API = 'https://restcountries.com/v2/all';

const initialState = {
  countries: [],
  loading: false,
};

export const fetchCountry = createAsyncThunk('country/fetchCountry', async () => {
  const res = await axios.get(Countries_API);
  const data = res.data;
  return data;
});

const countryReducer = createSlice({
  name: 'countries',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountry.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountry.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(fetchCountry.rejected, (state) => {
        state.loading = false;
        state.countries = initialState.countries;
      })
  }
});

export const countrySlice = countryReducer.reducer;
