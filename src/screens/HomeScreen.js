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
import Icon from 'react-native-vector-icons/Feather';
import {FlatList} from 'react-native';
import {dataExpertise} from '../constant/DataExpertise';
import Colors from '../constant/Colors';
import { SidebarHome, ExpertiseCard, Banner } from '../components';

const HomeScreen = () => {
  const [showSidebar, setShowSidebar] = useState(false);

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
              <Icon
                name="align-left"
                size={30}
                color={Colors.darkGrey}
                style={styles.iconHeaderHome}
              />
            </TouchableOpacity>
            <Image source={logo} style={styles.logoHeaderHome} />
          </View>

          {/* sidebar */}
          <SidebarHome showSidebar={ showSidebar }/>

          {/* Banner */}
          <Banner />

          {/* Expertise Program */}
          <ScrollView style={styles.expertise}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={dataExpertise}
              renderItem={({item}) => <ExpertiseCard data={item} />}
              keyExtractor={item => item.id.toString()}
            />
          </ScrollView>
          <ScrollView style={styles.expertise}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={dataExpertise}
              renderItem={({item}) => <ExpertiseCard data={item} />}
              keyExtractor={item => item.id.toString()}
            />
          </ScrollView>
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
