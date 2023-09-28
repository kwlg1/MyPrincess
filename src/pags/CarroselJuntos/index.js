import React from 'react';
import { StatusBar, StyleSheet, View, Text, Image} from 'react-native';

export default function CarroselJuntos() {
 return (
   <View style={styles.container}>
    <StatusBar backgroundColor='#000'/>
    <Image style={styles.Image} source={require("../../fotos/MyPrincess/MyPrincessHome.jpg")}></Image>
    <Text>Carrosel com nossas fotos</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#facac0',
      alignItems: 'center',
      justifyContent: 'center'
    },
    Image: {
      height: 350,
      width: 270,
      resizeMode: 'stretch',
    }
  });