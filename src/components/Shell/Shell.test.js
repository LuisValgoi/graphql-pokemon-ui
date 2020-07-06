import React from 'react';

import { render, cleanup } from './TestUtil';
import '@testing-library/jest-dom/extend-expect';
import Shell from './Shell';
import PokemonDetailReducer from '../../redux/Pokemon/reducers/Detail';
import store from '../../redux/store';

let INITIAL_STATE = {};
let shellElement = null;
beforeEach(() => {
  // cleanup();
  INITIAL_STATE = {
    pokemon: {
      detail: {
        item: {
          data: {
            id: 1
          }
        }
      },
    }
  };
  shellElement = render(<Shell title='title' />, { reducer: PokemonDetailReducer, mockStore: INITIAL_STATE });
});

test('should render', () => {
  const shell = shellElement.getByTestId('shell-wrapper');
  expect(shell).toMatchSnapshot();
});

test('should have a little padding', () => {
  const shell = shellElement.getByTestId('shell-wrapper');
  expect(shell).toBeInTheDocument();
  expect(shell).toHaveClass('p-4');
});

test('should not be shown at home', () => {
  const shell = shellElement.getByTestId('shell-wrapper');
  const homeCol = shellElement.getByTestId('shell-home-col');
  const homeLink = shellElement.queryByTestId('shell-home');
  expect(shell).toBeInTheDocument();
  expect(shell).toContainElement(homeCol);
  expect(homeLink).toEqual(null);
});
