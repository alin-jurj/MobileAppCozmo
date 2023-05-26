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
import { useState } from 'react';
import React from 'react';

const Stack = createNativeStackNavigator();
export const BackgroundContext = React.createContext();
export default function App() {

  const [background, setBackground] = useState('https://cdn2.vectorstock.com/i/1000x1000/30/16/planning-summer-vacations-travel-by-car-vector-18923016.jpg');
  return (
   
       <NavigationContainer>
    {/* <ChosenVehicleContext.Provider value = {{ChosenVehicle, setChosenVehicle}}>
    <ContextCoordinate.Provider value={{coordinate,setcoordinate}}>
    <LoginContext.Provider value={{loginDetails,setloginDetails}}> */}
    <BackgroundContext.Provider value={{background, setBackground}}> 
    <Stack.Navigator initialRouteName='LoginScreen'>
    <Stack.Screen options = {{headerShown: false}} name="LoginScreen" component={LoginScreen} />
    <Stack.Screen options = {{headerShown:false}} name="Register" component={RegisterScreen} />
    <Stack.Screen options = {{headerShown: false}} name="Proba" component={Proba} />
      {/* <Stack.Screen options = {{headerShown: false}} name="Driver" component={DriverScreen} />
      <Stack.Screen options = {{headerShown: false}} name="ClientSearch" component={ClientSearchScreen} />
      <Stack.Screen options = {{headerShown: false}} name="Settings" component={SettingsScreen}/>
      <Stack.Screen options = {{headerShown: false}} name="Map" component={MapScreen} />
      <Stack.Screen options = {{headerShown: false}} name="Account" component={AccountScreen} />
      <Stack.Screen options = {{headerShown: false}} name="NotImplemented" component={NotYetImplemented}/>
      <Stack.Screen options = {{headerShown: false}} name="AddCarScreen" component={AddCarScreen}/>
      <Stack.Screen options = {{headerShown: false}} name="BackgroundScreen" component={BackgroundScreen}/> */}
    </Stack.Navigator>
    </BackgroundContext.Provider>
    {/* {loginDetails!='' && <NavBar />}  */}
    {/* </LoginContext.Provider>
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
