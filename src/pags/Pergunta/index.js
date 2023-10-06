import React from "react";
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export default function Pergunta() {
  let Girassol = require('../../fotos/MyPrincess/girassol.png')
  return (
    <View style={styles.container}>
      <Image style={styles.Girassol} source={Girassol}></Image>
      <StatusBar style="auto" />
      <View style={styles.pergunta}>
        <Text style={styles.TextPergunta}>Me aceita para o resto da sua vida?</Text>
      </View>

      <View style={{flexDirection: "row"}}>
        <TouchableOpacity
          style={[styles.Botoes, {marginLeft: 100}]}
        >
          <Text style={[styles.TextPergunta, {color: '#FFF'}]}>sim</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.Botoes, {marginLeft: 20}]}
        >
          <Text style={[styles.TextPergunta, {color: '#FFF'}]}>não</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#facac0",
    alignItems: "center",
    justifyContent: "center",
  },
  pergunta: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    opacity: 0.6, 
    height: 30,
    width: 250,
    borderRadius: 10,
    borderWidth: 0.6,
    borderColor: "#ff4d55",
    marginLeft: 105,
    marginBottom: 25,
  },
  TextPergunta: {
    color: "#ff4d55",
    fontWeight: "bold",    
    fontSize: 15,
    fontStyle: "italic",
  },
  Botoes: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ab0040",
    height: 35,
    width: 50,
    borderRadius: 10,
    
  },
  Girassol: {
    position: 'absolute',
  }
});
