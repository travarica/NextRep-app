import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'; 
import { useEffect } from 'react';
import { useFonts } from 'expo-font'; 


const SignUp = () => {
const [fontsLoaded] = useFonts({
  'REM': require('../../assets/fonts/REM.ttf'),
  'REM ExtraBold': require('../../assets/fonts/REM ExtraBold.ttf'),
  'REM (2)': require('../../assets/fonts/REM (2).ttf'),
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
      <Text style={styles.naslov}>NextRep</Text>
      <Text style={styles.slogan}>"Your Progress, Simplified"</Text>
      <Text style={styles.signup}>Sign Up</Text>
      <View style={styles.alreadycontainer}>
        <Text style={styles.already}>Already have an account? </Text>
        <Text style={styles.signin}>Sign In</Text>
      </View>
      <Text style={styles.email}>Your email address</Text>
      <TextInput style={styles.emailinput} placeholder='something@gmail.com' placeholderTextColor="#D6D6D6"></TextInput>
      <Text style={styles.password}>Your password</Text>
      <TextInput style={styles.passwordinput} placeholder='min. 8 characters' placeholderTextColor="#D6D6D6" secureTextEntry={true}></TextInput>
      <TouchableOpacity style={styles.continuebutton}>
        <View style={styles.continuecontainer}>
        <Text style={styles.contiunetext}>Continue</Text>
        <Image source={require('../../assets/images/strelica.png')} style={styles.strelica} ></Image>
        </View>
      </TouchableOpacity>
     {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
      </View>*/}
      
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFDFF"
    

  },
  naslov:{
    fontFamily: "REM ExtraBold",
    fontSize: 45,
    color: "#272D34",
    marginTop: 20
  },
  slogan:{
    fontFamily: "REM",
    fontSize: 15,
    marginTop: 5,
    opacity: 0.6,
    color: "#272D34",
  },

  signup:{
    fontFamily: "REM",
    color: "#272D34",
    fontSize: 35,
    marginTop: 40,
    marginRight: 150

  },
  alreadycontainer: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: -55
  },
  already:{
   fontFamily: "REM (2)",
   opacity: 0.6,
   fontSize: 15,
   color: "#272D34",
  
  },
  signin:{
   fontFamily: "REM",
   fontSize: 15,
   textDecorationLine: "underline",
   textDecorationColor: "#272D34",
   color: "#272D34",
  },
  email:{
   fontSize: 25,
   fontFamily: "REM",
   marginLeft: -55,
   marginTop: 20,
   color: "#272D34",
  },
  emailinput:{
    borderColor: "#D6D6D6",
    borderWidth: 1,
    height: 50,
    width: 290,
    borderRadius: 30,
    marginTop: 15,
    paddingLeft: 20
  },
  password:{
    fontSize: 25,
    fontFamily: "REM",
    marginLeft: -105,
    marginTop: 15,
    color: "#272D34",
  },
  passwordinput:{
    borderColor: "#D6D6D6",
    borderWidth: 1,
    height: 50,
    width: 290,
    borderRadius: 30,
    marginTop: 15,
    paddingLeft: 20
  },
  continuebutton:{
    backgroundColor: "#272D34",
    height: 50,
    width: 290,
    borderRadius: 30,
    justifyContent: "center",
    marginTop: 30
  },
  continuecontainer:{
    flexDirection:"row",
    justifyContent: "center",
    alignItems:"center"
  },
  contiunetext:{
    color: "#F5F5F6",
    textAlign: "center",
    fontFamily: "REM",
    fontSize: 18,
    lineHeight: 25
  },
  strelica:{
   position: "relative",
   left: 85,
   tintColor: "#FFFDFF"
  }
})