import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { RegionContent } from './Region';

afterEach(cleanup);

test('RegionContent: should render', () => {
  const { asFragment } = render(<RegionContent />)
  expect(asFragment()).toMatchSnapshot();
});

test('RegionContent: should render element passed as children using the given structure', () => {
  const { getByTestId } = render(<RegionContent>text</RegionContent>);
  const content = getByTestId('region-content');
  const info = getByTestId('region-content-info');
  expect(content).toContainElement(info);
  expect(info).toContainHTML('text');
});
