import React, { useEffect } from 'react'
import { ImageBackground, Text } from 'react-native'
import splash from '../assets/images/splash.png'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp')
    }, 3000)
  }, [])

  return (
    <ImageBackground source={splash} style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 20, color: '#e0e0e0', marginBottom: 20}}>MedikaCom</Text>
    </ImageBackground>
  )
}

export default SplashScreen