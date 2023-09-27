import React from 'react';
import { StyleSheet, StatusBar, View, Text, Image, ScrollView} from 'react-native';

export default function home() {
 return (
   <View style={styles.container}>
    <StatusBar style='auto'/>
    <Image style={styles.Image} source={require('../../fotos/MyPrincess/MyPrincessHome.jpg')}></Image>
    <Text style={styles.TextDedicatoria}>De: Klêvson</Text>
    <Text style={styles.TextDedicatoria}>Para: Larissa</Text>
    <View style={styles.Line}></View>
    <ScrollView style={styles.Scroll}>
      <Text style={styles.Text}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </Text>
    </ScrollView>
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
      borderRadius: 20,
      borderColor: "#e18479",
      borderWidth: 3,
      marginTop: 20,
      marginBottom: 15,
      resizeMode: 'stretch'
    },
    Scroll: {
      marginTop: 15,
      marginBottom: 15,
      padding: 10,
      backgroundColor: "#e6454e",
      opacity: 0.4,
      borderRadius: 10,
    },
    TextDedicatoria: {
      color: "#fff",
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 0,
      flexDirection: 'row',
    },
    Text: {
      color: "#fff",
      fontSize: 12,
      width: 350,
      textAlign: 'justify',
      fontWeight: 'bold'
    },
    Line: {
      backgroundColor: "#ff4d55",
      height: 0.7,
      width: 305,
      marginTop: 1.2
    }
})