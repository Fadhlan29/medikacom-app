import React from 'react';
import {ScrollView, Text, View, SafeAreaView, FlatList, TextInput} from 'react-native';
import {styles} from '../styles/screenStyle/MyClassStyle.js';
import {dataLesson} from '../constant/DataLesson.js';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather.js';
import Image from '../assets/images/jurusan/rpl.png'
import Colors from '../constant/Colors.js';

const MyClassScreen = () => {
  return (
    //<ScrollView>
    <SafeAreaView style={styles.safeAreaView}>
      {/* <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}> */}
        <View style={styles.container}>
          {/* header */}
          <View style={styles.header}>
            <Text style={styles.titleHeader}>MY CLASSROOM</Text>
            <View style={styles.inputWrapper}>
              <Icon name='search' size={25} color={Colors.darkGrey} style={styles.inputIcon}/>
              <TextInput placeholder='Search . . .' style={styles.inputText} placeholderTextColor={Colors.grey}/>
            </View>
            {/* <Text style={styles.classSecond}>XII - A</Text> */}
          </View>

          <Text style={styles.title}>Rekayasa Perangkat Lunak</Text>

          {/* content */}
          <View style={styles.content}>
            <Text style={styles.titleLesson}>Lesson</Text>
            <FlatList
            showsVerticalScrollIndicator={false}
              data={dataLesson}
              renderItem={({item}) => (
                <View style={styles.lessonCard}>
                  <View style={styles.cardLeft}>
                    <Avatar.Image size={55} source={item.image} style={styles.avatar} />
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
