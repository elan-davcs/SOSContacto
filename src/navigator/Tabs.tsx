import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NtfScreen } from '../screens/NtfScreen';
import { InicioScreen } from '../screens/InicioScreen';
import { colores, styles } from '../theme/appTheme';
import { PerfilNavigator } from './PerfilNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneAnimationEnabled={ true }
      initialRouteName="LoginScreen"
      barStyle = {{
        backgroundColor: colores.primary,
      }}

      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, focused}) => {

          let iconName: string = '';
          switch( route.name ) {

            case 'Inicio':
              iconName = 'location'
            break;

            case 'Notificaciones':
              iconName = 'notifications'
            break;

            case 'Perfil':
              iconName = 'person'
            break;
          }
          return <Icon name={ iconName } size={ 30 } color={ colores.white } />
        }
      })}
      
    >
      <Tab.Screen name="Inicio" component={InicioScreen} /*Screen de inicio*//>
      <Tab.Screen name="Notificaciones" component={NtfScreen} /*Screen de Notificaciones*/ /> 
      <Tab.Screen name="Perfil" component={PerfilNavigator} /*Screen de perfil que es un StackNavigator*//>
    </Tab.Navigator>
  );
}
