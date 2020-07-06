import React from 'react'

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Toolbar from './Toolbar';

afterEach(cleanup);

test('should render', () => {
  const { asFragment } = render(<Toolbar />);
  expect(asFragment()).toMatchSnapshot();
});

test('should have placeholder w/ the text: "Search by a pokemon name"', () => {
  const { getByTestId } = render(<Toolbar />);
  expect(getByTestId('toolbar-input')).toBeInTheDocument();
  expect(getByTestId('toolbar-input')).toHaveAttribute('placeholder', 'Search by a pokemon name');
});

