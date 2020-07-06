import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Region } from './Region';

afterEach(cleanup);

test('Region: should render', () => {
  const { asFragment } = render(<Region />)
  expect(asFragment()).toMatchSnapshot();
});

test('Region: should render element passed as children', () => {
  const { getByTestId } = render(<Region>text</Region>);
  expect(getByTestId('region')).toBeInTheDocument();
  expect(getByTestId('region')).toContainHTML('text');
});
