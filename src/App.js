import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';
import { ContextProvider } from './contexts/Contexts';

export default function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Main />
    </ContextProvider>
  )
}

