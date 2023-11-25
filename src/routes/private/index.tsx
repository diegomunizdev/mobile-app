import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenProps } from 'react-native-screens';

import HomeView from '../../components/views/home/HomeView';
import CreditCardView from '../../components/views/cards/creditCard/CreditCardView';
import AccountView from '../../components/views/account/AccountView';
import MyCreditCardsView from '../../components/views/cards/creditCard/MyCreditCardsView';
import AvailableBalanceView from '../../components/views/availableBalance/AvailableBalanceView';
import HeaderRightAtom from '../../components/atoms/headerView/HeaderRightAtom';

const Stack = createNativeStackNavigator();

export default function PrivateRoutes() {
  const routerOptionsDefault = {
    animation: 'fade',
    headerShadowVisible: false,
    headerTitle: '',
    headerLeft: () => <HeaderRightAtom />,
  };

  const routes = [
    {
      name: 'home',
      component: HomeView,
      options: { ...routerOptionsDefault, headerShown: false } as ScreenProps,
    },
    {
      name: 'account',
      component: AccountView,
      options: { ...routerOptionsDefault } as ScreenProps,
    },
    {
      name: 'availableBalance',
      component: AvailableBalanceView,
      options: { ...routerOptionsDefault } as ScreenProps,
    },
    {
      name: 'creditCard',
      component: CreditCardView,
      options: { ...routerOptionsDefault } as ScreenProps,
    },
    {
      name: 'myCreditCard',
      component: MyCreditCardsView,
      options: { ...routerOptionsDefault } as ScreenProps,
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
