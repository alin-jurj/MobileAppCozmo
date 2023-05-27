import React, { useState, useEffect } from 'react'
import { Text, View, ImageBackground, StyleSheet, TextInput, FlatList, Image, TouchableOpacity, Keyboard, Pressable } from 'react-native'
import {LoginContext} from '../App'
import { useContext } from 'react';
import { BackgroundContext } from '../App';
// import { LoginContext } from '../App';




function ClientScreen({navigation}) {
  const context = useContext(LoginContext);
  const [text, changeText] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  //const contextcoordonate= useContext(ContextCoordinate);
  //const logincontext = useContext(LoginContext)
  const [datta, setdatta] = useState('')
//   const [location, setlocation] = useState('')
  const backGroundContext = useContext(BackgroundContext);
 // const chosenVehicleContext = useContext(ChosenVehicleContext);
  const date = new Date();

  const backgrounds = [
    {
        id: 1,
        url: 'https://img.freepik.com/free-vector/large-school-building-scene_1308-32058.jpg?w=2000'
       
      },
    {
        id: 2,
        url: 'https://img.freepik.com/free-vector/hand-drawn-church-building-illustration_23-2149453119.jpg?w=2000'
    },
    {
        id: 3,
        url: 'https://external-preview.redd.it/police-academy-the-animated-series-v0-DtoZhMb8jVcdgp8gxQ18g2zT92157S71363isAC7p0c.png?format=pjpg&auto=webp&s=ce3dbd8501c7f4ffb14ddf03b001b8afea71f9d6'
    }
]

  useEffect(() => {

//   //console.log(logincontext.loginDetails)
//    // getLocation();
//     console.log(location);
//     fetch("http://10.0.2.2:8000/car/")
//     .then(res => res.json())
//     .then(data => {
//      //console.log(data)
//       setdatta(data)
//     }).catch(error => console.log(error))

   
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); 
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); 
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  
//   const Driver = ({ item }) => (
    
//     <Pressable style={styles.driver} onLongPress={() => {
//       console.log("Pressed view!");
//       chosenVehicleContext.setChosenVehicle(item)
//       navigation.navigate('MapPreview');
//     }}>
//       {/* {console.log(item?.pictureUrl)} */}
//       <Image source={{uri: item?.pictureUrl}} style={{height: 80, width: 130, borderRadius: 10}} resizeMode='stretch'></Image>
//       <View style={styles.driverDetails}>destination
        
//         <Text style={styles.description}>Arrival: {date.getHours()}:{date.getMinutes()+20}</Text>
//         <Text style={styles.description}>Category: {item?.category}</Text>
//         <Text style={styles.description}>Price: {item?.price} RON/KM</Text>
//       </View>
//       <TouchableOpacity style={styles.button} onPress={() => {chosenVehicleContext.setChosenVehicle(item);navigation.navigate('Map')}}><Text style={{color: 'white', fontSize: 12}}>Choose</Text></TouchableOpacity>
//     </Pressable>
//   );

const passengerUsername = context.loginDetails.username;
const handleRequest = function(id) {
  let destination = '';
  
  if (id === 1) {
    destination = 'School';
  } else if (id === 2) {
    destination = 'Church';
  } else if (id === 3) {
    destination = 'Police';
  }

  fetch('http://10.0.2.2:8000/request/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      passengerUsername,
      destination,
    }),
  });
};
const BackGroundContainer = ({item}) => (
  <View style={{marginLeft: 20, marginRight: 20, marginTop: 20}}>
      <Image source={{uri: item.url}} style={{width: 150, height: 200, borderTopLeftRadius: 20, borderTopRightRadius: 20}}></Image>
      <TouchableOpacity style={styles.button} onPress={() => handleRequest(item.id)} >
          <Text style={{color: 'white', fontSize: 12}}>Choose</Text>
      </TouchableOpacity>
  </View>
)
  return (
    <View style={styles.container}>
        <ImageBackground source={{uri: backGroundContext.background}} resizeMode="stretch" style={styles.image}>
        <Text style = {styles.text}> Alege destinatia dorita </Text>
        <FlatList 
                data={backgrounds}
                renderItem={({item}) => <BackGroundContainer item={item} />}
                keyExtractor={item => item.id} 
                numColumns={2}
            />
        </ImageBackground>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    image: {
      paddingTop: 150,
      width: 480,
      height: 820,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: 100
    },
    input: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: '#0D0B84',
        backgroundColor: '#BBC7F2',
        borderRadius: 20,
        padding: 15,
        color: 'black',
    },
    listContainer: {
      height: 210,
      justifyContent: 'center',
      alignItems: 'center'
    },
    driver: {
      width: 375,
      height: 100,
      backgroundColor: '#7F89E1',
      borderWidth: 1,
      borderColor: '#0D0B84',
      flexDirection: 'row',
      padding: 9,
      marginVertical: 2,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    description: {
      color: 'white',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 8,
      paddingHorizontal: 18,
      borderRadius: 20,
      backgroundColor: '#01135d',
      marginRight: 10
    },

    text:{
      alignItems:'center',
      fontSize:35,
      color:'black'
    },

  });

export default ClientScreen