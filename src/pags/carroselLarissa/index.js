import React from 'react';
import { StatusBar, StyleSheet,View, Text, ScrollView, Image, Animated } from 'react-native';

export default function  CarroselLarissa() {
  let foto = [
    {id: "1", image: require('../../fotos/MyPrincess/FotoLarissa1.jpg')}
  ]
 return (
   <View style={styles.container}>
    <StatusBar backgroundColor='#000'/>
    <ScrollView style={styles.Scroll}>
      <Image style={styles.Image} source={foto[0].image}></Image>
    </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#facac0',
    alignItems: "center",
    justifyContent: 'center'
  },
  Scroll: {
    width: "80%",
    height: 200,

  },
  Image: {
    marginLeft: "auto",
    marginRight:"auto",
    marginTop: 20,
    height: 350,
    width: 270,
    //resizeMode: 'stretch',
  },
});