import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./Home";
import DataCovid from "./DataCovid";
import Notifical from "./Notifical";
import NoticeDetails from "./NoticeDetails";
import News from "./tintuc";
import NewsDetails from "./chitiettintuc";
import Tutorial from "./huongdan";
import QRCode from "./qr";
import Declare from "./khaibao"


const Stack = createNativeStackNavigator();

const NavigatorHome = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen  
      name="Home" component={Home}  
      options={{ headerShown: false, }}
      />
      <Stack.Screen 
      name="Dữ liệu covid" component={DataCovid} 
      />
      <Stack.Screen 
      name="Hướng dẫn" component={Tutorial} 
      options={{ headerShown: false, }}
      />
      <Stack.Screen 
      name="QR của tôi" component={QRCode} 
      />
      <Stack.Screen 
      name="Khai báo y tế" component={Declare} 
      />
    </Stack.Navigator>
  );
}

const NavigatorNotifical = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Thông báo" component={Notifical} />
      <Stack.Screen name="Chi tiết thông báo" component={NoticeDetails} />
    </Stack.Navigator>
  );
}

const NavigatorNews = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false, 
    }}
    >
      <Stack.Screen name="Tin tức" component={News} />
      <Stack.Screen name="Chi tiết tin tức" component={NewsDetails} />
    </Stack.Navigator>
  );
}

export { NavigatorHome,NavigatorNotifical,NavigatorNews};

