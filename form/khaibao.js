import React, { useState } from "react";
import { StyleSheet, Text, View,TextInput,TouchableOpacity, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RadioButton } from 'react-native-paper';

export default function Declare() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Nam', value: 'nam'},
    {label: 'Nữ', value: 'nữ'}
  ]);
  // ngay
  const [openday, setOpenday] = useState(false);
  const [valueday, setValueday] = useState(null);
  const [itemsday, setItemsday] = useState([
    {label: '01', value: '01'},
    {label: '02', value: '02'}
  ]);
  // thang
  const [openmoth, setOpenmonth] = useState(false);
  const [valuemonth, setValuemonth] = useState(null);
  const [itemsmonth, setItemsmonth] = useState([
    {label: '01', value: '01'},
    {label: '02', value: '02'}
  ]);
    // nam
    const [openyear, setOpenyear] = useState(false);
    const [valueyear, setValueyear] = useState(null);
    const [itemsyear, setItemsyear] = useState([
      {label: '2001', value: '2001'},
      {label: '2002', value: '2002'}
    ]);
    // tinh
    const [opentinh, setOpentinh] = useState(false);
    const [valuetinh, setValuetinh] = useState(null);
    const [itemstinh, setItemstinh] = useState([
      {label: 'Bac Ninh', value: 'Bac Ninh'},
      {label: 'Thai Nguyen', value: 'Thai Nguyen'}
    ]);
    // huyen
    const [openhuyen, setOpenhuyen] = useState(false);
    const [valuehuyen, setValuehuyen] = useState(null);
    const [itemshuyen, setItemshuyen] = useState([
      {label: 'Que Vo', value: 'Que Vo'},
      {label: 'Loc Xuong', value: 'Loc Xuong'}
    ]);
    // xa
    const [openxa, setOpenxa] = useState(false);
    const [valuexa, setValuexa] = useState(null);
    const [itemsxa, setItemsxa] = useState([
      {label: 'Dao Vien', value: 'Dao Vien'},
      {label: 'Khai Nguyen', value: 'Khai Nguyen'}
    ]);
    // radio
    const [checked, setChecked] = React.useState('first');
    const [checkedthree, setCheckedthree] = React.useState('three');
    const [checkedfive, setCheckedfive] = React.useState('five');
  return (
    
       <View style={styles.container}>
         <ScrollView>
         <Text style={styles.text}>Khai báo y tế</Text>
      
      <View style={styles.container}>
        <View style={{flex:1,}}>
        <Text style={{fontSize:14,color:'red',margin:10,}}>Khuyến cáo:Khai báo thông tin sai là vi phạm pháp luật Việt Nam và
                     có thể xử lý hình sự
      </Text>
        </View>
     
      <View>
        <Text>Thông tin cá nhân *</Text>
        <TextInput
        style={{height: 40,width:360,borderWidth:1,borderColor:'gray',borderRadius:8,marginBottom:10,paddingLeft:10}}
        placeholder="Họ và tên(ghi chữ IN HOA)"
      />
      <Text>Giới tính *</Text>
       <DropDownPicker
       style={{height: 40,width:360,borderWidth:1,borderColor:'gray',borderRadius:8,flexDirection:'row',padding:3,marginBottom:10,}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="Giới tính"
      dropDownContainerStyle={{
        backgroundColor: "rgb(235,248,238)",
        elevation: 10,
      }}
    
    />
      <Text>Ngày tháng năm sinh *</Text>
    <View style={{flexDirection:'row',justifyContent:"space-between"}}>
      <View>
      <DropDownPicker
       style={{height: 40,width:90,marginBottom:10,borderWidth:1,borderColor:'gray',borderRadius:8,flexDirection:'row',padding:3}}
      open={openday}
      value={valueday}
      items={itemsday}
      setOpen={setOpenday}
      setValue={setValueday}
      setItems={setItemsday}
      placeholder="Ngày"
      dropDownContainerStyle={{
        backgroundColor: "rgb(235,248,238)",
        elevation: 10,
        width:80,
      }}
    />
      </View>
   <View>
   <DropDownPicker
       style={{height: 40,width:100,marginBottom:10,borderWidth:1,borderColor:'gray',borderRadius:8,flexDirection:'row',padding:3}}
      open={openmoth}
      value={valuemonth}
      items={itemsmonth}
      setOpen={setOpenmonth}
      setValue={setValuemonth}
      setItems={setItemsmonth}
      placeholder="Tháng"
      dropDownContainerStyle={{
        backgroundColor: "rgb(235,248,238)",
        elevation: 10,
        width:80,
      }}
    />
   </View>
     <View>
     <DropDownPicker
      style={{height: 40,width:90,marginBottom:10,borderWidth:1,borderColor:'gray',borderRadius:8,flexDirection:'row',padding:3}}
      open={openyear}
      value={valueyear}
      items={itemsyear}
      setOpen={setOpenyear}
      setValue={setValueyear}
      setItems={setItemsyear}
      placeholder="Năm"
      dropDownContainerStyle={{
        backgroundColor: "rgb(235,248,238)",
        elevation: 10,
        width:80,
      }}
    /></View>    
     
    </View>
    <TextInput
        style={{height: 40,width:360,borderWidth:1,borderColor:'gray',borderRadius:8,marginBottom:10,paddingLeft:10}}
        placeholder="CMND/CCCD/Hộ chiếu"
      />
      <View>
      <Text>Thông tin cá nhân khác *</Text>
      <TextInput
        style={{height: 40,width:360,borderWidth:1,borderColor:'gray',borderRadius:8,marginBottom:10,paddingLeft:10}}
        placeholder="Số thẻ bảo hiểm y tế"
      />
         <TextInput
        style={{height: 40,width:360,borderWidth:1,borderColor:'gray',borderRadius:8,marginBottom:10,paddingLeft:10}}
        placeholder="Email"
      />
         <TextInput
        style={{height: 40,width:360,borderWidth:1,borderColor:'gray',borderRadius:8,marginBottom:10,paddingLeft:10}}
        placeholder="Quốc tịch"
      />
      </View>

      <View>
        <Text>Nơi cư trú *</Text>
        <DropDownPicker
      style={{height: 40,width:360,marginBottom:10,borderWidth:1,borderColor:'gray',borderRadius:8,flexDirection:'row',padding:3}}
      open={opentinh}
      value={valuetinh}
      items={itemstinh}
      setOpen={setOpentinh}
      setValue={setValuetinh}
      setItems={setItemstinh}
      placeholder="Tỉnh thành"
      dropDownContainerStyle={{
        backgroundColor: "rgb(235,248,238)",
        elevation: 10,
      }}
    />
      <DropDownPicker
      style={{height: 40,width:360,marginBottom:10,borderWidth:1,borderColor:'gray',borderRadius:8,flexDirection:'row',padding:3}}
      open={openhuyen}
      value={valuehuyen}
      items={itemshuyen}
      setOpen={setOpenhuyen}
      setValue={setValuehuyen}
      setItems={setItemshuyen}
      placeholder="Quận huyện"
      dropDownContainerStyle={{
        backgroundColor: "rgb(235,248,238)",
        elevation: 10,
      }}
    />
      <DropDownPicker
      style={{height: 40,width:360,marginBottom:10,borderWidth:1,borderColor:'gray',borderRadius:8,flexDirection:'row',padding:3,marginBottom:30}}
      open={openxa}
      value={valuexa}
      items={itemsxa}
      setOpen={setOpenxa}
      setValue={setValuexa}
      setItems={setItemsxa}
      placeholder="Phường xã"
      dropDownContainerStyle={{
        backgroundColor: "rgb(235,248,238)",
        elevation: 10,
      }}
    />
      </View>

      <View style={{backgroundColor:'rgb(235,248,238)',borderRadius:10,marginBottom:20}}>
        <Text>Trong vòng 14 ngày qua Anh/Chị có tiếp xúc với ai không?*</Text>
        
        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <View style={{margin:6}}><Text>Có</Text></View>
        
        <RadioButton
        value="first"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
      />
          <View style={{margin:6}}><Text>Không</Text></View>
      <RadioButton
        value="second"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')}
      />
    
        </View>
      </View>

      
      <View style={{backgroundColor:'rgb(235,248,238)',borderRadius:10,marginBottom:20}}>
        <Text>Trong vòng 14 ngày qua Anh/Chị có tiếp xúc với ai không?*</Text>
        
        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <View style={{margin:6}}><Text>Có</Text></View>
        
        <RadioButton
        value="three"
        status={ checkedthree === 'three' ? 'checked' : 'unchecked' }
        onPress={() => setCheckedthree('three')}
      />
          <View style={{margin:6}}><Text>Không</Text></View>
      <RadioButton
        value="four"
        status={ checkedthree === 'four' ? 'checked' : 'unchecked' }
        onPress={() => setCheckedthree('four')}
      />
    
        </View>
      </View>

      
      <View style={{backgroundColor:'rgb(235,248,238)',borderRadius:10,marginBottom:20}}>
        <Text>Trong vòng 14 ngày qua Anh/Chị có các dấu hiệu ho, sốt không?*</Text>
        
        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <View style={{margin:6}}><Text>Có</Text></View>
        
        <RadioButton
        value="five"
        status={ checkedfive === 'five' ? 'checked' : 'unchecked' }
        onPress={() => setCheckedfive('five')}
      />
          <View style={{margin:6}}><Text>Không</Text></View>
      <RadioButton
        value="six"
        status={ checkedfive === 'six' ? 'checked' : 'unchecked' }
        onPress={() => setCheckedfive('six')}
      />
    
        </View>
      </View>

     </View>
      </View>
      <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',marginBottom:120}}>
        <View style={{backgroundColor:'#30B55C',borderRadius:10,justifyContent:'center',paddingLeft:30,paddingRight:30,paddingTop:10,paddingBottom:10}}>
        <Text style={{color:'white'}}>Gửi tờ khai</Text>
        </View>
       
        </TouchableOpacity>
         </ScrollView>
     
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
//    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
  },
  tinyLogo: {
    width: 200,
    height: 200,
    marginBottom:20,
  },
  checkbox: {
    alignSelf: "center",
  },
  text:{
    color:'#30B55C',
    fontSize:30,
    marginBottom:5,
    marginTop:50,
    textAlign:'center'
  },
  text2:{
    color:'black',
    fontSize:14,
    marginBottom:20,
    marginLeft:30,
    marginRight:30,
   
  },
});
