import React, { useState } from "react";
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, Image, Animated, Modal } from "react-native";

import PressSim from '../../pags/PressSim/index'
export default function Pergunta() {
  let Girassol = require('../../fotos/MyPrincess/girassol.png')
  
  const [marginLeft, setMarginLeft] = useState(120)
  const [marginTop, setMarginTop ] = useState(0)
  const [visualizarModal, setVisualizarModal] = useState(false);

  function BntSim(){
    setMarginLeft(120)
    setMarginTop(0)
    setVisualizarModal(true)
  }

  function fecharModal(){
    setVisualizarModal(false)
  }

  function mudarPosBnt(){
    let posicaoLeft = Math.floor(Math.random() * (190 - (-130)) + (-130))
    let posicaoTop = Math.floor(Math.random() * (310 - (-370)) + (-370))
    setMarginLeft(posicaoLeft)
    setMarginTop(posicaoTop)
  }
  return (
    <View style={[styles.container, {opacity: visualizarModal == true? 0.2: null}]}>
      <Image style={styles.Girassol} source={Girassol}></Image>
      <StatusBar backgroundColor='#000'/>
      <View style={styles.pergunta}>
        <Text style={styles.TextPergunta}>
          Me aceita para o resto da sua vida?
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity 
        style={[styles.Botoes, { marginLeft: 60 }]}
        onPress={() => BntSim()}
        >
          <Text style={[styles.TextPergunta, { color: "#FFF" }]}>sim</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.Botoes, { marginTop: marginTop, marginLeft: marginLeft, position: "absolute" }]}
          onPress={() => mudarPosBnt()}
          >
            <Text style={[styles.TextPergunta, { color: "#FFF" }]}>não</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="fade"
          visible={visualizarModal}
        >
          <PressSim fechar={fecharModal}/>
        </Modal>
      </View>
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
