import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ImageBackground } from 'react-native';
import BgImg from './assets/bg.png';
const { width, height } = Dimensions.get('window');

const App = () => (
  <View style={styles.image}>
    <ImageBackground source={BgImg} style={styles.image}>
      <View style={{ ...StyleSheet.absoluteFill }}>
        <Image
          source={require('./assets/bg.png')}
          style={{ flex: 1, height: null, width: null }}
        />
      </View>
      <View style={{ height: height / 3, justifyContent: 'center' }}>
        <View style={styles.button1}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SIGN IN</Text>
        </View>
        <View style={styles.button2}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
            SIGN UP
          </Text>
        </View>
      </View>

    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  button1: {
    backgroundColor: 'white',
    height: 60,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  },
  button2: {
    backgroundColor: '#2E71DC',
    height: 60,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5
  },
});

export default App;