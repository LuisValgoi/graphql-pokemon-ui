import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { useIsSmallScreen } from './hooks/useIsMobile';

import ErrorBoundary from './components/Fallback/ErrorBoundary';
import Shell from './components/Shell/Shell';
import Routes from './routes/Routes';

import store from './redux/store';
import Container from 'react-bootstrap/Container';

function App() {
  const isSmallScreen = useIsSmallScreen()
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <Shell title='GraphQL Pokemon UI' />
          <div style={{ paddingTop: isSmallScreen ? '130px' : '100px' }} />
          <Container>
            <Routes />
          </Container>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
