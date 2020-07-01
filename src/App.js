import React from 'react';

import Shell from './components/Shell/Shell';
import Routes from './routes/Routes';

function App() {
  return (
    <>
      <Shell title='GraphQL Pokemon UI' />
      <div style={{ paddingTop: '100px' }}>
        <Routes />
      </div>
    </>
  );
}

export default App;
