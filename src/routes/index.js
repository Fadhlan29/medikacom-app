import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SplashScreen
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
    </Stack.Navigator>
  )
}

export default Router