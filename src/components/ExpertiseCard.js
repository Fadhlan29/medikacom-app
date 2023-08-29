import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../styles/componentStyle/ExpertiseCardStyle.js';
import {ImageBackground} from 'react-native';

const ExpertiseCard = ({data}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={data.image}>
        {data.name !== 'all' && (
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>See Details</Text>
          </TouchableOpacity>
        )}
      </ImageBackground>
    </View>
  );
};

export default ExpertiseCard;
