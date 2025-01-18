import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const signin = () => {
const router = useRouter()

  return (
    <View>
      <Text>signin radi</Text>
      <TouchableOpacity  onPress={() => router.push('/signup')}>
              <Text style={styles.tekst3}>Nazad</Text>
            </TouchableOpacity>
    </View>
  )
}

export default signin

const styles = StyleSheet.create({})