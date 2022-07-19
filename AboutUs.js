import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const AboutUs = ( ) => {
    return (
        <View style={styles.container}>
            <Text>We are developers~! </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default AboutUs;