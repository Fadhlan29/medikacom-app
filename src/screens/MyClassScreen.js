import React from 'react';
import {ScrollView, Text, View, SafeAreaView, FlatList} from 'react-native';
import {styles} from '../styles/screenStyle/MyClassStyle.js';
import {dataLesson} from '../constant/DataLesson.js';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather.js';
import Image from '../assets/images/jurusan/rpl.png'

const MyClassScreen = () => {
  return (
    //<ScrollView>
    <SafeAreaView style={styles.safeAreaView}>
      {/* <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> */}
        <View style={styles.container}>
          {/* header */}
          <View style={styles.header}>
            <Text style={styles.title}>Ruangan Kelasku</Text>
            <Text style={styles.class}>Rekayasa Perangkat Lunak</Text>
            {/* <Text style={styles.classSecond}>XII - A</Text> */}
          </View>

          {/* content */}
          <View style={styles.content}>
            <FlatList
            showsVerticalScrollIndicator={false}
              data={dataLesson}
              renderItem={({item}) => (
                <View style={styles.lessonCard}>
                  <View style={styles.cardLeft}>
                    <Avatar.Image size={60} source={item.image} style={styles.avatar} />
                    <Text style={styles.cardText}>{item.lesson}</Text>
                  </View>
                  <Icon size={25} name="chevron-right" style={styles.cardIcon} />
                </View>
              )}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        </View>
      {/* </ScrollView> */}
    </SafeAreaView>
    //</ScrollView>
  );
};

export default MyClassScreen;
