import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../styles/componentStyle/SidebarHomeStyle';
import {Avatar} from 'react-native-paper';
import user from '../assets/images/dummy_user.png';
import IconClose from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SidebarHome = ({toggleSidebar}) => {
  const navigation = useNavigation()

  const handleNavigation = () => {
    navigation.navigate('login')
  }

  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={toggleSidebar}>
          <IconClose name='close' size={35} color='black' style={styles.icon}/>
        </TouchableOpacity>
      <View style={styles.content}>
        <Avatar.Image size={70} source={user} style={styles.logoUser}/>
        <TouchableOpacity style={styles.btnLogin} onPress={handleNavigation}>
          <Text style={styles.textBtnLogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SidebarHome;
