import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import { styles } from '../styles/componentStyle/BannerStyle';
import imageBanner from '../assets/images/bgTitle.png';

const Banner = () => {
  return (
    <View style={styles.bannerWrapper}>
      <ImageBackground source={imageBanner} style={styles.bgBanner}>
        <Text style={styles.textBannerFirst}>MySchool</Text>
        <Text style={styles.textBannerSecond}>MEDIKACOM</Text>
      </ImageBackground>
    </View>
  );
};

export default Banner;
