import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native'
import estilo from './estilo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1 from '../Tab1/Tab1'
import Tab2 from '../Tab2/Tab2'


const Tab = createBottomTabNavigator();
  
const Inicio = () => {
return (
    
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Tab1} />
        <Tab.Screen name="Perfil" component={Tab2} />
              </Tab.Navigator>
  
  );
}

               

export default Inicio