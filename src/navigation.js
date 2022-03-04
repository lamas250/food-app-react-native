import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/store';

import RestaurantDetails from './pages/RestaurantDetails';
import Home from './pages/Home';

const store = configureStore();

export default function RootNavigation(){
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false
  };

  return (
    <ReduxProvider store={store}>
       <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
          <Stack.Screen component={Home} name='Home' />
          <Stack.Screen component={RestaurantDetails} name='RestaurantDetails' />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  )
}