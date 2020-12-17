import React from 'react';
import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'flex-start',
        backgroundColor: '#d2dae2'
               
    },

    image : {
        width: 300,
        height: 300,
        alignItems: 'flex-start',
        marginTop: 5
    },

    perfil: {
        width: 20,
        height: 20,
        flexDirection: 'row',
        marginTop: 2
        
    },

    img: {
        width: 40,
        height: 40,
        borderRadius: 30,
        alignItems: 'flex-start',
        marginTop: 5
    
    },

    nome: {

        marginLeft: 5,
        marginTop: 13,
        alignItems: 'flex-end'       
    },
    card: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        //flexDirection: 'row'
    },cabecalho: {
        flexDirection: 'row',
        //alignItems: 'center'
    },
     card : {
        width: 350,
        backgroundColor: 'white',

    },
    curtir: {
        width: 30,
        height: 30,
        marginBottom: 100
       
    },
    comentario: {
        width: 35,
        height: 35,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginBottom: 100
    },
    direct: {
        width: 30,
        height: 30
    },
    icones: {
        //flexDirection: 'row',
        flex: 1,
        marginLeft: 5,
        marginBottom: 10,
        justifyContent: 'center'
    },

    comentarios: {
        flexDirection: 'row',
        marginLeft: 5,
        marginBottom: 5,
        margin: 10
    }

  



})

export default estilo;