import { StackScreenProps } from '@react-navigation/stack'
import React, { useState } from 'react'
import { View, Button, Text, Image } from 'react-native'
import { colores, styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler'
import { ms } from 'react-native-size-matters';
import auth from '@react-native-firebase/auth'
import useAuth from '../hooks/useAuth'
import { stylesDrawer } from '../theme/drawerTheme'


interface Props extends StackScreenProps<any, any> { };

export const PerfilScreen = ({ navigation }: Props) => {
  const { handleSignOutGoogle,handleSignOut } = useAuth();
  const [useData, setUserData] = useState({});
  const user = auth().currentUser;
 
  return (
    <View>
      <View style={styles.barra}>
        <Text style={styles.titleBar}> Perfil </Text>
      </View>

      <ScrollView style={styles.globalMargin}>
        <View style={styles.container}>
          {user?.photoURL ? (
            <Image
              source={{
                uri: user?.photoURL,
              }}
              style={stylesDrawer.avatar}
            />
          ) : (
            <Image
              source={{
                uri: 'https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png',
              }}
              style={stylesDrawer.avatar}
            />
          )}

        </View>

        <View>
          <Text style={styles.h3}> {user?.displayName} </Text>
        </View>

        <View style={styles.datosPerfil}>
          <Text style={styles.h4}> Correo electronico:
            <Text
              style={styles.h5}> {user?.email}
            </Text> {' '}
          </Text>
        </View>

        <View style={styles.datosPerfil}>
          <Text style={styles.h4}> Celular: <Text style={styles.h5}> {user?.phoneNumber} 3141234567</Text> </Text>
        </View>

        <View style={styles.datosPerfil}>
          <Text style={styles.h4}> Contactos:
            <View style={styles.btnVerMas}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ContactosScreen')}
              >
                <Text style={styles.btnText}> Ver más </Text>
              </TouchableOpacity>
            </View>
          </Text>
        </View>

        <View style={styles.datosPerfil}>
          <Text style={styles.h4}> Agregar contacto:
            <View style={styles.btnVerMas}>
              <TouchableOpacity
                onPress={() => navigation.navigate('AgregarScreen')}
              >
                <Text style={styles.texto}> <Icon name="person-add-outline"
                  size={25}
                  color="white" /> </Text>
              </TouchableOpacity>
            </View>
          </Text>
        </View>

        {/*aqui se hace todo para cerrar la sesion de las 2 formas */}
        <View>
          <View style={styles.ButtonCerrar}>
            {user?.photoURL ? (
              <TouchableOpacity style={styles.btnCerrar}
                onPress={handleSignOutGoogle}
              >
                <Text style={styles.btnTextCerrar}> Cerrar Sesión <Text style={styles.texto}> <Icon name="exit-outline"
                  size={25}
                  color="white" /> </Text> </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.btnCerrar}
                onPress={handleSignOut}
              >
                <Text style={styles.btnTextCerrar}> Cerrar Sesión <Text style={styles.texto}> <Icon name="exit-outline"
                  size={25}
                  color="white" /> </Text> </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>



    </View>
  )
}

