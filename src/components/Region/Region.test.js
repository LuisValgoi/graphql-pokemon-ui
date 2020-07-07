import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Region } from './Region';

test('Region: should render', () => {
  const { asFragment } = render(<Region />)
  expect(asFragment()).toMatchSnapshot();
});

test('Region: should render element passed as children', () => {
  render(<Region>text</Region>);

  const region = screen.getByTestId('region');
  expect(region).toBeInTheDocument();
  expect(region).toContainHTML('text');
});
