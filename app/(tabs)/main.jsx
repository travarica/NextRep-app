import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'; 
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

const main = () => {
    const [fontsLoaded] = useFonts({
      'REM': require('../../assets/fonts/REM.ttf'),
      'REM ExtraBold': require('../../assets/fonts/REM ExtraBold.ttf'),
      'REM (2)': require('../../assets/fonts/REM (2).ttf'),
      'REM Medium': require('../../assets/fonts/REM Medium.ttf'),
      'REM SemiBold': require('../../assets/fonts/REM SemiBold.ttf')
    });
    
    useEffect(() => {
      const prepare = async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      };
      prepare();
    }, [fontsLoaded]);
    
    // Prevent rendering if fonts are not loaded
    if (!fontsLoaded) {
      return null;
    }

    const router = useRouter()
  return (
    <View style={styles.container}>
    <View style={styles.header}> 
     <View style={styles.profilebackground}>
      <Image source={require('../../assets/images/user (4).png')} style={styles.profile}></Image>
     </View> 
      <View style={styles.hellocontainer}>
        <Text style={{fontFamily: 'REM (2)', fontSize: 20, marginBottom: -5 , color: "#272D34",}}>Hello,</Text>
        <Text style={{fontFamily: 'REM SemiBold', fontSize: 23, color: "#272D34",}}>Roko Travica</Text>
      </View>
     <View style={styles.hamburgerbackground}>
      <Image source={require('../../assets/images/hamburger (1).png')} style={styles.hamburger}></Image>
    </View>
    <Image source={require('../../assets/images/hamburger (1).png')} style={{width: 23,
        height: 24.5, tintColor: "#272D34",marginLeft:-38 ,marginTop: -1}}></Image>
    </View>
    <Text style={styles.todaytext}>Today's Workout</Text>
    <View>
    <Text></Text>
    <Text></Text>
    <TouchableOpacity></TouchableOpacity>
      <View>
      <Image></Image>
      <Text></Text>
      </View>  
    </View>   
      <Text onPress={()=> router.push('/signup')}>nazad</Text>
    </View>
  )
}

export default main

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "#FFFDFF"
      },
      header:{
         flexDirection: "row",
         alignItems: "center", 
         marginTop: 25,
      },
      hellocontainer:{
       marginLeft: 15,

      },
      profilebackground:{
        backgroundColor: "#E9E7E7",
        marginLeft: 20,
        padding: 15,
        borderRadius: 50,
      },
      
      profile:{
        width: 30,
        height: 30, 
        tintColor: "#272D34", 
      },
      hamburgerbackground:{
        backgroundColor: "#E9E7E7",
        marginLeft: 80,
        padding: 15,
        borderRadius: 50,
      }, 
      hamburger:{
        width: 23,
        height: 24.5,
        tintColor: "#272D34",
      },
      todaytext:{
        fontFamily: "REM ExtraBold",
        marginLeft: 22,
        fontSize: 30,
        marginTop: 70,
        color: "#272D34"
      }
})