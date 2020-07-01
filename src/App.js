import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import Shell from './components/Shell/Shell';
import Routes from './routes/Routes';

import store from './redux/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Shell title='GraphQL Pokemon UI' />
        <div style={{ paddingTop: '100px' }} />
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
