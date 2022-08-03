import React from "react";
import { View ,TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import VoltarSVG from "../../../assets/voltar.svg";

export default function Topo() {
    const navigation = useNavigation();

    return <View style={estilos.topo}>
        <Text style={estilos.titulo}>Pedido feito com sucesso!</Text>
        <TouchableOpacity 
        onPress={() => { navigation.goBack() }}
        style={estilos.botaoVoltar}>
        <VoltarSVG color='black' style={estilos.voltar} />
        </TouchableOpacity>
    </View>
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: 'white',
        width: '100%',
        height: 60,

        //Android
        elevation: 4,

        // iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    botaoVoltar: {
        position: 'absolute',
        padding: 17,
    },
    voltar: {
    width: 24,
    height: 24,
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 26,
        fontWeight: 'bold',
        color: '#464646',
        padding: 15,
    }
})