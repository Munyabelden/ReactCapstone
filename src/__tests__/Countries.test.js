import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Countries from '../components/Countries';

const mockStore = configureMockStore([thunk]);
const store = mockStore({
  countries: {
    countries: [],
    loading: false,
    error: null,
  },
});

describe('Countries', () => {
  it('renders the list of countries when loading is false', () => {
    const countries = [];
    render(
      <Provider store={store}>
        <Countries />
      </Provider>,
    );

    expect(screen.getByText(`Countries(${countries.length})`)).toBeInTheDocument();
  });

  it('renders error message when there is an error', () => {
    const error = 'Check your connection and reload';

    const storeWithErrors = mockStore({
      countries: {
        countries: [],
        loading: false,
        error,
      },
    });

    render(
      <Provider store={storeWithErrors}>
        <Countries />
      </Provider>,
    );

    expect(screen.getByText(error)).toBeInTheDocument();
  });
});
