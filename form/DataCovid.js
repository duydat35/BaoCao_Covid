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

 const covidURL = 'https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST';

 const DataCovid  = () => {

    const [data,setData] = useState([]);
    const [nhiemBenh,setnhiemBenh] = useState([]);
    const [hoiPhuc,sethoiPhuc] = useState([]);
    const [tuVong,settuVong] = useState([]);
    const [dieuTri,setdieuTri] = useState([]);
    const [isLoading,setisLoading] = useState(true);

    useEffect(() => {
        fetch(covidURL)
        .then((res)=>res.json())
        .then((json) => {
            setData(json.detail)
            setnhiemBenh(json.infected)
            sethoiPhuc(json.recovered)
            settuVong(json.deceased)
            setdieuTri(json.treated)
        }).catch((err) => {
            console.log('loi: ',err);
        })
        .finally(() => setisLoading(false))
    })

    // renderItem = ({item}) => {

    //   return(
    //     <View style={styles.row_table}> 
    //           <Text style={[styles.text,{width: '28%'}]}>{item.name}</Text>
    //           <Text style={styles.text}>{item.cases}</Text>
    //           <Text style={styles.text}>{item.death}</Text>
    //           <Text style={[styles.text,{color: '#EF4444'}]}>+{item.casesToday}</Text>
    //     </View>
    //   );
    // }
  return(
    
    <ScrollView style={styles.container}>
      {isLoading ? <ActivityIndicator/>: (
      <View style={styles.main}>
        <View style={styles.top}>
          <Text style={styles.title}>Thống kê ca nhiếm: Toàn quốc</Text>
          <Text style={[styles.smalltext,{color: '#71717A',fontSize: 16}]}>Cập nhập lần cuối: 20/12/2021</Text>
          <View style={styles.dashboard}>
            <View style={[styles.card,{borderColor: '#EF4444'}]}>
              <View style={{marginBottom: 10,}}>
                <Text style={styles.smalltext}>Tổng ca nhiễm</Text>
                <Text style={[styles.title_card,{color: '#EF4444'}]}>{nhiemBenh}</Text>
                <Text style={styles.text_card}><Text style={{color: '#EF4444'}}>+15.236</Text> ca hôm nay</Text>
                <Text style={styles.text_card}><Text style={{color: '#EF4444'}}>+110.060</Text> 7 ngày qua</Text>
              </View>
              <View style={styles.main_card}>
                <View style={styles.flex_row}>
                  <FontAwesome5Icon name='info-circle' size={14}  color='#333' style={{position: 'absolute',}}></FontAwesome5Icon>
                  <Text style={styles.text_card}>Ca nhiễm/ngày</Text>
                <Text style={[styles.number_card,{backgroundColor: '#EF4444'}]}>18.028</Text>
                </View>
                <View style={styles.flex_row}>
                  <FontAwesome5Icon name='info-circle' size={14}  color='#333' style={{position: 'absolute',}}></FontAwesome5Icon>
                  <Text style={styles.text_card}>Tỷ lệ nhiễm</Text>
                <Text style={[styles.number_card,{backgroundColor: '#EF4444'}]}>2,13%</Text>
                </View>
                <View style={styles.flex_row}>
                  <FontAwesome5Icon name='info-circle' size={14}  color='#333' style={{position: 'absolute',}}></FontAwesome5Icon>
                  <Text style={styles.text_card}>Ca/100,000 dân</Text>
                <Text style={[styles.number_card,{backgroundColor: '#EF4444'}]}>2.132</Text>
                </View>
              </View>
            </View>
            
            <View style={[styles.card,{borderColor: '#6b7280'}]}>
              <View style={{marginBottom: 10,}}>
                <Text style={styles.smalltext}>Tổng ca tử vong</Text>
                <Text style={[styles.title_card,{color: '#6b7280'}]}>{tuVong}</Text>
                <Text style={styles.text_card}><Text style={{color: '#6b7280'}}>+248</Text> ca hôm nay</Text>
                <Text style={styles.text_card}><Text style={{color: '#6b7280'}}>+1.740</Text> 7 ngày qua</Text>
              </View>
              <View style={styles.main_card}>
                <View style={styles.flex_row}>
                  <FontAwesome5Icon name='info-circle' size={14}  color='#333' style={{position: 'absolute',}}></FontAwesome5Icon>
                  <Text style={[styles.text_card,{width:'65%'}]}>Tỷ lệ tử vong/ca nhiễm</Text>
                <Text style={[styles.number_card,{backgroundColor: '#6b7280'}]}>1,93%</Text>
                </View>
                <View style={styles.flex_row}>
                  <FontAwesome5Icon name='info-circle' size={14}  color='#333' style={{position: 'absolute',}}></FontAwesome5Icon>
                  <Text style={styles.text_card}>Ca/100,000 dân</Text>
                <Text style={[styles.number_card,{backgroundColor: '#6b7280'}]}>41</Text>
                </View>
              </View>
            </View>

            <View style={[styles.card,{borderColor: '#10b981'}]}>
              <View style={{marginBottom: 10,}}>
                <Text style={styles.smalltext}>Tổng ca hồi phục</Text>
                <Text style={[styles.title_card,{color: '#10b981'}]}>{hoiPhuc}</Text>
                <Text style={styles.text_card}><Text style={{color: '#10b981'}}>+1.645</Text> ca hôm nay</Text>
                <Text style={styles.text_card}><Text style={{color: '#10b981'}}>+43.738</Text> 7 ngày qua</Text>
              </View>
              <View style={styles.main_card}>
                <View style={styles.flex_row}>
                  <FontAwesome5Icon name='info-circle' size={14}  color='#333' style={{position: 'absolute',}}></FontAwesome5Icon>
                  <Text style={[styles.text_card,{width:'65%'}]}>Ca hồi phục/ngày</Text>
                <Text style={[styles.number_card,{backgroundColor: '#10b981'}]}>6.168</Text>
                </View>
                <View style={styles.flex_row}>
                  <FontAwesome5Icon name='info-circle' size={14}  color='#333' style={{position: 'absolute',}}></FontAwesome5Icon>
                  <Text style={[styles.text_card,{width:'65%'}]}>Tỷ lệ hồi phục/ca nhiễm</Text>
                <Text style={[styles.number_card,{backgroundColor: '#10b981'}]}>71,97%</Text>
                </View>
              </View>
            </View>

            <View style={[styles.card,{borderColor: '#f59e0b'}]}>
              <View style={{marginBottom: 10,}}>
                <Text style={styles.smalltext}>Tổng đang điều trị</Text>
                <Text style={[styles.title_card,{color: '#f59e0b'}]}>{dieuTri}</Text>
                <Text style={styles.text_card}><Text style={{color: '#f59e0b'}}>+14.002</Text> ca hôm nay</Text>
                <Text style={styles.text_card}><Text style={{color: '#f59e0b'}}>+80.477</Text> 7 ngày qua</Text>
              </View>
              <View style={styles.main_card}>
                <View style={styles.flex_row}>
                  <FontAwesome5Icon name='info-circle' size={14}  color='#333' style={{position: 'absolute',}}></FontAwesome5Icon>
                  <Text style={[styles.text_card,{width:'65%'}]}>Tỷ lệ đang điều trị/ca nhiễm</Text>
                <Text style={[styles.number_card,{backgroundColor: '#f59e0b'}]}>26,10%</Text>
                </View>
                <View style={styles.flex_row}>
                  <FontAwesome5Icon name='info-circle' size={14}  color='#333' style={{position: 'absolute',}}></FontAwesome5Icon>
                  <Text style={styles.text_card}>Ca/100,000 dân</Text>
                <Text style={[styles.number_card,{backgroundColor: '#f59e0b'}]}>557</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bot}> 
            <Text style={styles.title_bot}>Các tỉnh thành có ca nhiễm</Text>
            <View style={{marginBottom: 30,}}>
              <View style={styles.row_table}> 
                <Text style={[styles.text,{width: '28%'}]}>Khu Vực</Text>
                <Text style={styles.text}>Tổng ca nhiễm</Text>
                <Text style={styles.text}>Tổng tử vong</Text>
                <Text style={styles.text}>Hôm qua</Text>
              </View>
              {data.map((item)=>(
                <View style={styles.row_table}> 
                  <Text style={[styles.text,{width: '28%'}]}>{item.name}</Text>
                  <Text style={styles.text}>{item.cases}</Text>
                  <Text style={styles.text}>{item.death}</Text>
                  <Text style={[styles.text,{color: '#EF4444'}]}>+{item.casesToday}</Text>
              </View>
              ))}
            
                {/* <FlatList
                style={styles.list}
                data={data}
                renderItem={renderItem}
                // keyExtractor={item=>{item.id}}   
              />  */}
            </View>
        </View>
      </View>     
    )}   
    </ScrollView>
    
   );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // backgroundColor: 'red',
    },
    main: {
      flex: 1,
      // backgroundColor: 'blue',
    },
    top: {
      paddingBottom: 10,
    },
    title:{
      fontSize: 28,
      color: 'black',
      fontWeight: '600',
    },
    smalltext:{
      fontSize: 17,
      color: 'black',
      fontWeight: '500',
    }, 
    dashboard:{
      // backgroundColor: 'blue',
      marginTop: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      // alignItems: 'center',
    }, 
    card:{
      backgroundColor: 'white',
      width: '48.5%',
      padding: 15,
      marginBottom: 15,
      borderRadius: 10,
      borderTopWidth: 10,
      shadowColor: 'black',
      elevation: 8,
    },
    title_card:{
      fontSize: 34,
      color: 'black',
      fontWeight: '600',
      marginBottom: 4,
      marginTop: 4,
    },
    text_card:{
      fontSize: 14,
      color: '#444',
    },
    flex_row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 16,
      marginBottom: 4,
    },
    number_card: {
      color: 'white',
      fontSize: 13,
      padding: 3,
      borderRadius: 4,
    },
    bot: {
      backgroundColor: 'white',
      // height: 400,
      borderRadius: 10,
      padding: 5,
      marginBottom: 40,
    },
    title_bot: {
      color: 'black',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    row_table: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth:1,
      borderColor: '#ddd',
      paddingTop: 5,
      paddingBottom: 5,
    },
    text: {
      color: 'black',
      width: '22%',
      fontSize: 18,
      fontWeight: 'bold',
    },
    list: {
      marginBottom: 30,
    },
  });

 export default DataCovid;
 