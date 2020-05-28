import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Cart from '../pages/Cart';
import Home from '../pages/Home';

import Logo from '../assets/logo.png';
import { Image } from 'react-native';

const AppStack = createStackNavigator();

const routes = [
  { title: 'Home', component: Home },
  { title: 'Cart', component: Cart },
];

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator>
      {routes.map((route, i) => (
        <AppStack.Screen
          key={i}
          component={route.component}
          name={route.title}
          options={{
            headerTitleAlign: 'center',
            headerTransparent: true,
            headerTitle: () => <Image source={Logo} />,
          }}
        />
      ))}
    </AppStack.Navigator>
  );
};

export default AppRoutes;
