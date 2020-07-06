import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import BrowserURL from '../../util/BrowserURL';

const render = (ui, { mockStore, reducer, entries, path, ...renderOptions }) => {
  const store = createStore(reducer, mockStore);
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={entries ?? [Object.values(BrowserURL)]}>
          <Route path={path ?? BrowserURL.ANY}>
            {children}
          </Route>
        </MemoryRouter>
      </Provider>
    );
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react'

export { render }
