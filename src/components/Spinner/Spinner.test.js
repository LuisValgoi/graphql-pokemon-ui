import React from 'react';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Spinner from './Spinner';

afterEach(cleanup);

test('should render', () => {
  const { asFragment } = render(<Spinner />);
  expect(asFragment()).toMatchSnapshot();
})

test('should has text-center class', () => {
  const { getByTestId } = render(<Spinner />);
  expect(getByTestId('spinner')).toHaveClass('text-center');
})
