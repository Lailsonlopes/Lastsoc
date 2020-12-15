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
        alignItems: 'flex-start',
        marginTop: 5
    },

     card : {
        width: 350,
        backgroundColor: 'white',
    }

})

export default estilo;