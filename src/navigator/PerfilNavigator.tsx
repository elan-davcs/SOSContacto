import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PerfilScreen } from '../screens/PerfilScreen';
import { AgregarScreen } from '../screens/AgregarScreen';
import { ContactosScreen } from '../screens/ContactosScreen';
import { RegistroScreen } from '../screens/RegistroScreen';
import { styles } from '../theme/appTheme';
import { LoginScreen } from '../screens/LoginScreen';

const Stack = createStackNavigator();

export const PerfilNavigator = () => {
  return (
    <Stack.Navigator
      //initialRouteName='Pagina2Screen'
      screenOptions={{ //cambia el color de todas las PantallaScreen
        //headerShown: false, Borrar linea de arriba
        headerStyle: {
          elevation: 0,
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="PerfilScreen" options={{ title:"Perfil"}} component={PerfilScreen} />
      <Stack.Screen name="AgregarScreen" options={{ title:"Agregar Contacto"}} component={AgregarScreen} />
      <Stack.Screen name="ContactosScreen" options={{ title:"Contactos"}} component={ContactosScreen} />
      <Stack.Screen name="LoginScreen" options={{ title:"Login"}} component={LoginScreen} />
      <Stack.Screen name="RegistroScreen" options={{ title:"Registro"}} component={RegistroScreen} />
    </Stack.Navigator>
  );
}