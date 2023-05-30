import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RegistroScreen } from '../screens/auth/RegistroScreen';
import { styles } from '../theme/appTheme';
import { LoginScreen } from '../screens/auth/LoginScreen';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Tabs } from './Tabs';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
    //const user = auth().currentUser;
    const [initializing, setInitializing] = useState<boolean>(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User|null>();

    useEffect(()=>{
      auth().onAuthStateChanged(activeUser=>{
        setUser(activeUser);
        if (initializing){
          setInitializing(false);
        } 
      });
    },[initializing]);

    if (initializing) {
      return null;
    }

  return (
    <Stack.Navigator
      //initialRouteName='Pagina2Screen'
      screenOptions={{ //cambia el color de todas las PantallaScreen
        //headerShown: false, Borrar linea de arriba
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitle: "",
        headerStyle: {
          elevation: 0,
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
        {
            user ? (
              <>
                <Stack.Screen name="Home" options={{ title:"Home"}} component={Tabs} />              
              </>
                
            )
            : 
            <>
              <Stack.Screen name="LoginScreen" options={{ title:"Login"}} component={LoginScreen} />
              <Stack.Screen name="RegistroScreen" options={{ title:"Registro"}} component={RegistroScreen} />
            </>
        }

    </Stack.Navigator>
  );
}