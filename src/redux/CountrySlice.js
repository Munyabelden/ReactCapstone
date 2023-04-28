import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const CountriesAPI = 'https://restcountries.com/v2/all';

const initialState = {
  countries: [],
  loading: false,
};

export const fetchCountry = createAsyncThunk('country/fetchCountry', async () => {
  const res = await fetch(CountriesAPI);
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  const data = await res.json();
  return data;
});

const countryReducer = createSlice({
  name: 'countries',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountry.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(fetchCountry.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          countries: action.payload,
        };
      })
      .addCase(fetchCountry.rejected, (state) => {
        return {
          ...state,
          loading: false,
          countries: initialState.countries,
        };
      });
  },
});

export const countrySlice = countryReducer.reducer;
