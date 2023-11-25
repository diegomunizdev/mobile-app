import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import '../lang/i18n.config';
import PublicRoutes from './public';
import PrivateRoutes from './private';
import { useAuthContext } from '../contexts/auth/authContext';
import HomeProvider from '../components/providers/home/HomeProvider';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

export default function Routes() {
  const { isAuthenticated } = useAuthContext();
  console.log('isAuth', isAuthenticated);
  return (
    <NavigationContainer theme={theme}>
      {isAuthenticated ? (
        <HomeProvider>
          <PrivateRoutes />
        </HomeProvider>
      ) : (
        <PublicRoutes />
      )}
    </NavigationContainer>
  );
}
