import React from 'react'

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Toolbar from './Toolbar';

test('should render', () => {
  const { asFragment } = render(<Toolbar />);
  expect(asFragment()).toMatchSnapshot();
});

test('should have placeholder w/ the text: "Search by a pokemon name"', () => {
  render(<Toolbar />);

  const toolbar = screen.getByTestId('toolbar-input');
  expect(toolbar).toBeInTheDocument();
  expect(toolbar).toHaveAttribute('placeholder', 'Search by a pokemon name');
});

test('should set variable through IoC to "text"', () => {
  let variable = '';
  const onSearch = (e) => variable = e;
  render(<Toolbar onSearch={onSearch} />);

  const toolbar = screen.getByTestId('toolbar-input');
  fireEvent.input(toolbar, { target: { value: 'text' } });
  expect(toolbar.value).toBe(variable);
});
