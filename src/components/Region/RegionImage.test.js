import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { RegionImage } from './Region';

test('RegionImage: should render', () => {
  const { asFragment } = render(<RegionImage />)
  expect(asFragment()).toMatchSnapshot();
});

test('RegionImage: should render img w/ some borders around it', () => {
  const img = React.createElement('img', { src: 'https://via.placeholder.com/150' });
  render(<RegionImage>{img}</RegionImage>);

  const wrapper = screen.getByTestId('region-image-wrapper');
  const info = screen.getByTestId('region-image-info');

  expect(wrapper).toContainElement(info);
  expect(info).toHaveStyle(`border: '1px solid rgba(0,0,0,.125)'`);
});
