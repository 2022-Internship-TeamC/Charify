import React from 'react';
import { View, StyleSheet, Text,SafeAreaView} from 'react-native';


const AboutUs = ( ) => {
    return (
        <SafeAreaView style ={styles.container}>
        <Text style={styles.title}>CHANGE</Text>
        
            <Text>"CHANGE" app uses AI-based neural networks to transform your photos to cartoon characters.

                Upload a photo from the Gallery to see the result: disney version of your photo.
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      backgroundColor: '#fff',
       
    },
    title: {
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
})

export default AboutUs;
