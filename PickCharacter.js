mport * as React from 'react';
import {StyleSheet, Text, Button, View, 
  Image, SafeAreaView, Platform, StatusBar,Alert,TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const PickCharacter = ({navigation, route}) => {

    return (
        <SafeAreaView style={mainstyles.container}>
        <Text style={mainstyles.basicbox}>CHANGE</Text>
        <View style={styles2.container}>
          <Text numberOfLines={2} style={{ fontSize: 20, color: 'black', fontStyle: 'italic', }}>Choose your character!</Text>
          <View style={styles2.blankcontainer}></View>

          <TouchableHighlight // 1번 사진 TouceableHighlight 적용! 색상 변경 해야함

            activeOpacity={0.9}
            underlayColor='gray'
            onPress={() => navigation.navigate('WelcomeFace')} >
          <View style={styles2.imagescontainer}>
            <Image source={styles2.belleimages}></Image>
            <Text style={{ fontSize: 15 }}>Belle</Text>

          </View>
        </TouchableHighlight>

        <TouchableHighlight // 1번 사진 TouceableHighlight 적용! 색상 변경 해야함

          activeOpacity={0.9}
          underlayColor='gray'
          onPress={() => navigation.navigate('WelcomeFace')} >
          <View style={styles2.imagescontainer}>
          <Image source={styles2.jasmineimages}></Image>
          <Text style={{ fontSize: 15 }}>Jasmine</Text>

          </View>
        </TouchableHighlight>

        <TouchableHighlight // 1번 사진 TouceableHighlight 적용! 색상 변경 해야함

activeOpacity={0.9}
underlayColor='gray'
onPress={() => navigation.navigate('WelcomeFace')} >
<View style={styles2.imagescontainer}>
<Image source={styles2.rapunzelimages}></Image>
<Text style={{ fontSize: 15 }}>Rapunzel</Text>

</View>
</TouchableHighlight>


<TouchableHighlight // 1번 사진 TouceableHighlight 적용! 색상 변경 해야함

activeOpacity={0.9}
underlayColor='gray'
onPress={() => navigation.navigate('WelcomeFace')} >
<View style={styles2.imagescontainer}>
<Image source={styles2.Christopherimages}></Image>
<Text style={{ fontSize: 15 }}>Christopher</Text>

</View>
</TouchableHighlight>

<TouchableHighlight // 1번 사진 TouceableHighlight 적용! 색상 변경 해야함

activeOpacity={0.9}
underlayColor='gray'
onPress={() => navigation.navigate('WelcomeFace')} >
<View style={styles2.imagescontainer}>
<Image source={styles2.Annaimages}></Image>
<Text style={{ fontSize: 15 }}>Anna</Text>

</View>
</TouchableHighlight>

<TouchableHighlight // 1번 사진 TouceableHighlight 적용! 색상 변경 해야함

activeOpacity={0.9}
underlayColor='gray'
onPress={() => navigation.navigate('WelcomeFace')} >
<View style={styles2.imagescontainer}>
<Image source={styles2.Elsaimages}></Image>
<Text style={{ fontSize: 15 }}>Elsa</Text>

</View>
</TouchableHighlight>
        <View style = {styles2.blankcontainer}></View>
                

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
      height: '10%',
      justifyContent: 'center',
      textAlign: 'center',

      backgroundColor: "rgb(252,233,212)",
      fontSize: 70,
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
      paddingBottom: 10,
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
      backgroundColor: 'rgb(242, 223, 202)',
    },
    belleimages: { //이미지1
      width: 120,
      height: 120,
      uri: "https://obj-sg.thewiki.kr/data/ebb2a8ebb2a8ebb2a82e6a7067.jpg"
  },
  jasmineimages: { //이미지2
    width: 120,
    height: 120,
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTVrCXIAefV4EEwnyq6lRXL92rltq5oZr0kQ&usqp=CAU"
},

rapunzelimages: { //이미지3
  width: 120,
  height: 120,
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwbk96vhS4EdQFM89Ypndpt3mc6-ct-24kw&usqp=CAU"
},


Christopherimages: { //이미지4
  width: 120,
  height: 120,
  uri: "http://file.instiz.net/data/file/20140209/1/d/e/1de90b105547adc4460ca9c1b1814e6b.jpg"
},

Annaimages: { //이미지5
  width: 120,
  height: 120,
  uri: "https://pbs.twimg.com/media/EQaqvRyUwAEyNeX.jpg"
},

Elsaimages: { //이미지6
  width: 120,
  height: 120,
  uri: "https://thumb.mt.co.kr/06/2014/03/2014031713347597426_1.jpg/dims/optimize/"
},
  });
