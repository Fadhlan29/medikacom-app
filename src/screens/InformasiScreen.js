import {View, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import React from 'react';
import {Appbar} from 'react-native-paper';
import Colors from '../constant/Colors';
import {styles} from '../styles/screenStyle/InformasiStyle.js';
('../styles/screenStyle/ProfileStyle.js');
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const InformasiScreen = () => {
  const navigation = useNavigation();

  const handleToBack = () => {
    navigation.navigate('home');
  };

  const [kategoriSeleksi, setKategoriSeleksi] = useState([
    {
      author: 'Pendaftaran Siswa Baru 2021/2022',
      text: 'Telah dibuka Pendaftaran Calon Siswa/i Baru TP. 2021/2022 di SMK MedikaCom melalui PSB online (diweb ini http://medikacom.sch.id/ppdb )',
      image: require('../assets/images/ppdb.png'),
    },
    {
      author: 'PEMBERITAHUAN MEDIKACOM BERWAWASAN LINGKUNGAN (ADIWIYATA)',
      text: 'Bagi seluruh warga SMK medikacom (Guru, Siswa & kantin sekolah) diwajibkan untuk selalu menjaga kebersihan,kerapihan (Ramah Lingkungan), sehingga kegiatan pembelajaran /aktivitas dapat dinikmati dengan suasana yang nyaman dan kondusif.',
      image: require('../assets/images/adiwiyata.png'),
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Appbar.Header style={{backgroundColor: Colors.lightGrey}}>
            <Appbar.BackAction onPress={handleToBack} />
            <Appbar.Content title="informasi" />
          </Appbar.Header>
        </View>

        {/* banner */}
        <View style={styles.banner} />
        <View style={styles.roundedBorder} />
        <View>
          <Image
            style={styles.image}
            source={require('../assets/images/medikacom.png')}
          />
          <Text style={styles.title}>SMK MedikaCom</Text>
          <Text style={styles.titleSecond}>Information:</Text>
       </View>

        {/* Card */}
        <View style={{marginTop:10}}>
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

        <View style={styles.information}>
          <Text style={styles.titleSecond}>For more information:</Text>
          <View style={styles.textInformation}>
            <Icon name='web' size={25}/>
            <Text style={styles.text}>https://medikacom.sch.id</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default InformasiScreen;
