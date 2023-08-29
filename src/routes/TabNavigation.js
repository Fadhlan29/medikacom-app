import React from 'react';
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    HomeScreen,
    MyClassScreen
} from '../screens/index'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../constant/Colors';

const Tab = createBottomTabNavigator()

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        height: 60,
        backgroundColor: Colors.lightGrey,
    }
}
   
  function TabNavigation() {
    return (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
        name="home" 
        component={HomeScreen} 
        options={{ 
            tabBarIcon: ({focused}) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={ focused ? 'home' : 'home-outline' } size={38} color={Colors.darkGrey}/>
                </View>
            )
         }}/>
         
        <Tab.Screen 
        name="myclass" 
        component={MyClassScreen} 
        options={{ 
            tabBarIcon: ({focused}) => (
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={ focused ? 'school' : 'school-outline' } size={35} color={Colors.darkGrey}/>
                </View>
            )
         }}/>
      </Tab.Navigator>
    )
  }

export default TabNavigation