import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { RegionTitle } from './Region';

test('RegionTitle: should render', () => {
  const { asFragment } = render(<RegionTitle />)
  expect(asFragment()).toMatchSnapshot();
});

test('RegionTitle: should render element passed as children using the given structure', () => {
  render(<RegionTitle>text</RegionTitle>);

  const content = screen.getByTestId('region-title-wrapper');
  const info = screen.getByTestId('region-title-info');
  expect(content).toContainElement(info);
  expect(info).toContainHTML('text');
});

test('RegionTitle: should render text centralized', () => {
  render(<RegionTitle><div>text</div></RegionTitle>);

  const info = screen.getByTestId('region-title-info');
  expect(info).toHaveStyle(`text-align: center`);
  expect(info).toHaveStyle(`vertical-align: middle`);
});
