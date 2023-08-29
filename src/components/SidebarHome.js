import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../styles/componentStyle/SidebarHomeStyle'
import { Avatar } from 'react-native-paper';
import user from '../assets/images/dummy_user.jpg'

const SidebarHome = ({ showSidebar }) => {
  return (
    <View style={showSidebar ? styles.sidebar : {display: 'none'}}>
      {/* <Text style={styles.textSidebar}>sidebar</Text> */}
      <Avatar.Image size={70} source={user} style={styles.avatar}/>
    </View>
  );
};

export default SidebarHome;
