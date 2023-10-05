import React from 'react';
import { StatusBar, StyleSheet,View, Text, ScrollView, Image, Animated } from 'react-native';
import Video from 'react-native-video';

export default function  CarroselJuntos() {
  let foto = [
    {id: "1", image: require('../../fotos/Nossas/FotoNossa1.jpg')},
    {id: "2", image: require('../../fotos/Nossas/FotoNossa2.jpg')},
    {id: "3", image: require('../../fotos/Nossas/FotoNossa3.jpg')},
    {id: "4", image: require('../../fotos/Nossas/FotoNossa4.jpg')},
    {id: "5", image: require('../../fotos/Nossas/FotoNossa5.jpg')},
    {id: "6", image: require('../../fotos/Nossas/FotoNossa6.jpg')}, 
  ]
 return (
   <View style={styles.container}>
    <StatusBar backgroundColor='#000'/>
    <ScrollView 
      style={styles.Scroll}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      >
      <Image style={styles.Image} source={foto[0].image}></Image>
      <Image style={styles.Image} source={foto[1].image}></Image>
      <Image style={styles.Image} source={foto[2].image}></Image>
      <Image style={styles.Image} source={foto[3].image}></Image>
      <Image style={styles.Image} source={foto[4].image}></Image>
      <Image style={styles.Image} source={foto[5].image}></Image>
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
    height: 400,
    width: 330,
    paddingTop: 110,
  },
  Image: {
    marginTop: 20,
    height: 450,
    width: 300,
    margin: 10,
    borderWidth: 4,
    borderColor: "#ff4d55",
    borderRadius: 20,
  },
});