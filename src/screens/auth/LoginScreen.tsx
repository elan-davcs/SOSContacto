import { StackScreenProps } from '@react-navigation/stack'
import React, { useState } from 'react'
import { View, Image, Text, TextInput, TouchableOpacity, ToastAndroid, Pressable } from 'react-native'
import { colores, styles } from '../../theme/appTheme'
import { ScrollView } from 'react-native-gesture-handler'
import { IconButton } from 'react-native-paper';
import auth from '@react-native-firebase/auth'
import useAuth from '../../hooks/useAuth'
import Icon from 'react-native-vector-icons/Ionicons'
import { stylesDrawer } from '../../theme/drawerTheme'
import { GoogleSignin } from '@react-native-google-signin/google-signin';


interface Props extends StackScreenProps<any, any> { }

export const LoginScreen = ({ navigation }: Props) => {
  const { email, setEmail, password, setPassword, Login, googleSignIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [useData, setUserData] = useState({});

  return (
    <View>
      <View style={styles.container}>
        <Image source={require('../../assets/images/logo.jpeg')} style={styles.image} />
      </View>

      <View>
        <Text style={styles.h3}>INICIAR SESIÓN</Text>
      </View>
      <View style={styles.datos}>
        <Text style={styles.h4login}>Correo electrónico:</Text>
        <TextInput
          style={styles.h5login}
          value={email}
          keyboardType='email-address'
          placeholder='email@gmail.com'
          onChangeText={(email) => setEmail(email)}
          returnKeyType='next'
          blurOnSubmit={false}
        />

        <Text style={styles.h4login}>Contraseña:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            style={[styles.h5login, { flex: 1 }]}
            placeholder='******'
            value={password}
            onChangeText={(password) => setPassword(password)}
            keyboardType='default'
            returnKeyType='next'
            blurOnSubmit={false}
            secureTextEntry={!showPassword}
          />
          <IconButton
            icon={showPassword ? 'eye-off' : 'eye'}
            onPress={() => setShowPassword(!showPassword)}
          />
        </View>

        <Text style={styles.h6logintext}>
          ¿No tienes cuenta?
          <Text onPress={() => navigation.navigate('RegistroScreen')} style={styles.h6login}> 
            Registrate
          </Text>
        </Text>
        <View style={styles.btningresar}>
          <TouchableOpacity style={styles.ingresar} onPress={Login}>
            <Text style={styles.buttonIngresar}>Ingresar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnBox}>
          <Pressable
            onPress={() =>
              googleSignIn()
                .then(res => {
                  console.log(res)
                  setUserData(res.user);
                }).catch(error => console.log(error))
            }
          >
            <Text style={styles.buttonIngresar}>Google Sign in</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};


/*
interface Props extends StackScreenProps<any, any>{};

export const LoginScreen = ({navigation}: Props ) => {

    useEffect(() => {
        console.log('LoginScreen effect');
    }, []) 

    return (
        <View >
            <View style={ styles.barra}>
                <Text style={ styles.titleBar }> Inicio </Text>
            </View>
            <View>
                <Text style={ styles.h3 }> Inicar sesion </Text>
            </View>
            <View>
                <Text style={ styles.h4login }> Correo electronico: </Text>
                <TextInput style={ styles.h5login }></TextInput>
                <Text style={ styles.h4login }> Contraseña: </Text>
                <TextInput style={ styles.h5login }></TextInput>
            </View>
            <Button 
                title="Iniciar sesion" 
                onPress={ () => navigation.navigate('AgregarScreen') } />
        </View>
    )
}*/