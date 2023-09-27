import React from 'react';
import { StyleSheet, StatusBar, View, Text, Image, ScrollView} from 'react-native';

export default function Home() {
 return (
   <View style={styles.container}>
    <StatusBar style='auto'/>
    <Image style={styles.Image} source={require('../../fotos/MyPrincess/MyPrincessHome.jpg')}></Image>
    <Text style={styles.TextDedicatoria}>De: Klêvson</Text>
    <Text style={styles.TextDedicatoria}>Para: Larissa</Text>
    <View style={styles.Line}></View>
    <ScrollView style={styles.Scroll}>
      <Text style={styles.Text}>
        {'         Antes de tudo, Queria dizer uma coisinha: Eu Te Amo!\n\n         Bom, pensei por onde começar a falar e decidi comçar desde a primeira vez em que lhe vi. Então vamos lá, desde a primeira vez que lhe vi, percebi em meu amor algo diferente, senti uma alegria e derrepente veio um sorriso espontâneo, E foi quando veio o tão famoso "Boa noite, senhoritas!". E desde de então o amor pelo meu amor só cresceu a cada dia mais, e cada vez mais fui me aproximando aos poucos. Me aproximar logo no começo foi um pouco difícil me aproxima, não sabia como e quando chegar perto, então fui tomando coragem, foi a melhor coisa que já fiz em toda minha vida.\n       Namorar meu amor é uma das melhores coisas do mundo, não tenho só uma namorada, tenho uma companheira, minha melhor amiga, quem eu confio todos os meus segredos, em meu amor tenho tudo.\n     Que a cada dia mais possamos no unir mais e mais, que nossa felicidade aumente a cada dia, até bem velhinhos. Eu te amo muito muito muito, e que sempre possamos passar lembrar nossa data onde tudo se ofcialiuzou, "16 de Julho de 2023".'}
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
      fontWeight: 'bold',
      margin: 12,
    },
    Line: {
      backgroundColor: "#ff4d55",
      height: 1,
      width: 305,
      marginTop: 1.2
    }
})