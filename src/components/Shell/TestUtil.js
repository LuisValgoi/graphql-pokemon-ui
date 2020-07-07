import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { createStore } from 'redux';
import BrowserURL from '../../util/BrowserURL';

const render = (ui, { mockStore, reducer, route = BrowserURL.LIST, ...renderOptions } = {}) => {
  const store = createStore(reducer, mockStore);
  const Wrapper = ({ children }) => {
    const history = createMemoryHistory({ initialEntries: [route] });
    return (
      <Provider store={store}>
        <Router history={history}>
          {children}
        </Router>
      </Provider>
    );
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react'

export { render }
