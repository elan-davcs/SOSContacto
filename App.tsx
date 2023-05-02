import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/navigator/Tabs';
import { LoginScreen } from './src/screens/LoginScreen';
import SplashScreen from 'react-native-splash-screen'

export default function App() {
  useEffect(() => {
    SplashScreen.hide(); //Descomentar para utilizar la splashscreen y en MainActivity.java
  }, []);

  return (
    <NavigationContainer>{/* Rest of your app code */}
      
      <Tabs/>
    </NavigationContainer>

  );
}