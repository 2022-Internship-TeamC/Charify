import React, { useEffect } from 'react';
import PickCharacter from './app/screens/PickCharacter';
import WelcomeScreen from './app/screens/WelcomeScreen';
import WelcomeFace from './app/screens/WelcomeFace';
import WelcomeDisney from './app/screens/WelcomeDisney';
import WelcomeBackground from './app/screens/WelcomeBackground';
import Feedback from './app/screens/Feedback';
import AboutUs from './app/screens/AboutUs';
import Setting from './app/screens/Setting';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
  console.log("App executed~!");

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="Welcomescreen" component={WelcomeScreen} />
        <Stack.Screen name="PickCharacter" component={PickCharacter} />
        <Stack.Screen name="WelcomeFace" component={WelcomeFace} />
        <Stack.Screen name="WelcomeDisney" component={WelcomeDisney}/>
        <Stack.Screen name="WelcomeBackground" component={WelcomeBackground}/>
        <Stack.Screen name="Feedback" component={Feedback}/>
        <Stack.Screen name="AboutUs" component={AboutUs}/>
        <Stack.Screen name="Setting" component={Setting}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;
