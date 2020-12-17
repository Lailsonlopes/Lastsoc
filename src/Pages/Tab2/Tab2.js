import React from 'react';
import {View, Text, Image} from 'react-native'
import estilo from './estilo';

const Tab2 = () => {
    return (
        <View style={estilo.container}>
            <View >
                <View><Text>Seguidores</Text></View>           
                <Image 
                    source={require('../../../assets/images/1.jpg')} 
                    style={estilo.perfil}
                    />
                <View><Text>Publicações</Text></View>           

        </View>
        </View>
    )
}

export default Tab2