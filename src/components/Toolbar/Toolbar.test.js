import React from 'react'

import { render, cleanup, fireEvent } from '@testing-library/react';
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

test('should set variable through IoC to "text"', () => {
  let variable = '';
  const onSearch = (e) => variable = e;
  const utils = render(<Toolbar onSearch={onSearch} />);
  const input = utils.getByTestId('toolbar-input');
  fireEvent.input(input, { target: { value: 'text' } });
  expect(input.value).toBe(variable);
});
