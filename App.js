
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { MainStackNavigator } from './form/stacknavigation';

import  BottomTabNavigator  from './form/bottomnavigation';

import { StackNavigator } from './form/stack';

const App = ()  => {
  return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
  )
}

export default App;

