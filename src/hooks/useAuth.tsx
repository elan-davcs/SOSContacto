import { View, Text, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import { GoogleSignin } from '@react-native-google-signin/google-signin';



const useAuth = () => {
    const [nombre, setNombre] = useState('')
    //const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    //const [celular, setCelular] = useState('')
    const [messageError, setMessageError] = useState('')

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '18752727933-rloes7gmi3s84q9e7f2lbajs20h917l7.apps.googleusercontent.com',
        });
    }, []);

    const Login = () => {
        if (email.length > 0 && password.length > 0) {
            auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    ToastAndroid.show(' signed in!', ToastAndroid.LONG);
                })
                .catch(error => {
                    ToastAndroid.show(error.message, ToastAndroid.LONG);
                });
        } else {
            ToastAndroid.show("Enter email/password", ToastAndroid.LONG);
        }
        /*auth()
        .signInWithEmailAndPassword(email, password)
        .then( user => {
            console.log(user);
        });*/
    };

    const googleSignIn = async () => {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }

    const handleSignOutGoogle = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await auth().signOut()
            console.log('Sesion Cerrada');

        } catch (error) {
            console.error(error);
        }
    };
    //cerrar sesion con cuenta solo de correo
    const handleSignOut = () => {
        auth()
          .signOut()
          .then(() =>
            ToastAndroid.show('Se ha cerrado la sesión', ToastAndroid.LONG),
          );
      };

    const onRegister = () => {
        console.log("Register");
        /*if(!nombre.trim() || apellido.trim()) {
            console.log('Nombre y apellidos registrados');
            return;
        }
        else if(!email.trim() || !password.trim()) {
            console.log('Entra email y contrasella');
            return;
        }*/
        //database().ref('usuarios').push(data);

        if (email) {
            setMessageError('');

            if (password && confirmPass) {
                setMessageError('');

                if (password.length > 6 && password === confirmPass) {
                    //true
                    auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then(() => {
                            ToastAndroid.show(' signed in!', ToastAndroid.LONG);
                        })
                        .catch(error => {
                            ToastAndroid.show(error.message, ToastAndroid.LONG);
                        });
                } else {
                    setMessageError('La contrasena debe contener maximo 6 digitos');
                }
            } else {
                setMessageError('Verifica las contrasenas');
            }
        } else {
            setMessageError('Verifica el correo electronico');
        }


    };

    return {
        Login,
        onRegister,
        googleSignIn,
        handleSignOutGoogle,
        handleSignOut,
        email,
        password,
        confirmPass,
        messageError,
        nombre,
        //apellido,
        //celular,
        setNombre,
        //setApellido,
        //setCelular,
        setEmail,
        setPassword,
        setConfirmPass,
        setMessageError
    }
}

export default useAuth