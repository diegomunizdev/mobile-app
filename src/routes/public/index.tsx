import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from '../../components/views/home/HomeView';
import CreditCardView from '../../components/views/cards/creditCard/CreditCardView';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

export default function PublicRoutes() {
  const routes = [
    {
      name: 'home',
      component: HomeView,
      options: { headerShown: false } as NativeStackNavigationOptions,
    },
    {
      name: 'creditCard',
      component: CreditCardView,
      options: { headerShown: false } as NativeStackNavigationOptions,
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
