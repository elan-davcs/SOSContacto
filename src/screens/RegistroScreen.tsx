import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Button, Text, TextInput, TouchableOpacity, Image  } from 'react-native'
import { colores, styles } from '../theme/appTheme'
import { ScrollView } from 'react-native-gesture-handler'


interface Props extends StackScreenProps<any, any>{};

export const RegistroScreen = ( {navigation}: Props ) => {
  return (
    <View >      
        <ScrollView>
            <View style={ styles.globalMargin}>
                <View style={styles.container}>
                    <Image source={require('../assets/images/logo.jpeg')} style={styles.image} />
                </View>

                <View>
                    <Text style={ styles.h3 }> REGISTRO </Text>
                </View>

                <Text style={ styles.h4login }> Nombre: </Text>
                    <TextInput style={ styles.h5login } />

                <Text style={ styles.h4login }> Apellidos: </Text>
                    <TextInput style={ styles.h5login } />

                <Text style={ styles.h4login }> Correo electronico: </Text>
                    <TextInput keyboardType='email-address' style={ styles.h5login } />
                
                <Text style={ styles.h4login }> Contraseña: </Text>
                    <TextInput secureTextEntry={true} style={ styles.h5login } />
                
                <Text style={ styles.h4login }> Confirmar contraseña : </Text>
                    <TextInput secureTextEntry={true} style={ styles.h5login } />
                
                <Text style={ styles.h4login }> Celular: </Text>
                    <TextInput keyboardType='numeric' style={ styles.h5login } />

                <Text style={ styles.h6logintext }>¿Ya tienes una cuenta?
                    <Text 
                        onPress={ () => navigation.navigate('LoginScreen') } 
                        style={ styles.h6login }> Iniciar Sesión
                    </Text>
                </Text>

                <View style={styles.btningresar}>
                    <TouchableOpacity style={styles.ingresar}>
                        <Text style={styles.buttonIngresar}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}