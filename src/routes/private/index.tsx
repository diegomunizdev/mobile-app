import React from 'react';
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeView from '../../components/views/home/HomeView';
import CreditCardView from '../../components/views/cards/creditCard/CreditCardView';
import AccountView from '../../components/views/account/AccountView';
import MyCreditCardsView from '../../components/views/cards/creditCard/MyCreditCardsView';
import AvailableBalanceView from '../../components/views/availableBalance/AvailableBalanceView';

const Stack = createNativeStackNavigator();

export default function PrivateRoutes() {
  const defaultRouteOptions = { headerShown: false } as NativeStackNavigationOptions;

  const routes = [
    {
      name: 'home',
      component: HomeView,
      options: defaultRouteOptions,
    },
    {
      name: 'account',
      component: AccountView,
      options: defaultRouteOptions,
    },
    {
      name: 'availableBalance',
      component: AvailableBalanceView,
      options: defaultRouteOptions,
    },
    {
      name: 'creditCard',
      component: CreditCardView,
      options: defaultRouteOptions,
    },
    {
      name: 'myCreditCard',
      component: MyCreditCardsView,
      options: defaultRouteOptions,
    },
  ];

  return (
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
  );
}
