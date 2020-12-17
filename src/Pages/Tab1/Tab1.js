import Reac, { useState } from 'react';
import React from 'react';
import {View, Text, ImageBackground, Image, FlatList} from 'react-native'
import estilo from './estilo';
import getPostagens from '../../api/Inicio'
import { useEffect } from 'react';


const Tab1 = ({route, navigation}) => {

    const [posts, setPosts] = useState('')

    useEffect( () =>{
        getPostagens(setPosts)
    }, [])
        return (
        /*teste*/
        <View style={estilo.container}>
        
            <FlatList 
                data={posts}
                keyExtractor={(item, index) => index.toString() }
                renderItem={({item}) => (
                    <View style={estilo.card}>
                        <View style={estilo.cabecalho}>
                            <Image source={{uri: item.owner.picture}}
                            style={estilo.img}
                            />
                            <Text style={estilo.nome}>{item.owner.firstName}</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                                <Image source={{uri: item.image}} 
                                    style={estilo.image}
                                />
                                <Text style={estilo.descricao}>{item.owner.lastname}</Text>

                            <View style={estilo.icones}>
                                <Image source={require('../../../assets/images/curtir.png')} 
                                    style={estilo.curtir}
                                />

                                <Image source={require('../../../assets/images/comentario.png')} 
                                    style={estilo.comentario}
                                />
                                <Image source={require('../../../assets/images/direct.png')} 
                                    style={estilo.direct}
                                />
                            </View>
                        </View>
                        
                        <Text style={estilo.comentarios}>{item.text}</Text>
                        

                    </View>
                )}
            
            />
            
            
        </View>
    )
}

export default Tab1


