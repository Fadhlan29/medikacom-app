import {View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Appbar} from 'react-native-paper';
import Colors from '../constant/Colors';
import {styles} from '../styles/screenStyle/ProfileStyle';
('../styles/screenStyle/ProfileStyle.js');
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleToBack = () => {
    navigation.navigate('home');
  };
  const [kategoriSeleksi, setKategoriSeleksi] = useState([
    {
      author: 'VISI',
      text: 'Menjadi SMK Unggulan yang membangun dan mengembangkan generasi muda Indonesia, khususnya Jawa Barat, menjadi manusia cerdas berakhlak mulia, produktif, terampil dan unggul memasuki pasar kerja lokal dan global diberbagai Industri dan Usaha.',
      image: require('../assets/images/medikacomBanner.jpg'),
    },
    {
      author: 'MISI',
      text: 'Menggali dan mengembangkan potensi setiap siswa untuk memberdayakan (Empowering) kecerdasan intelektual (IQ) emosional (EQ) maupun spiritual (SQ) untuk meraih masa depan yang gemilang.',
      image: require('../assets/images/medikacomBanner.jpg'),
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Appbar.Header style={{backgroundColor: Colors.lightGrey}}>
            <Appbar.BackAction title="profile" onPress={handleToBack} />
            <Appbar.Content title="profile" />
          </Appbar.Header>
        </View>
        <View style={styles.banner} />
        <View style={styles.roundedBorder} />
        
        <View>
          <Image
            style={styles.image}
            source={require('../assets/images/medikacom.png')}
          />
          <Text style={styles.title}>SMK MedikaCom</Text>
          <Text style={styles.titleSecond}>Jl. Rancabolang Soekarno-Hatta No. 10B, Manjah Lega, Rancasari, Bandung, Jawa Barat</Text>
       </View>
        
        <View style={{marginTop:20}}>
          {kategoriSeleksi.map((kategoriSeleksi, i) => (
            <View key={i} style={styles.card}>
              <Image style={styles.imageCard}
                source={kategoriSeleksi.image}/>
              <View style={styles.textCard}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  {kategoriSeleksi.author}
                </Text>
                <Text>{kategoriSeleksi.text}</Text>
              </View>
            </View>
          ))}
        </View>
      
        <View>
          <Text style={styles.title}>Follow us on:</Text>
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-around', padding:5}}>
          <TouchableOpacity style={styles.imageMedsos}>
              <Image style={{height:35, width:35}} source={require('../assets/images/medos/facebook.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageMedsos}>
              <Image style={{height:35, width:35}} source={require('../assets/images/medos/instagram.jpg')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageMedsos}>
              <Image style={{height:35, width:35}} source={require('../assets/images/medos/youtube.jpg')}/>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
