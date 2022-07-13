import React, { useEffect } from 'react';
import 
{ StyleSheet, Text, Button, View, 
  Image, SafeAreaView, Platform, StatusBar }
from 'react-native';
import PickCharacter from './PickCharacter';
import { NavigationContainer } from '@react-navigation/native';

const WelcomeScreen = ({navigation}) => {
    return (
    <SafeAreaView style={mainstyles.container}>
      <View style = {mainstyles.basicbox}>
        <Text style = {mainstyles.text}>Change</Text>
        </View>
      <View style = {styles2.container}>
        <Text numberOfLines={2} style = 
          {{fontSize: 30, color: 'black', fontStyle: 'italic',}}>Convert your image into a character!</Text>
        

        <View style = {styles2.jpgcontainer}>
          <Image source = {styles2.images}></Image> 
          <Image source = {styles2.images}></Image>
          <Image source = {styles2.images}></Image>
        </View>
        <View style = {styles2.jpgcontainer}>
          <Image source = {styles2.images}></Image> 
          <Image source = {styles2.images}></Image>
          <Image source = {styles2.images}></Image>
        </View>
        <View style = {styles2.jpgcontainer}>
          <Image source = {styles2.images}></Image> 
          <Image source = {styles2.images}></Image>
          <Image source = {styles2.images}></Image>
        </View>

        <View style={[{ width: "90%", height: "20%",}]}>
          <Button
            title="CHANGE!"
            color="rgb(250, 209, 169)"
            onPress={() => navigation.navigate('PickCharacter')} 
          />
        </View>
       </View>                 
      <StatusBar style="auto" />
    </SafeAreaView>
    );
}

export default WelcomeScreen;

const mainstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    basicbox: { //Change 상단바
      width: '100%',
      height: '7%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(240, 217, 215)'
      
    },
    text: { //Change 상단바 텍스트
      fontSize: 35,
      color: 'black',
      fontStyle: 'italic',
      fontWeight: 'bold',
    }
  });
  
  const styles2 = StyleSheet.create({
    container: { // 메인 화면 container
      flex: 1,
      paddingHorizontal: '10%', 
      paddingVertical: '8%', 
      alignItems: "center", 
      justifyContent: "space-between",
      backgroundColor: 'rgb(252, 233, 212)',
    },
    
    jpgcontainer : { //이미지 container
      flexDirection: 'row',
      justifyContent: "space-between",
      paddingVertical: '5%',
      marginBottom: '5%',
    },
  
    images: { //이미지
        width: 150,
        height: 150,
        uri: "https://obj-sg.thewiki.kr/data/ebb2a8ebb2a8ebb2a82e6a7067.jpg"
    },
  
    images2: { //이미지
      width: 150,
      height: 150,
      uri : "http://img.sbs.co.kr/sbscnbc/upload/2014/02/13/10000414273.jpg"
  }
  });
  