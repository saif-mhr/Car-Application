import { StatusBar } from 'react-native'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native'
import CarItem from './components/Index'
const App = () => {
  return (
    <View style={styles.container}>

  <CarItem/>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

});

export default App;