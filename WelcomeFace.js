import React from "react";
import {StyleSheet, Text, View,Image,SafeAreaView,Alert, Button } from "react-native";

function WelcomeFace (props) {
    return (
        <SafeAreaView style ={styles.container}>
           <Text style={styles.title}>CHANGE</Text>
           <Image 
      /*style={styles.cover}*/
      /*source={require("../assets/emma.jpg")}*/
      source={{uri: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAxMDZfMTM5%2FMDAxNTQ2NzU1MzY1NjU3.Zfww7opoXiVhBi3KUhMBzkomXBYLR6N_U0lySDbsejQg.VBWtfCc1hNQfJ6j6lND_tKyLnSLHj4em5HfH0d3HEFYg.JPEG.oow98%2FEmma_Stone_-_19th_Annual_AFI_Awards_in_Beverly_Hills2C_California_on_January.jpg&type=a340'}}
      style={{
        resizeMode: "contain",
        height: 200,
        width: 300
      }}
      
      />
          
            
           <Button
            title ="Change"
            onPress={() => Alert.alert("CHANGE is converting your picture",
              
            )} />
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


export default WelcomeFace;

/*,
      image: {
        /*resizeMode: "cover",*/
        /*width: '0.5%',
        height: '0.5%',*/
      /*  resizeMode: 'contain',
      
        justifyContent: "center",
    
      }*/

    /*  <Image 
      /*style={styles.cover}*/
      /*source={require("./assets/emma.jpg")}
      style={{
        resizeMode: "contain",
        height: 200,
        width: 300
      }}
      
  />*/