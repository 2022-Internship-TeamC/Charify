import * as React from 'react';
import {StyleSheet, Text, Button, View, 
  Image, SafeAreaView, Platform, StatusBar,Alert,TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Setting = ({navigation, route}) => {

    return (
        <SafeAreaView style={mainstyles.container}>
        <Text style={mainstyles.basicbox}>CHANGE</Text>
        <View style={styles2.container}>
          <Text numberOfLines={2} style={{ fontSize: 35, color: 'black', fontStyle: 'italic', }}>Setting</Text>
          <View style={styles2.blankcontainer}></View>

          <TouchableHighlight 

            activeOpacity={0.9}
            underlayColor='gray'
            onPress={() => navigation.navigate('Feedback')} >
          <View style={styles2.imagescontainer}>
            <Image source={styles2.feedbackimage}></Image>
            <Text style={{ fontSize: 25 }}>Feedback</Text>

          </View>
        </TouchableHighlight>

        <TouchableHighlight 

          activeOpacity={0.9}
          underlayColor='gray'
          onPress={() => navigation.navigate('AboutUs')} >
          <View style={styles2.imagescontainer}>
          <Image source={styles2.aboutusimage}></Image>
          <Text style={{ fontSize: 25 }}>AboutUs</Text>

          </View>
        </TouchableHighlight>


        <View style = {styles2.blankcontainer}></View>
                

             </View>
        </SafeAreaView>
    );
}





export default Setting;
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
      width: 300,
      height: 250,
      backgroundColor: 'rgb(242, 223, 202)',
    },
    feedbackimage: { 
      width: 300,
      height: 200,
      uri: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMDVfMTMg%2FMDAxNjA5ODI0NTQ1MzUz.UuDagv8nIFIt8VTiYS0UZpL_Y0ocL9EeSoI3nSjN0aAg.Mae94BwhqUhIo7DlxuvxX2yJu0TYsPWXtO29SOkMAS4g.PNG.ckmyun%2F52e7d1454253ad14f6da8c7dda79337c143adbe1534c704f752673d69348c55e_1280.png&type=a340"
  },
  aboutusimage: { //이미지2
    width: 300,
    height: 200,
    uri: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Fuser-110%2F24%2Fusers_user_people_group_team_about_us_participant_members_society_1-512.png&type=a340"
},

  });
