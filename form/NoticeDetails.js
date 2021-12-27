
 import React, { useState, useEffect } from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Switch,
   Text,
   TextInput,
   TouchableHighlight,
   TouchableOpacity,
   useColorScheme,
   View,
   Image,
   FlatList,
   SectionList,
   ImageBackgroundComponent,
   ImageBackground,
   Pressable,
   ActivityIndicator,
 } from 'react-native';
 import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

 const NoticeDetails  = ({route}) => {
    const {name,date,time,title,content} = route.params;
   return(
        <ScrollView style={styles.container}>
            <View style={styles.top}>
                <View style={styles.left}>
                    <Image
                    style={styles.img}
                    source= {require('../image/pccovid-logo.png')} 
                    />
                </View>
                <View style={styles.right}>
                    <Text style={styles.name}>{name}</Text>
                    <View style={{flexDirection: 'row',}}>
                        <Text style={styles.text_time}>{date}</Text>
                        <Text style={styles.text_time}> - {time}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bot}>
                <Text style={[styles.text,{marginBottom: 10,}]}> {title} </Text>
                <Text style={styles.text}> {content} </Text>
            </View>
        </ScrollView>
   );
 };
 
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    top: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
    },
    left: {
        width: '20%',
        alignItems: 'center',
        // backgroundColor: 'blue',
    },
    img: {
      height: 55,
      width:55,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 50,
    },
    right: {
        flex: 1,
        // backgroundColor: 'pink',
        paddingLeft: 8,
    },
    name: {
        fontSize: 22,
        fontWeight: '700',
        color: 'black',
    },
    text_time:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    bot: {
        paddingTop: 10,
    },
    text: {
      fontSize: 19,
      color: 'black',
    },
 });
 
 
 export default NoticeDetails;
 