// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Settings } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Proba} from './screens/Proba';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import SettingsScreen from './screens/SettingsScreen';
import AccountScreen from './screens/AccountScreen';
import NotYetImplemented from './screens/NotYetImplemented';
import BackgroundScreen from './screens/BackgroundScreen';
import ClientScreen from './screens/ClientScreen';
import NavBar from './Components/NavBar'
import { useState } from 'react';
import React from 'react';
import cozmo from './assets/cozmo.jpg'
const Stack = createNativeStackNavigator();
export const BackgroundContext = React.createContext();
export const LoginContext = React.createContext();
export default function App() {

  //const [background, setBackground] = useState('https://cdn2.vectorstock.com/i/1000x1000/30/16/planning-summer-vacations-travel-by-car-vector-18923016.jpg');
 // console.log(cozmo)
  const [background, setBackground] = useState('https://m.media-amazon.com/images/I/B1+BUJw5c0S.png');
 // const [background, setBackground] = useState('https://www.thespruce.com/thmb/SGac2Ndbk67kygYK0VX40qTal98=/1000x1000/filters:no_upscale():max_bytes(150000):strip_icc()/1SP4150334-HeroSquare-05f5e1fd68e94ac3b91082bef8c50289.jpg') 
  const [loginDetails, setloginDetails] = useState('');

  return (
   
       <NavigationContainer>
    {/* <ChosenVehicleContext.Provider value = {{ChosenVehicle, setChosenVehicle}}>
    <ContextCoordinate.Provider value={{coordinate,setcoordinate}}>
    */}
    <LoginContext.Provider value={{loginDetails,setloginDetails}}> 
    <BackgroundContext.Provider value={{background, setBackground}}> 
    <Stack.Navigator initialRouteName='LoginScreen'>
    <Stack.Screen options = {{headerShown: false}} name="LoginScreen" component={LoginScreen} />
    <Stack.Screen options = {{headerShown:false}} name="Register" component={RegisterScreen} />
    <Stack.Screen options = {{headerShown: false}} name="Proba" component={Proba} />
    <Stack.Screen options = {{headerShown: false}} name="Settings" component={SettingsScreen}/>
    <Stack.Screen options = {{headerShown: false}} name="Account" component={AccountScreen} />
    <Stack.Screen options = {{headerShown: false}} name="NotImplemented" component={NotYetImplemented}/>
    <Stack.Screen options = {{headerShown: false}} name="BackgroundScreen" component={BackgroundScreen}/>
    <Stack.Screen options = {{headerShown: false}} name="ClientScreen" component={ClientScreen}/>
    </Stack.Navigator>
    </BackgroundContext.Provider>
    </LoginContext.Provider>
    
    {loginDetails!='' && <NavBar />} 
    {/* 
    </ContextCoordinate.Provider>
    </ChosenVehicleContext.Provider> */}
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
