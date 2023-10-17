import React, {useRef, useState, useEffect} from 'react';
import { View, StyleSheet, StatusBar, Text, Image,Animated, TouchableOpacity } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';

export default function PressSim(props) {
  let coracao = require('../../fotos/MyPrincess/coracao.png')
  let texto = require('../../fotos/MyPrincess/texto.png')
  const dimensao = useRef(new Animated.Value(200)).current;

  useEffect(()=> {

  Animated.loop(
  
      Animated.sequence([
        Animated.timing(dimensao, {
          toValue: 350,
          duration: 600,
          useNativeDriver: false
        
        }),
        Animated.timing(dimensao, {
          toValue: 200,
          duration: 600,
          useNativeDriver: false
        }),
      ]),

  ).start();

  }, []);
 return (
   <View style={styles.container}>
     <StatusBar backgroundColor="#000" />
     <Image style={styles.Image} source={texto}></Image>
     <View style={styles.Modal}>
       <Animated.Image
         style={{
           width: dimensao,
           height: dimensao,
           justifyContent: "center",
           marginTop: -100,
         }}
         source={coracao}
       ></Animated.Image>
     </View>
     <TouchableOpacity
      onPress={props.fechar}
     >
      <MaterialIcons name='fullscreen-exit' size={25} color='#ff4d55' />
     </TouchableOpacity>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Modal: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 400,
  },
  Image: {
    width: 500,
    height: 200
  }
});