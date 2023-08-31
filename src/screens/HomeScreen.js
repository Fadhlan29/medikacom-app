import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles/screenStyle/HomeScreenStyle';
import logo from '../assets/images/logo.png';
import IconToogle from 'react-native-vector-icons/Feather';
import IconClose from 'react-native-vector-icons/Ionicons';
import {FlatList} from 'react-native';
import {dataExpertise} from '../constant/DataExpertise';
import Colors from '../constant/Colors';
import {SidebarHome, ExpertiseCard, Banner} from '../components';
import smk from '../assets/images/smk.png';

const HomeScreen = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          style="auto"
          translucent={false}
          backgroundColor={Colors.lightGrey}
          barStyle="dark-content"
        />

        {/* header */}
        <View style={styles.headerHome}>
          <TouchableOpacity onPress={() => setShowSidebar(!showSidebar)}>
            {showSidebar ? (
              <IconClose
                name="close"
                size={35}
                color={Colors.darkGrey}
                style={styles.iconHeaderHome}
              />
            ) : (
              <IconToogle
                name="align-left"
                size={35}
                color={Colors.darkGrey}
                style={styles.iconHeaderHome}
              />
            )}
          </TouchableOpacity>
          {/* <Text>MYSCHOOL</Text> */}
          <Image source={logo} style={styles.logoHeaderHome} />
        </View>

        {/* sidebar */}
        <SidebarHome showSidebar={showSidebar} toggleSidebar={toggleSidebar} />

        {/* title */}
        <View style={styles.titleWrapper}>
          <Text style={styles.titleFirst}>learn and grow with</Text>
          <Text style={styles.titleSecond}>SMK MedikaCom</Text>
        </View>

        {/*  */}
        <View style={styles.cardsWrapper}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/profile.png')}
              style={styles.cards}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/data.png')}
              style={styles.cards}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/informasi.png')}
              style={styles.cards}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/gallery.png')}
              style={styles.cards}
            />
          </TouchableOpacity>
        </View>

        {/* Expertise Program */}
        <Text style={styles.titleExpertise}>Daftar Jurusan</Text>
        <ScrollView style={styles.expertise}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={dataExpertise}
            renderItem={({item}) => <ExpertiseCard data={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
