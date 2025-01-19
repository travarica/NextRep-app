import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'; 
import { useEffect } from 'react';
import { useFonts } from 'expo-font'; 


const signin = () => {
const [fontsLoaded] = useFonts({
  'REM': require('../../assets/fonts/REM.ttf'),
  'REM ExtraBold': require('../../assets/fonts/REM ExtraBold.ttf'),
  'REM (2)': require('../../assets/fonts/REM (2).ttf'),
  'REM Medium': require('../../assets/fonts/REM Medium.ttf')
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
      <Text style={styles.signup}>Sign In</Text>
      <View style={styles.alreadycontainer}>
        <Text style={styles.already}>Don't have an account? </Text>
        <Text style={styles.signin} onPress={() => router.push('/signup')}>Sign Up</Text>
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
      <View style={styles.orcontainer}>
        <View style={styles.linija}></View>
        <Text style={styles.ortext}>Or</Text>
        <View style={styles.linija}></View>
      </View>
      <TouchableOpacity style={styles.googlebutton}>
        <View style={styles.googlecontainer}>
          <Image source={require('../../assets/images/google.png')} style={styles.googleslika}></Image>
          <Text style={styles.googletext}>Sign in with Google</Text>
        </View>  
      </TouchableOpacity>
      <TouchableOpacity style={styles.applebutton}>
        <View style={styles.applecontainer}>
          <Image source={require('../../assets/images/apple (1).png')} style={styles.appleslika}></Image>
          <Text style={styles.appletext}>Sign in with Apple</Text>
        </View>  
      </TouchableOpacity>
     {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
      </View>*/}
      
    </View>
  )
}

export default signin

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
    marginRight: 166

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
  },
  orcontainer:{
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center", 
  marginTop: 25
  },
  linija:{
    height: 1,
    width: 125,
    backgroundColor: "#D6D6D6",
    borderRadius: 5,
    marginHorizontal: 10

  },
  ortext:{
    fontFamily: "REM Medium",
    fontSize: 15,
  },
  googlecontainer:{
   flexDirection: "row",
   justifyContent: "center",
   alignItems: "center",
  },
  googlebutton:{
    backgroundColor: "#E9E7E7",
    height: 50,
    width: 290,
    borderRadius: 30,
    justifyContent: "center",
    marginTop: 25
  },
  googleslika:{
    width: 20,
    height: 20,
    tintColor: "#272D34",
    position: "relative",
    right: 18
  },
  googletext:{
    fontFamily: "REM",
    fontSize: 17,
    color:"#272D34",
    textAlign: "center",
    marginBottom: 2,
    letterSpacing: 1
  },
  applecontainer:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
   },
   applebutton:{
     backgroundColor: "#E9E7E7",
     height: 50,
     width: 290,
     borderRadius: 30,
     justifyContent: "center",
     marginTop: 15
   },
   appleslika:{
     width: 25,
     height: 25,
     tintColor: "#272D34",
     position: "relative",
     right: 23
   },
   appletext:{
     fontFamily: "REM",
     fontSize: 17,
     color:"#272D34",
     textAlign: "center",
     marginBottom: 2,
     letterSpacing: 1
   },
})