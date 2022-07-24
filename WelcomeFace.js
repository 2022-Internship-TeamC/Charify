import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View,Image,SafeAreaView,Alert, Button, Platform, TouchableOpacity} from "react-native";
import * as ImagePicker from 'expo-image-picker';
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
    <View style={styles.container}>
   
      

      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>

       <Button
                 title="Let's see your Disney Face"
                color="black"
                onPress={() => navigation.navigate('WelcomeDisney')} 
              />
              
    </View>

    {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 , alignItems: 'center',
    justifyContent: 'center',}} />}
    </SafeAreaView>
  );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(240, 217, 215)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: '100%',
    height: '10%',
    backgroundColor: 'rgb(240, 217, 215)',

    color: "black",
    fontSize: 70,
    fontWeight: "bold",
    fontStyle: 'italic',
    textAlign: "center",
        },
  button: {
    backgroundColor: 'pink',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  logo: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
});
