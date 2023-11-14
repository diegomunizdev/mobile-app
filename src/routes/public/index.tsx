import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from '../../components/views/home/HomeView';

const Stack = createNativeStackNavigator();

export default function PublicRoutes() {
  const routes = [
    {
      name: 'home',
      component: HomeView,
      options: { headerShown: false },
    },
  ];

  return (
    <NavigationContainer>
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
