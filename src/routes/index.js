import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SplashScreen,
    ProfileScreen,
    DataScreen,
    InformasiScreen,
    GalleryScreen
} from '../screens/index'
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <Stack.Navigator 
    initialRouteName='MainApp'
    screenOptions={{ 
      headerShown: false
     }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="MainApp" component={TabNavigation} />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="data" component={DataScreen} />
        <Stack.Screen name="informasi" component={InformasiScreen} />
        <Stack.Screen name="gallery" component={GalleryScreen} />
    </Stack.Navigator>
  )
}

export default Router