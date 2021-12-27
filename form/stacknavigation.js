import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./Home";
import DataCovid from "./DataCovid";
import Notifical from "./Notifical";
import NoticeDetails from "./NoticeDetails";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen  name="Home" component={Home}  
        options={{ headerShown: false, }}
      />
      <Stack.Screen name="Dữ liệu covid" component={DataCovid} />
      <Stack.Screen name="Thông báo" component={Notifical} />
      <Stack.Screen name="Chi tiết" component={NoticeDetails} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };