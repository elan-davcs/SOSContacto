import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useRef, useState } from 'react';
import { View, Button, Text, TextInput, TouchableOpacity, Image, Pressable } from 'react-native';
import { colores, styles } from '../../theme/appTheme';
import { ScrollView } from 'react-native-gesture-handler';
import useAuth from '../../hooks/useAuth'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import database from '@react-native-firebase/database'

interface Props extends StackScreenProps<any, any> { };

export const RegistroScreen = ({ navigation }: Props) => {

    const { email, setEmail,
        password, setPassword,
        confirmPass, setConfirmPass,
        onRegister, googleSignIn } = useAuth()
    const [nombre, setNombre] = useState('');
    //const contentRef = useRef<any>();

    const [useData, setUserData] = useState({});


    /*const handleSaveNote = () => {

        navigation.goBack();
    }*/

    return (
        <View >
            <ScrollView>
                <View style={styles.globalMargin}>
                    <View style={styles.container}>
                        <Image source={require('../../assets/images/logo.jpeg')} style={styles.image} />
                    </View>

                    <View>
                        <Text style={styles.h3}> REGISTRO </Text>
                    </View>

                    <Text style={styles.h4login}> Nombre: </Text>
                    <TextInput style={styles.h5login}
                        placeholder='Nombre'
                        onChangeText={nombre => setNombre(nombre)}
                        value={nombre}
                    />

                    <Text style={styles.h4login}> Apellidos: </Text>
                    <TextInput style={styles.h5login} />

                    <Text style={styles.h4login}> Correo electronico: </Text>
                    <TextInput style={styles.h5login}
                        placeholder='Email'
                        onChangeText={email => setEmail(email)}
                        autoCapitalize='none'
                        value={email}
                        keyboardType='email-address'
                        returnKeyType='next'
                        blurOnSubmit={false}
                    />

                    <Text style={styles.h4login}> Contraseña: </Text>
                    <TextInput style={styles.h5login}
                        secureTextEntry={true}
                        onChangeText={password => setPassword(password)}
                        value={password}
                        keyboardType='default'
                        returnKeyType='next'
                        blurOnSubmit={false}
                    />
                    {/*  */}
                    <Text style={styles.h4login}> Confirmar contraseña : </Text>
                    <TextInput secureTextEntry={true}
                        style={styles.h5login}
                        onChangeText={confirmPass => setConfirmPass(confirmPass)}
                    />

                    <Text style={styles.h4login}> Celular: </Text>
                    <TextInput keyboardType='numeric' style={styles.h5login} />


                    <Text style={styles.h6logintext}>¿Ya tienes una cuenta?
                        <Text
                            onPress={() => navigation.navigate('LoginScreen')}
                            style={styles.h6login}> Iniciar Sesión
                        </Text>
                    </Text>

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
                            <Text style={styles.buttonIngresar}>Google Signin</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Text>
                            UID: <Text> {useData.uid} </Text> {' '}
                        </Text>
                        <Text>
                            Name: <Text> {useData.displayName} </Text> {' '}
                        </Text>
                        <Text>
                            Email: <Text> {useData.email} </Text> {' '}
                        </Text>
                    </View>

                    <View style={styles.btningresar}>
                        <TouchableOpacity style={styles.ingresar} onPress={onRegister}>
                            <Text style={styles.buttonIngresar}>Registrarse</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}