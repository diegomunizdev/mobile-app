import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenProps } from 'react-native-screens';
import HomeView from '../../components/views/home/HomeView';
import CreditCardView from '../../components/views/cards/creditCard/CreditCardView';
import AccountView from '../../components/views/account/AccountView';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

export default function PrivateRoutes() {
  const routes = [
    {
      name: 'home',
      component: HomeView,
      options: { animation: 'fade', headerShown: false } as ScreenProps,
    },
    {
      name: 'account',
      component: AccountView,
      options: { animation: 'fade', headerShown: false } as ScreenProps,
    },
    {
      name: 'creditCard',
      component: CreditCardView,
      options: { animation: 'fade', headerShown: false } as ScreenProps,
    },
  ];

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {routes.map((route, index) => (
          <Stack.Screen
            key={index}
            name={route.name}
            component={route.component}
            options={route.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
