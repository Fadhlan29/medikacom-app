import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { styles } from '../styles/screenStyle/MyClassStyle.js'

const MyClassScreen = () => {
  return (
    //<ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>My ClassRoom</Text>
      </View>
    //</ScrollView>
  )
}

export default MyClassScreen