import React, { useState } from "react";
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';

import { CheckBox } from 'react-native-elements'
export default function Login({navigation}) {
const [checked, setchecked] = useState(false)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thông tin</Text>
      <View style={styles.content}>
      <Text style={styles.text2}>Vui lòng nhập số điện thoại để đăng ký/đăng nhập ứng dụng PC/Covid</Text>
      <TextInput
        style={{
         height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 50,
          marginBottom:20,
          width:300,
          paddingLeft:10,
        }}
        placeholder="Nhập số điện thoại"
        keyboardType = 'numeric'
      />
      <View style={{flexDirection:'row',marginLeft:20,marginRight:20, marginBottom:20,}}>
        
      <CheckBox
      title='Xác nhận bạn đã đọc và đồng ý với điều khoản sử dụng'
          checked={checked}
          onPress={() => setchecked(!checked)}
          style={styles.checkbox}
        />
      
      </View>
      <TouchableOpacity onPress= {()=>navigation.navigate('Giao diện')}>
        <View style={{backgroundColor:'green',width:200,height:40,borderRadius:10,justifyContent:'center',paddingLeft:70}}>
        <Text style={{color:'white'}}>Tiếp tục</Text>
        </View>
       
        </TouchableOpacity>
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  checkbox: {
    alignSelf: "center",
  },
  text:{
    color:'green',
    fontSize:30,
    marginBottom:60,
  },
  text2:{
    color:'black',
    fontSize:14,
    marginBottom:20,
    marginLeft:30,
    marginRight:30,
   
  },
});