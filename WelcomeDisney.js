import React from "react";
import { StyleSheet, Text, View,Image,SafeAreaView,Alert, Button } from "react-native";

function WelcomeDisney (props) {
    return (
        <SafeAreaView style ={styles.container}>
        <Text style={styles.title}>CHANGE</Text>
        
        <Image 
             /*style={styles.cover}*/
             source={require("../assets/ellsa.jpg")}
             style={{
               resizeMode: "contain",
               height: 200,
               width: 300
             }}
             
             />
         
        <Button
         title ="SAVE"
         onPress={() => Alert.alert("SAVE", "Do you want to save your Disney image?",[
           {text: "Cancel"},
           {text: "Yes"},
           
         ])} />
        <Button
         title ="BACKGROUND"
         onPress={() => Alert.alert("You can choose the background~!",
              
        )} />
        </SafeAreaView>);
    }



    const styles = StyleSheet.create({
        container:{
          flex: 1,
          backgroundColor: "fff",
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

    
export default WelcomeDisney;