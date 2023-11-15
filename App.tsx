import React from 'react';
import Application from './src';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    primary: '#032d63',
    secondary: '#38B2FA',
    tertiary: '#F99A06',
    background: '#f2f2f2',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Application />
    </PaperProvider>
  );
}
