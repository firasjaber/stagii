import React from 'react';
import { MantineProvider } from '@mantine/core';
import Layout from './components/Layout';
function App() {
  return (
    <MantineProvider>
      <Layout />
    </MantineProvider>
  );
}

export default App;
