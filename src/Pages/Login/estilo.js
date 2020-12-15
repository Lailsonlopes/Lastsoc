import React from 'react';
import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e9e9e9'
    },
    logo: {
        width: 160,
        height: 160,
        alignItems: "center"
        
    },
    inputs: {
        width: '80%',
        flex: 1
    },
    imagem: {
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 7
    },
    botaoEntrar: {
        backgroundColor: '#7158e2',
        padding: 10,
        marginBottom: 10,
        borderRadius: 7, 
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoEntrar: {
        fontWeight: 'bold',
        color: '#fff'
    },
    botaoCriar: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 7,
        color: '#f7941e',
        textAlign: 'center',
        
        alignItems: 'center',
        justifyContent: 'center'
    },textoCriar: {
        fontWeight: 'bold',
        color: '#fff'        
    },
    textoMensagem: {
        color: '#d63031',
        padding: 7,
        fontWeight: 'bold'
    },

    textolastsoc: {
    fontWeight: 'bold',
    color: '#fff'
}

})

export default estilo;