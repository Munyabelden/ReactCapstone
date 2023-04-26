import { fetchCountry, countrySlice } from '../redux/CountrySlice';

describe('country reducer', () => {
  it('should return the initial state', () => {
    expect(countrySlice(undefined, {})).toEqual({
      countries: [],
      loading: false,
    });
  });

  it('should handle fetchCountry.pending', () => {
    expect(
      countrySlice(undefined, {
        type: fetchCountry.pending.type,
      })
    ).toEqual({
      countries: [],
      loading: true,
    });
  });

  it('should handle fetchCountry.fulfilled', () => {
    expect(
      countrySlice(undefined, {
        type: fetchCountry.fulfilled.type,
        payload: [{ name: 'Country A' }, { name: 'Country B' }],
      })
    ).toEqual({
      countries: [{ name: 'Country A' }, { name: 'Country B' }],
      loading: false,
    });
  });

  it('should handle fetchCountry.rejected', () => {
    expect(
      countrySlice(undefined, {
        type: fetchCountry.rejected.type,
      })
    ).toEqual({
      countries: [],
      loading: false,
    });
  });
});
