import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/navigator/Tabs';
import { LoginScreen } from './src/screens/auth/LoginScreen';
import SplashScreen from 'react-native-splash-screen'
import { AuthNavigator } from './src/navigator/AuthStack';
import database from '@react-native-firebase/database'



export default function App() {
  useEffect(() => {

    SplashScreen.hide(); //Descomentar para utilizar la splashscreen y en MainActivity.java
  }, []);

  useEffect(() => {
    console.log('primero');
    try {
        database()
          .ref('usuarios')
          .on('value', (snap: any) => {
              console.log('Conexion');
              
              if (snap.val()) {
                  snap.forEach((item: any) => {
                      console.log(item.val());
                      
                  });
              } else {
                  console.log('No se realizo la conexion');
                  
              }
          });
    } catch (error) {
        console.log(error);
    }
    
},[]);

  return (
    <NavigationContainer>{/* Rest of your app code */}
      <AuthNavigator/>
    </NavigationContainer>

  );
}

/*
export default function App() {
  useEffect(() => {
    SplashScreen.hide(); //Descomentar para utilizar la splashscreen y en MainActivity.java
  }, []);

  return (
    <NavigationContainer>{/* Rest of your app code }
      <Tabs/>
    </NavigationContainer>
  );
}*/