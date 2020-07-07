import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Spinner from './Spinner';

test('should render', () => {
  const { asFragment } = render(<Spinner />);
  expect(asFragment()).toMatchSnapshot();
});

test('should has text-center class', () => {
  render(<Spinner />);

  const spinner = screen.getByTestId('spinner');
  expect(spinner).toHaveClass('text-center');
});
