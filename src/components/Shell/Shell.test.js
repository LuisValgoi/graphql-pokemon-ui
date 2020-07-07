import React from 'react';

import { render, screen } from './TestUtil';
import '@testing-library/jest-dom/extend-expect';
import Shell from './Shell';
import PokemonDetailReducer from '../../redux/Pokemon/reducers/Detail';

let INITIAL_STATE = {};
beforeEach(() => {
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

// test('home link should be shown at details page', async () => {
//   window.location.pathname = 'aoiejoaijoieaj'
//   const { rerender } = screen;
//   rerender(<Shell title='text2' />);
  // const shell = shellElementView.getByTestId('shell-wrapper');
  // const homeCol = shellElementView.getByTestId('shell-home-col');
  // const homeLink = shellElementView.getByTestId('shell-home');
  // expect(shell).toBeInTheDocument();
  // await wait(() => expect(shell).toContainElement(homeCol));
  // await wait(() => expect(homeCol).toContainElement(homeLink));
// })
