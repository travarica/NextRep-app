import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {useRouter } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'; 
import { useEffect } from 'react';
import { useFonts } from 'expo-font'; 

const index = () => {
// Load fonts
const [fontsLoaded] = useFonts({
  'REM': require('../../assets/fonts/REM.ttf'),
  'REM ExtraBold': require('../../assets/fonts/REM ExtraBold.ttf'),
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
      <Image source={require('../../assets/images/welcomeslika.png')} style={styles.slika}></Image>
      <View style={styles.textstyle}>
      <Text style={styles.text1}>Welcome to</Text>
      <Text style={styles.text2}>NextRep</Text>
      </View>
      
       {/*<Link href="/signup">Sign up</Link>*/}
      <TouchableOpacity style={styles.botun}  onPress={() => router.push('/signup')}>
        <Text style={styles.tekst2}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botun2}  onPress={() => router.push('/signin')}>
        <Text style={styles.tekst3}>Sign In</Text>
      </TouchableOpacity>
     {/*} <Text style={{ fontFamily: 'REM', fontSize: 20 }}>:(</Text>*/}
      
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFDFF"
    

  },
  textstyle:{
    alignItems: "center",
    gap: 0,
    marginBottom: 0,
    position: "relative",
    top: "5%"
    
  },
  text1 :{
    fontFamily: "REM",
    fontSize: 35,
    marginBottom: -5,
    color: "#272D34",
  },
  text2 :{
    fontFamily: "REM ExtraBold",
    fontSize: 40,
    color: "#272D34",
  },

  slika: {
    width: 240,
    height: 260,
    position: "relative",
    top: "-1%"
  },
  botun: {
    backgroundColor: "#F5F5F6",
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    // sjena za iOS
    shadowColor: '#111111',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 4,
    // sjena za  Android
    elevation: 5,
    position: "relative",
    top: "12.5%"
    
  },
  tekst2: {
    color: "#272D34",
    fontFamily: 'REM',
    fontSize: 19,
    lineHeight: 21.5, // Match this with fontSize to ensure proper centering
    marginTop: 1
  },
 botun2: {
  backgroundColor: "#272D34",
  paddingVertical: 12,
  paddingHorizontal: 105,
  borderRadius: 10,
  justifyContent: "center",
  alignItems: "center",
  // Shadow for iOS
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  // Shadow for Android
  elevation: 5,
  position: "relative",
  top: "14.5%"
  
},
  tekst3: {
    color: "#ffffff",
    fontFamily: 'REM',
    fontSize: 19,
    lineHeight: 21.5, // Match this with fontSize to ensure proper centering
    marginTop: 1
  },
});
