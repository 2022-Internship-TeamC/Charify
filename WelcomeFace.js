import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {StyleSheet, Text, View,Image,SafeAreaView,Alert, Button, Platform } from "react-native";
import { NavigationContainer } from '@react-navigation/native';


export default function WelcomeFace({navigation}) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView style ={styles.container}>
    
       
     
        <Text style={styles.title}>CHANGE</Text>
              <Button
                title="Upload Your Image"
                color="rgb(250, 209, 169)"
                onPress={pickImage}
              />
                 <Button
                 title="Let's see your Disney Face"
                color="rgb(250, 209, 169)"
                onPress={() => navigation.navigate('WelcomeDisney')} 
              />
            
      {image && <Image source={{ uri: image }} style={{ width: 350, height: 350 }} />}
    
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: 'rgb(252,233,212) ',
      alignItems:"center",
      justifyContent: "space-between",

    },

    title: {
      marginTop: 0.001,
      width: '100%',
      height: '10%',
      backgroundColor: 'rgb(240, 217, 215)',

      top: '0.00000000002%',
      color: "black",
      fontSize: 70,
      fontWeight: "bold",
      fontStyle: 'italic',
      textAlign: "center",
    },
    image: {
      /*resizeMode: "cover",*/
      /*width: '0.5%',
      height: '0.5%',*/
      resizeMode: 'contain',

      justifyContent: "center",

    }
});
