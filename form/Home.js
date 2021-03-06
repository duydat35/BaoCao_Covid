/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
   Image,
 } from 'react-native';
 import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
// https://lh3.googleusercontent.com/proxy/sVyDvPsVxW8s4NODnkmMxA4Mo7Ir_AGSAOhAesgzBwd8hRoCFFdhR-XVhCVXUX4rQYoj8IUHfGzsY1Mzf0foMcZfiHyLn2XMnVape_l59suSIoKiIGMefyKEOAtImRqCW3MGZxI7rKKOLsq3JoyZtQ
 const Home  = ({navigation}) => {
   return(
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.top}>
                    <Image
                        style={styles.imgCovid}
                        source={{uri: 'https://pccovid.gov.vn/WebPcCovid/clip/pccovid-clip.png'}}
                    />
                </View>
                <View style={styles.bot}>
                    <TouchableOpacity style={styles.box} onPress= {()=>navigation.navigate('QR của tôi')}>
                        {/* <Image
                            style={styles.img}
                            source={require('../image/Personal-QR.png')} 
                        /> */}
                        <FontAwesome5Icon name='qrcode' size={50}  color='#19a2e0' style={styles.img}></FontAwesome5Icon>
                        <Text style={[styles.text,{marginTop:0}]}>Mã QR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress= {()=>navigation.navigate('Khai báo y tế')}> 
                        <FontAwesome5Icon name='notes-medical' size={50}  color='#fe8700' style={styles.img}></FontAwesome5Icon>
                        <Text style={[styles.text,{marginTop:0}]}>Khai báo y tế</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress= {()=>navigation.navigate('Hướng dẫn')}>
                        <FontAwesome5Icon name='book-open' size={50}  color='#30B55C' style={styles.img}></FontAwesome5Icon>
                        <Text style={[styles.text,{marginTop:0}]}>Hướng dẫn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box}>
                        <FontAwesome5Icon name='map-marker-alt' size={50}  color='#f8b123' style={styles.img}></FontAwesome5Icon>
                        <Text style={[styles.text,{marginTop:0}]}>Nơi đã đến</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress= {()=>navigation.navigate('Dữ liệu covid')}>
                        <FontAwesome5Icon name='chart-bar' size={50}  color='#448aff' style={styles.img}></FontAwesome5Icon>
                        <Text style={[styles.text,{marginTop:0}]}>Dữ liệu covid-19</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box}>
                        <FontAwesome5Icon name='comment-dots' size={50}  color='#ef6188' style={styles.img}></FontAwesome5Icon>
                        <Text style={[styles.text,{marginTop:0}]}>Phản ánh</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
   );
 };
 
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        // paddingTop: 20,
        // paddingBottom: 20,
        backgroundColor: '#F2F2F2',
    },
    main: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 30,
    },
    top: {
        // flex: 1,
        // backgroundColor: 'red',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '40%',
    },
    bot: {
        // flex: 1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        // backgroundColor: 'blue',
        height: '60%',
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        // alignItems: 'center',
        flexWrap: 'wrap',
    },
    imgCovid: {
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    box:{
        // backgroundColor: 'red',
        height: 110,
        width: '26%',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    img:{
        height: 60,
        width: 60,
        // backgroundColor: 'blue',
        textAlign: 'center',
    },
    text: {
      fontSize: 18,  
      textAlign: 'center',
    },
 });
 
 
 export default Home;
 