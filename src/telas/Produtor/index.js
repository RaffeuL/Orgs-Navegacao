import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import Cesta from "./componentes/Cesta";


export default function Produtor() {
    const route = useRoute();
    const { nome, imagem, cestas } = route.params;

    return <FlatList 
        data={cestas}
        renderItem={({item}) => <Cesta {...item} produtor={{ nome, imagem }}/>}
        style={estilos.lista}
        
    />
}

const estilos = StyleSheet.create({
    lista: {
        backgroundColor: '#ffffff',
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    logo: {
        flexDirection: 'row',
    },
    produtorImage: {
        width: 62,
        height: 62,

        marginTop: -23,

        borderRadius: 6,
    },
    produtor: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    cestas: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginTop: 32,
    }
});
