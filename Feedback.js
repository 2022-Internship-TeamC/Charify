import React from 'react';
import { SafeAreaView, StyleSheet, TextInput,Share, View,Text,Image,Alert, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Feedback = ({navigation}) => {
  
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: '',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  

  return (
    <SafeAreaView style ={styles.container}>
    <Text style={styles.title}>CHANGE</Text>
      <TextInput
        style={styles.input}
      
      />
       <View style={{ marginBottom: 50 }}>
      <Button onPress={onShare} title="Share" />
    </View>
    <View style={[{ width: "90%", height: "10%",}]}>
                    <Button
                    title="About Us!"
                    color="rgb(250, 209, 169)"
                    onPress={() => navigation.navigate('AboutUs')}  /> 
                </View>
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
  input: {
    height: 200,
    width: 350,
    margin: 6,
    borderWidth: 1,
    padding: 15,
  },
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

});

export default Feedback;