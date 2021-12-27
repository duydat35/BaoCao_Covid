
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { MainStackNavigator } from './form/stacknavigation';

import  BottomTabNavigator  from './form/bottomnavigation';


const App = ()  => {
  return (
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
  )
}

export default App;

