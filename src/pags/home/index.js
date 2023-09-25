import React from 'react';
import { StyleSheet, StatusBar, View, Text } from 'react-native';

export default function home() {
 return (
   <View style={styles.container}>
    <StatusBar style='auto'/>
    <Text>Tela home</Text>
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
})