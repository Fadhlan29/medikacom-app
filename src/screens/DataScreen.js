import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
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
          {/* header */}
          <Appbar.Header style={{backgroundColor: Colors.lightGrey}}>
            <Appbar.BackAction onPress={handleToBack} />
            <Appbar.Content title="data" />
          </Appbar.Header>
          {/* header end */}
<<<<<<< HEAD

          {/* <Box>
            <Link href="https://nativebase.io">
              Click here to open documentation.
            </Link>
          </Box> */}
=======
>>>>>>> 62720cd432eec4b64b8add514a68b494289a1d60
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DataScreen;
