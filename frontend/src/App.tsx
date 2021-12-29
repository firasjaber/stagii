import React from 'react';
import { MantineProvider } from '@mantine/core';
import MainLayout from './components/MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
