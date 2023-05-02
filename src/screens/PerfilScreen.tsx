import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Button, Text, Image  } from 'react-native'
import { colores, styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler'
import { ms } from 'react-native-size-matters';


interface Props extends StackScreenProps<any, any>{};

export const PerfilScreen = ( {navigation}: Props ) => {
  return (
    <View>
      <View style={ styles.barra}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" style={styles.icono}></Icon>
          </TouchableOpacity>
          <Text style={ styles.titleBar }> Perfil </Text>
      </View>

      <ScrollView style={ styles.globalMargin}>
        <View style={styles.container}>
          <Image source={require('../assets/images/imgUser.png')} style={styles.image} />
        
        </View>

        <View>
          <Text style={ styles.h3 }> Nombre de Usuario </Text>
        </View>

        <View style={ styles.datosPerfil}>
          <Text style={ styles.h4 }> Correo: <Text style={ styles.h5 }> email@gmail.com </Text> </Text>
        </View>

        <View style={ styles.datosPerfil}>
          <Text style={ styles.h4 }> Celular: <Text style={ styles.h5 }> 314 123 4567 </Text> </Text>
        </View>

        <View style={ styles.datosPerfil}>
          <Text style={ styles.h4 }> Contactos: 
            <View style={ styles.btnVerMas}>
              <TouchableOpacity 
                onPress={ () => navigation.navigate('ContactosScreen')}
              >
                <Text style={ styles.btnText }> Ver más </Text>
              </TouchableOpacity>
            </View>
          </Text>
        </View>

        <View style={ styles.datosPerfil}>
          <Text style={ styles.h4 }> Agregar contacto: 
            <View style={ styles.btnVerMas}>
              <TouchableOpacity 
                onPress={ () => navigation.navigate('AgregarScreen')}
              >
                <Text style={ styles.texto }> <Icon name="person-add-outline"
                  size={ms(25)} 
                  color="white" /> </Text>
              </TouchableOpacity>
            </View> 
          </Text>
        </View>
        
        <Button 
          title='Login'
          onPress={() => navigation.navigate('LoginScreen')}
        />

        <View>
          <View style={ styles.ButtonCerrar}>
            <TouchableOpacity style={ styles.btnCerrar}
              //onPress={ () => navigation.navigate('')}
            >
                <Text style={ styles.btnTextCerrar }> Cerrar Sesión <Text style={ styles.texto }> <Icon name="exit-outline"
                size={ms(20)} 
                color="white" /> </Text> </Text>
            </TouchableOpacity> 
              </View>
        </View>
      </ScrollView>



    </View>
  )
}

