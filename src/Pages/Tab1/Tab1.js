import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native'
import estilo from './estilo';


const Tab1 = ({route, navigation}) => {
        return (
        
        <View style={estilo.container}>
        
            <Image source={require('../../../assets/images/user.png')}
            style={estilo.img}
            />

            <Image source={require('../../../assets/images/tucano.jpg')} 
                style={estilo.image}
            />
            
            
            </View>
    )
}

export default Tab1


