import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import sucessoImagem from "../../../assets/sucesso.png"

import useTextos from "../../../hooks/useTextos";

export default function Detalhes() {
  const navigation = useNavigation();
  const route = useRoute();

  const { mensagemCompra, tituloCompra, botaoHome, botaoProdutor } = useTextos();
  
  const compra = route.params?.compra.nome;
  const mensagem = mensagemCompra?.replace('$NOME', compra);



  return <>
      <Image source={sucessoImagem} style={estilos.imagem}/>
      <View style={estilos.detalhes}>
          <Text style={estilos.tituloResumo}>{tituloCompra}</Text>
          <Text style={estilos.mensagem}>{ mensagem }</Text>
          <TouchableOpacity style={estilos.botaoHome} onPress={() => navigation.popToTop()}>
              <Text style={estilos.tituloBotao}>{botaoHome}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.botaoProdutor}  onPress={() => navigation.pop(2)}>
              <Text style={estilos.tituloBotao}>{botaoProdutor}</Text>
          </TouchableOpacity>
      </View>
  </>
}

const estilos = StyleSheet.create({
    imagem :{
        width: '100%',
        height: '50%',
    },
    detalhes: {
      backgroundColor: '#ffffff',
      paddingVertical: 8,
      paddingHorizontal: 16,
      height: '100%'
    },
    botaoHome: {
        backgroundColor: '#2A9F85',
        borderRadius: 6,
        marginVertical: 16,
    },
    botaoProdutor: {
        backgroundColor: 'white',
        borderRadius: 6,
        marginHorizontal: 16,
        borderColor: '#ECECEC',
    },
    tituloBotao: {
        padding: 16,
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tituloResumo: {
      fontSize: 26,
      lineHeight: 42,
      fontWeight: 'bold',
      color: '#464646',
    },
    mensagem: {
      fontSize: 16,
      lineHeight: 26,
      color: '#A3A3A3',
    }

})