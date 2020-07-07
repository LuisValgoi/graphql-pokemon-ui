import React from 'react';

import { render, screen } from './TestUtil';
import '@testing-library/jest-dom/extend-expect';
import Shell from './Shell';
import PokemonDetailReducer from '../../redux/Pokemon/reducers/Detail';

let INITIAL_STATE = {};

beforeEach(() => {
  INITIAL_STATE = { pokemon: { detail: { item: { data: { id: 1 } } } } };
  render(<Shell title='title' />, { reducer: PokemonDetailReducer, mockStore: INITIAL_STATE });
});

test('should render', () => {
  const shell = screen.getByTestId('shell-wrapper');

  expect(shell).toMatchSnapshot();
});

test('should have a little padding', () => {
  const shell = screen.getByTestId('shell-wrapper');

  expect(shell).toBeInTheDocument();
  expect(shell).toHaveClass('p-4');
});

test('should not be shown at home', () => {
  const shell = screen.getByTestId('shell-wrapper');
  const homeCol = screen.getByTestId('shell-home-col');
  const homeLink = screen.queryByTestId('shell-home');

  expect(shell).toBeInTheDocument();
  expect(shell).toContainElement(homeCol);
  expect(homeLink).toEqual(null);
});

test('home link should be shown at details page', () => {
  render(<Shell title='title' />, { reducer: PokemonDetailReducer, mockStore: INITIAL_STATE, route: '/pokemon/1' });

  const homeCol = screen.queryAllByTestId('shell-home-col')[1];
  const homeLink = screen.getByTestId('shell-home');

  expect(homeCol).toBeInTheDocument();
  expect(homeLink).toBeInTheDocument();
  expect(homeCol).toContainElement(homeLink);
  expect(homeLink).toHaveTextContent('Home');
});
