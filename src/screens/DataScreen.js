import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {Appbar} from 'react-native-paper';
import Colors from '../constant/Colors';
import {styles} from '../styles/screenStyle/DataStyle.js';
('../styles/screenStyle/ProfileStyle.js');
import {useNavigation} from '@react-navigation/native';

const DataScreen = () => {
  const navigation = useNavigation();

  const handleToBack = () => {
    navigation.navigate('home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Appbar.Header style={{backgroundColor: Colors.lightGrey}}>
            <Appbar.BackAction onPress={handleToBack} />
            <Appbar.Content title="data" />
          </Appbar.Header>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DataScreen;
