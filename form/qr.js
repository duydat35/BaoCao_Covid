import React, { useState } from "react";
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

export default function QRCode() {
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Quản lý mã QR</Text>
      
      <View style={styles.content}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Mã QR của tôi</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'data:image/png;base64,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',
        }}
      />
      <TouchableOpacity>
        <View style={{backgroundColor:'#30B55C',borderRadius:10,justifyContent:'center',paddingLeft:30,paddingRight:30,paddingTop:10,paddingBottom:10}}>
        <Text style={{color:'white',fontSize: 18}}>Sửa thông tin</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    height: '100%'
  },
  content: {
    // flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
    //  justifyContent: 'center',
   },
  tinyLogo: {
    width: 300,
    height: 300,
    marginBottom:30,
    marginTop:20,
  },
  checkbox: {
    alignSelf: "center",
  },
  text:{
    color:'#30B55C',
    fontSize:30,
    marginBottom:40,
    marginTop:50
  },
  text2:{
    color:'black',
    fontSize:14,
    marginBottom:20,
    marginLeft:30,
    marginRight:30,
   
  },
});