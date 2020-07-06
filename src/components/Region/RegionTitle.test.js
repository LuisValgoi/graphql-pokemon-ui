import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { RegionTitle } from './Region';

afterEach(cleanup);

test('RegionTitle: should render', () => {
  const { asFragment } = render(<RegionTitle />)
  expect(asFragment()).toMatchSnapshot();
});

test('RegionTitle: should render element passed as children using the given structure', () => {
  const { getByTestId } = render(<RegionTitle>text</RegionTitle>);
  const content = getByTestId('region-title-wrapper');
  const info = getByTestId('region-title-info');
  expect(content).toContainElement(info);
  expect(info).toContainHTML('text');
});

test('RegionTitle: should render text centralized', () => {
  const { getByTestId } = render(<RegionTitle><div>text</div></RegionTitle>);
  expect(getByTestId('region-title-info')).toHaveStyle(`text-align: center`);
  expect(getByTestId('region-title-info')).toHaveStyle(`vertical-align: middle`);
});
