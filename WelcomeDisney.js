import React from "react";
import { StyleSheet, Text, View,Image,SafeAreaView,Alert, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

const WelcomeDisney = ({navigation}) => {
    return (
        <SafeAreaView style ={styles.container}>
                <Text style={styles.title}>CHANGE</Text>
                <View style = {styles.blankcontainer}></View>

                <Image 
                    /*style={styles.cover}*/
                    source={{uri: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MzBfMTk3%2FMDAxNjI3NjQyNTY3MTAy.p578liXfJCf9I-WONeqhWvM9JsOQlBzh4dmhBQGeW5Ag.XHvK7K3tC6it__YpW9V20rINJpsnMCKh-au1Zyqw6Ikg.JPEG.jojo9344%2Ffrozen%25A3%25AD20200901%25A3%25AD193057%25A3%25AD009.jpg&type=a340'}}
                    style={{
                    resizeMode: "contain",
                    height: 450,
                    width: 350
                    }}

                    />
                <View style = {styles.blankcontainer}></View>

                <View style={[{ width: "90%", height: "10%",}]}>
                    <Button
                    title="SAVE"
                    color="rgb(250, 209, 169)"
                    onPress={() => Alert.alert("SAVE", "Do you want to save your Disney image?",[
                            {text: "Cancel"},
                            {text: "Yes"},])}  /> 
                </View>
                <View style={[{ width: "90%", height: "10%",}]}>
                    <Button
                    title="BACKGROUND"
                    color="rgb(250, 209, 169)"
                    onPress={() => navigation.navigate('WelcomeBackground')}  /> 
                </View>

        </SafeAreaView>);
    }



    const styles = StyleSheet.create({
        container:{
          flex: 1,
          backgroundColor: "rgb(252,233,212)",
          alignItems:"center",
          paddingBottom: 20,

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
        image: {
          /*resizeMode: "cover",*/
          /*width: '0.5%',
          height: '0.5%',*/
          resizeMode: 'contain',

          justifyContent: "center",

        },
        blankcontainer: {
            width: '100%',
            height: '10%',
          },
    });


export default WelcomeDisney;
