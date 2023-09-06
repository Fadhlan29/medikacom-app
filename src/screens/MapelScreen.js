import {View, Text} from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const MapelScreen = () => {
  const route = useRoute();
  const lesson = route.params.lesson;

  return (
    <View>
      <Text>there is {lesson} screen</Text>
    </View>
  );
};

export default MapelScreen;
