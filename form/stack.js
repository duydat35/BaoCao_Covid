import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from "./login";
import Home from "./Home";
import {BottomTabNavigator} from "./bottomnavigation";


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen 
      name="Đăng nhập" component={Login} 
      options={{ headerShown: false, }}
      />
      <Stack.Screen 
      name="Giao diện" component={BottomTabNavigator} 
      options={{ headerShown: false, }}
      />
    </Stack.Navigator>
  );
}



export {StackNavigator};

