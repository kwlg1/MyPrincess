import React from 'react';
import { StatusBar, StyleSheet,View } from 'react-native';

export default function  CarroselLarissa() {
 return (
   <View style={styles.container}>
    <StatusBar style= "auto"/>
    <Text>Carrosel de fotos da Larissa</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#facac0',
    alignItems: 'center',
    justifyContent: 'center'
  }
});