import React, { useState } from 'react';
import 
{ StyleSheet, Text, Button, View, 
  Image, SafeAreaView, Platform, StatusBar,TouchableHighlight }
from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const PickCharacter = ({navigation, route}) => {

    return (
        <SafeAreaView style={mainstyles.container}>
            <View style = {mainstyles.basicbox}>
                 <Text style = {mainstyles.text}>Change</Text>
            </View>
            <View style = {styles2.container}>
                 <Text numberOfLines={2} style = 
                    {{fontSize: 30, color: 'black', fontStyle: 'italic',}}>Choose your character!</Text>
                 <View style = {styles2.blankcontainer}></View>
                 
                 <TouchableHighlight // 1번 사진 TouceableHighlight 적용! 색상 변경 해야함
                  activeOpacity={0.9}
                  underlayColor='gray'
                  onPress = {() => {alert('Pressed!')}}>
                    <View style = {styles2.imagescontainer}>
                        <Image source = {styles2.images}></Image>
                        <Text style = {{fontSize: 15}}>Belle</Text>
                    </View>
                 </TouchableHighlight>
                 <View style = {styles2.imagescontainer}>
                     <Image source = {styles2.images}></Image>
                     <Text style = {{fontSize: 15}}>Belle</Text>
                 </View>
                 <View style = {styles2.imagescontainer}>
                     <Image source = {styles2.images}></Image>
                     <Text style = {{fontSize: 15}}>Belle</Text>
                 </View>
                 <View style = {styles2.imagescontainer}>
                     <Image source = {styles2.images}></Image>
                     <Text style = {{fontSize: 15}}>Belle</Text>
                 </View>
                 <View style = {styles2.imagescontainer}>
                     <Image source = {styles2.images}></Image>
                     <Text style = {{fontSize: 15}}>Belle</Text>
                 </View>
                 <View style = {styles2.imagescontainer}>
                     <Image source = {styles2.images}></Image>
                     <Text style = {{fontSize: 15}}>Belle</Text>
                 </View>
                 <View style = {styles2.imagescontainer}>
                     <Image source = {styles2.images}></Image>
                     <Text style = {{fontSize: 15}}>Belle</Text>
                 </View>
                 <View style = {styles2.imagescontainer}>
                     <Image source = {styles2.images}></Image>
                     <Text style = {{fontSize: 15}}>Belle</Text>
                 </View>
                 <View style = {styles2.imagescontainer}>
                     <Image source = {styles2.images}></Image>
                     <Text style = {{fontSize: 15}}>Belle</Text>
                 </View>

                 <View style = {styles2.blankcontainer}></View>
                 

                 <View style={[{ width: "90%", height: "20%",}]}>
                    <Button
                      title="Choose your image!"
                      color="rgb(250, 209, 169)" />
                    </View>

             </View>


        </SafeAreaView>

    );
}

export default PickCharacter;

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
      flexDirection: 'row',
      flexWrap: "wrap",
      justifyContent: 'center',
      paddingVertical: '8%', 
      backgroundColor: 'rgb(252, 233, 212)',
    },

    blankcontainer: {
      width: '100%',
      height: 40,
    },

    imagescontainer: {
      alignItems: 'center',
      width: 135,
      height: 190,
      paddingHorizontal: 5,
      paddingVertical: 5,
      backgroundColor: 'rgb(242, 223, 202)',
    },

    images: { //이미지
      width: 130,
      height: 130,
      uri: "https://obj-sg.thewiki.kr/data/ebb2a8ebb2a8ebb2a82e6a7067.jpg"
  },
  });