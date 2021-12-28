import React from "react";
import { View, Text, StyleSheet } from 'react-native'

import Icon2 from 'react-native-vector-icons/FontAwesome';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigatorHome,NavigatorNotifical,NavigatorNews } from "./stacknavigation";


import Home from "./Home";

const Tab = createBottomTabNavigator();

const color1="black"; // màu hienr thị khi được chọn
const color2="gray"; // màu hiển thị không được chọn 

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
    initialRouteName = {'Trang chủ'}
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: {
          position: "absolute",
          bottom: 10,
          // bottom: 250,
          left: 20,
          right: 20,
          backgroundColor: "white",
          borderRadius: 10,
          height: 60,
          ...styles.shadow,
    }}}>
      <Tab.Screen 
       name="Nội dung hông báo" 
       component={NavigatorNotifical}
       options={{
         tabBarIcon: ({focused})=>(
            <View style={styles.itemTab}>
            <Icon2 style={{color: focused? "#DC143C":color2}} name="bell-o" size={25}/>
            <Text style={[styles.itemTab_text, {color: focused? "#DC143C":color2}]}>Thông báo</Text>
            </View>
        )}}
      />
      <Tab.Screen 
      name="Trang chủ" 
      component={NavigatorHome} 
      options={{
        tabBarIcon: ({focused})=>(
            <View style={[styles.itemTab, styles.itemTab2]}>
            <Icon2 style={{color: "white"}} name="home" size={40} />
            <Text style={[styles.itemTab_textMain,{color: focused? "#30B55C":color2}]}>Trang chủ</Text>
            </View>
        )}}
      />
      <Tab.Screen 
      name="Tin tức" 
      component={NavigatorNews} 
      options={{
        tabBarIcon: ({focused})=>(
           <View style={styles.itemTab}>
           <Icon2 style={{color: focused? color1:color2}} name="newspaper-o" size={25}/>
           <Text style={[styles.itemTab_text, {color: focused? color1:color2}]}>Tin tức</Text>
           </View>
       )}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    elevation: 8,
  },
  itemTab: {
    justifyContent: "center",
    alignItems: "center",
  },
  itemTab2: {
      //width: 90,
     //height: 90,
      borderWidth: 1,
      position: "absolute",
      bottom: 34,
      backgroundColor: "#30B55C",
      borderColor: "#30B55C",
      borderRadius: 50,
      // them
      width: 70,
      height: 70,
      elevation: 6,
  },
  itemTab_text: {
      fontSize: 15,
  },
  itemTab_textMain: {
    position: "absolute",
    color: "#30B55C",
    bottom: -28,
    width: 80,
    textAlign: "center",
    fontSize: 16,
  },
});

export { BottomTabNavigator };






