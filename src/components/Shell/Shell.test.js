import React from 'react';

import { render, screen } from './TestUtil';
import '@testing-library/jest-dom/extend-expect';
import Shell from './Shell';
import PokemonDetailReducer from '../../redux/Pokemon/reducers/Detail';

let INITIAL_STATE = {};

beforeEach(() => {
  INITIAL_STATE = { pokemon: { detail: { item: { data: { id: 'UG9rZW1vbjowMDM=' } } } } };
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

test('home link should not be shown at home', () => {
  const shell = screen.getByTestId('shell-wrapper');
  const homeCol = screen.getByTestId('shell-home-col');
  const homeLink = screen.queryByTestId('shell-home-link');

  expect(shell).toBeInTheDocument();
  expect(shell).toContainElement(homeCol);
  expect(homeLink).toEqual(null);
});

test('home link should be shown at details page', () => {
  render(<Shell title='title' />, { reducer: PokemonDetailReducer, mockStore: INITIAL_STATE, route: '/pokemon/UG9rZW1vbjowMDM=' });

  const homeCol = screen.queryAllByTestId('shell-home-col')[1];
  const homeLink = screen.getByTestId('shell-home-link');

  expect(homeCol).toBeInTheDocument();
  expect(homeLink).toBeInTheDocument();
  expect(homeCol).toContainElement(homeLink);
  expect(homeLink).toHaveTextContent('Home');
});

test('edit button should not be shown at home', () => {
  const shell = screen.getByTestId('shell-wrapper');
  const editCol = screen.getByTestId('shell-edit-col');
  const editButton = screen.queryByTestId('shell-edit-button');

  expect(shell).toBeInTheDocument();
  expect(shell).toContainElement(editCol);
  expect(editCol).not.toContainElement(editButton);
});


test('edit button should be shown at detail', () => {
  render(<Shell title='title' />, { reducer: PokemonDetailReducer, mockStore: INITIAL_STATE, route: '/pokemon/UG9rZW1vbjowMDM=' });
  const editCol = screen.queryAllByTestId('shell-edit-col')[1];
  const editButton = screen.getByTestId('shell-edit-button');

  expect(editCol).toBeInTheDocument();
  expect(editButton).toBeInTheDocument();
  expect(editCol).toContainElement(editButton);
  expect(editButton).toHaveTextContent('Edit');
});
