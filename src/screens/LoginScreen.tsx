import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Image, Text, TextInput, TouchableOpacity  } from 'react-native'
import { colores, styles } from '../theme/appTheme'


interface Props extends StackScreenProps<any, any>{};

export const LoginScreen = ( {navigation}: Props ) => {
  return (
    <View >
        
        <View style={styles.container}>
            <Image source={require('../assets/images/logo.jpeg')} style={styles.image} />
        </View>

        <View>
            <Text style={ styles.h3 }> INICIAR SESIÓN </Text>
        </View>
        <View style={ styles.datos }>
            <Text style={ styles.h4login }> Correo electronico: </Text>
                <TextInput keyboardType='email-address' placeholder="email@gmail.com" style={ styles.h5login } />
            <Text style={ styles.h4login }> Contraseña: </Text>
                <TextInput secureTextEntry={true} placeholder="********" style={ styles.h5login }/>
            <Text style={ styles.h6logintext }>¿No tienes cuenta?
                <Text 
                    onPress={ () => navigation.navigate('RegistroScreen') } 
                    style={ styles.h6login }> Registrate 
                </Text>
            </Text>

            <View style={styles.btningresar}>
                <TouchableOpacity style={styles.ingresar}>
                    <Text style={styles.buttonIngresar}>Ingresar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

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