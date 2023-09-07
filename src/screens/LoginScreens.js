import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import logo from '../assets/images/logo.png';
import {styles} from '../styles/screenStyle/LoginStyleScreen.js';
import Icon from 'react-native-vector-icons/Feather';
import {Appbar, Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LoginScreens = () => {
  const navigation = useNavigation()

  const handleToBack = () => {
    navigation.navigate('home')
  }

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.BackAction onPress={handleToBack}/>
      </Appbar.Header>
      <View style={styles.content}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.form}>
          <Text style={styles.text}>Login to your account</Text>
          <View style={styles.inputWrapper}>
            <Icon name="user" size={25} style={styles.icon} />
            <TextInput placeholder="NIS" style={styles.textInput} />
          </View>
          <View style={styles.inputWrapper}>
            <Icon name="lock" size={25} style={styles.icon} />
            <TextInput placeholder="Password" style={styles.textInput} />
          </View>
        </View>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>LOGIN</Text>
        </TouchableOpacity> */}
        <Button
          text="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.button}>
          LOGIN
        </Button>
      </View>
    </View>
  );
};

export default LoginScreens;
