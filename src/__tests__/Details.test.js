import React from 'react';
import { render, screen } from '@testing-library/react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Details from '../components/Details';

const mockStore = configureMockStore([thunk]);

describe('Details component', () => {
  let store;
  
  beforeEach(async() => {
    store = mockStore({
      countries: {
        countries: [
          {
            name: 'Country 1',
            flag: 'https://restcountries.com/data/afg.svg',
            capital: 'Capital 1',
            demonym: 'Demonym 1',
            subregion: 'Subregion 1',
            languages: [
              { name: 'Language 1' },
              { name: 'Language 2' },
              { name: 'Language 3' },
            ],
            population: 1000,
            region: 'Region 1',
            area: 1000,
            timezones: 'Timezone 1',
          },
        ],
      },
    });

    store.dispatch = jest.fn();

    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => ([
        {
          name: 'Country 1',
          flag: 'https://restcountries.com/data/afg.svg',
          capital: 'Capital 1',
          demonym: 'Demonym 1',
          subregion: 'Subregion 1',
          languages: [
            { name: 'Language 1' },
            { name: 'Language 2' },
            { name: 'Language 3' },
          ],
          population: 1000,
          region: 'Region 1',
          area: 1000,
          timezones: 'Timezone 1',
        },
        ]
      )
    });
  });

  it('should render country not found if country empty', () => {
    render(
      <Provider store={store}>
          <Details />
      </Provider>
    );

    expect(screen.getByText('Country not found')).toBeInTheDocument();
  });
});
