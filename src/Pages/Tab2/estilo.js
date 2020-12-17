import React from 'react';
import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    scroll: {
        flex:1,
        backgroundColor: 'white'
    },
    //
    cabecalho: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 25,
        justifyContent: 'space-evenly'
    },
    perfil: {
        alignItems: 'center',
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    texto: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    circulo: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: '#d2dae2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoCirculo: {
        textAlign: 'center',
        fontWeight: 'bold'

    },
    cardImagem: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    imagem: {
        width:130,
        height: 200,
        marginBottom: 10
    }

})

export default estilo;