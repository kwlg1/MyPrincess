import React from 'react';
import { StatusBar, StyleSheet, View, Text} from 'react-native';

export default function CarroselJuntos() {
 return (
   <View style={styles.container}>
    <StatusBar style='auto'/>
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
    }
  });