
import React from 'react';
 import {
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
   Image,
 } from 'react-native';

 const Data = [
   {
     'id': 1,
     'name': 'PC-Covid',
     'date': '07/11/2021',
     'time': '15:22',
     'title': 'Bạn đã cập nhật số điện thoại thành công',
     'content': 'Số điện thoại đã đăng ký: 0923***321',
   },
   {
    'id': 2,
    'name': 'PC-Covid',
    'date': '08/11/2021',
    'time': '20:01',
    'title': 'Bạn đã được tiêm mũi một',
    'content': 'Bã đã được tiêm mũi 1 vaccine VeroCell tại thành phố Vinh, tỉnh Nghệ An. Vào mã QR để kiểm tra thông tin',
  },
  {
   'id': 3,
   'name': 'PC-Covid',
   'date': '13/12/2021',
   'time': '09:30',
   'title': 'Bạn đã được tiêm mũi hai',
   'content': 'Bã đã được tiêm hai một vaccine Pfizer tại thành phố Vinh, tỉnh Nghệ An. Vào mã QR để kiểm tra thông tin',
 },
 ]

 const Notifical  = ({navigation}) => {
   return(
        <View style={styles.container}>
            {Data.map((item) => (
            <TouchableOpacity style={styles.noti} onPress={()=>navigation.navigate('Chi tiết thông báo',{
              name: item.name,
              date: item.date,
              time: item.time,
              title: item.title,
              content: item.content,
            })}> 
              <View style={styles.left}>
                <Image
                style={styles.img}
                source= {require('../image/pccovid-logo.png')} 
                />
              </View>
              <View style={styles.content}>
                <View style={{height: 55}}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.text}>{item.date}</Text>
                </View>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            </TouchableOpacity>
            ))}
        </View>
   );
 };
 
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
    },
    noti: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: '#ddd',
      paddingTop: 10,
      paddingBottom: 10,
    },
    left: {
      width: '20%',
      alignItems: 'center',
    },
    img: {
      height: 55,
      width:55,
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 50,
    },  
    content: {
      minHeight: 80,
      flex: 1,
      paddingRight: 8,
    },
    name: {
      fontSize: 20,
      fontWeight: '700',
      color: 'black',
    },
    text: {
      fontSize: 18,
      fontWeight: '500',
    },
 });
 
 
 export default Notifical;
 