import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppProvider from './src/hooks';
import Routes from './src/routes';
// import AppStack from './src/routes/AppStack';

export default function App() {
  return (
    <AppProvider>    
      <Routes />
      <StatusBar style="light" />
    </AppProvider>
  );
}
