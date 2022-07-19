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
        <Text style = {mainstyles.basicbox}>CHANGE</Text>
      <View style = {styles2.container}>
        <Text numberOfLines={2} style = 
          {{fontSize: 30, color: 'black', fontStyle: 'italic',}}>Convert your image into a character!</Text>
        

          <Image source = {styles2.images}></Image> 
        <View style = {styles2.jpgcontainer}>
          <Image source = {styles2.images2}></Image> 
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
      height: '10%',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: 'rgb(240, 217, 215)',

      fontSize: 70,
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
        width: 250,
        height: 250,
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBE5fpU_8YDS6exV3FqObEOAaOkZLbM5Bwsg&usqp=CAU" },
  
    images2: { //이미지=
      width: 250,
      height: 250,
      uri : "https://www.mmlab-ntu.com/project/dualstylegan/img/example_c_s2.jpg"
  }
  });
  
