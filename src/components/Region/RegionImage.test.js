import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { RegionImage } from './Region';

afterEach(cleanup);

test('RegionImage: should render', () => {
  const { asFragment } = render(<RegionImage />)
  expect(asFragment()).toMatchSnapshot();
});

test('RegionImage: should render img w/ some borders around it', () => {
  const img = React.createElement('img', { src: 'https://via.placeholder.com/150' });
  const { getByTestId } = render(<RegionImage>{img}</RegionImage>);
  const wrapper = getByTestId('region-image-wrapper');
  const info = getByTestId('region-image-info');
  expect(wrapper).toContainElement(info);
  expect(info).toHaveStyle(`border: '1px solid rgba(0,0,0,.125)'`);
});
