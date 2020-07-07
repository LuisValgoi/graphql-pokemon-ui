import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { RegionContent } from './Region';

test('RegionContent: should render', () => {
  const { asFragment } = render(<RegionContent />)
  expect(asFragment()).toMatchSnapshot();
});

test('RegionContent: should render element passed as children using the given structure', () => {
  render(<RegionContent>text</RegionContent>);

  const content = screen.getByTestId('region-content-wrapper');
  const info = screen.getByTestId('region-content-info');
  expect(content).toContainElement(info);
  expect(info).toContainHTML('text');
});
