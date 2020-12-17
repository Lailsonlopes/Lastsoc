import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native'
import estilo from './estilo';

const Tab2 = () => {
    return (
        <ScrollView style={estilo.scroll}>
            <View >
                <View style={estilo.cabecalho}>
                    <View >
                        <View style={estilo.circulo}>
                            <Text style={estilo.texto}>500</Text>
                        </View>
                        <Text>Seguidores</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../../assets/images/perfil.png')}
                            style={estilo.perfil}
                        />
                        <Text style={estilo.texto}>Chico</Text>
                        <Text style={estilo.texto}>Pra Negocio</Text>
                        <Text style={estilo.texto}>4:20</Text>
                    </View>
                    <View>
                        <View style={estilo.circulo}>
                            <Text style={estilo.texto}>09</Text>
                        </View>
                        <Text>Publicações</Text>
                    </View>
                </View>
                <View style={estilo.cardImagem}>
                    <Image
                        source={require('../../../assets/images/1.jpg')}
                        style={estilo.imagem}
                    />
                    <Image
                        source={require('../../../assets/images/2.jpg')}
                        style={estilo.imagem}
                    />
                    <Image
                        source={require('../../../assets/images/3.jpg')}
                        style={estilo.imagem}
                    />
                    <Image
                        source={require('../../../assets/images/4.jpg')}
                        style={estilo.imagem}
                    />
                    <Image
                        source={require('../../../assets/images/5.jpg')}
                        style={estilo.imagem}
                    />
                    <Image
                        source={require('../../../assets/images/6.jpg')}
                        style={estilo.imagem}
                    />
                    <Image
                        source={require('../../../assets/images/2.jpg')}
                        style={estilo.imagem}
                    />
                    <Image
                        source={require('../../../assets/images/4.jpg')}
                        style={estilo.imagem}
                    />
                    <Image
                        source={require('../../../assets/images/1.jpg')}
                        style={estilo.imagem}
                    />
                </View>

            </View>
        </ScrollView>
        
    )
}

export default Tab2