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

const HomeScreen = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
                size={30}
                color={Colors.darkGrey}
                style={styles.iconHeaderHome}
              />
            ) : (
              <IconToogle
                name="align-left"
                size={30}
                color={Colors.darkGrey}
                style={styles.iconHeaderHome}
              />
            )}
          </TouchableOpacity>
          <Image source={logo} style={styles.logoHeaderHome} />
        </View>

        {/* sidebar */}
        <SidebarHome showSidebar={showSidebar} toggleSidebar={toggleSidebar} />

        {/* Banner */}
        {/* <Banner /> */}

        <Text>SMK MedikaCom</Text>

        {/* Expertise Program */}
        <Text style={styles.titleExpertise}>Kompetensi Keahlian</Text>
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
