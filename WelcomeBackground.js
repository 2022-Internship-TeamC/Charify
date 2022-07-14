import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, Alert, ImageBackground, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

const WelcomeBackground = ({navigation}) =>  {
 return (
     <SafeAreaView style ={styles.container}>
         <Text style={styles.title}>CHANGE</Text>
             <ImageBackground source={{uri:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAyMjhfMTY3%2FMDAxNTgyODk3ODYxMjMx.VDcsrQRM4YEj5CmggXgBkyHKq5679JKl62kPD_WHUPsg.LYhy8ioBrOOpFS--W0AjSG09rRbINy2txY8rEScfEnkg.JPEG.hcryon%2FIMG_4161.JPG&type=sc960_832'}}
                 style={styles.backgroundImage}>
            </ImageBackground>
            <View style={[{ width: "90%", height: "5%",}]}>
                    <Button
                      title="Tap when finished."
                      color="rgb(250, 209, 169)"
                      onPress={() => Alert.alert("You picture is saved.")}  /> 
                    </View>
        </SafeAreaView>
    );
 }
 
export default WelcomeBackground;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "fff",
        alignItems:"center",
        justifyContent: "space-between",
    },
    backgroundImage: {
        flex: 1,
        width: '100%' ,
        height: '100%' ,
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
