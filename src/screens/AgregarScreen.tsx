import React, { useEffect } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any>{};

export const AgregarScreen = ({navigation}: Props ) => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Agregar Contacto', //Cambia el titulo de la PantallaScreen
    })
  }, [])

  return (

    <View>
      <View style={ styles.barra}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" style={styles.icono}></Icon>
        </TouchableOpacity>
        <Text style={ styles.titleBar }> Agregar Contacto </Text>
      </View>

      <View style={ styles.globalMargin}>

        <View>
          <Text style={ styles.h4login }> ID de Contacto: </Text>
            <TextInput placeholder="000-000-001" style={ styles.h5login } keyboardType='numeric'/>
        </View>

        <View>
          <Text style={ styles.h4login }> Nombre: </Text>
            <TextInput style={ styles.h5login } editable={false} />
        </View>

        <View>
          <Text style={ styles.h4login }> Celular: </Text>
            <TextInput style={ styles.h5login } editable={false} />
        </View>

        <View>
          <View style={ styles.ButtonCerrar}>
            
            <TouchableOpacity style={ styles.btnAdd}
              //onPress={ () => navigation.navigate('')}
            >
              <View>
                <Text style={ styles.btnTextCerrar }> Agregar </Text>
              </View>
              <View>
                <Text style={ styles.texto }> 
                  <Icon name="person-add-outline"
                    size={25} 
                    color="white" />
                </Text>
              </View>
            </TouchableOpacity> 

          </View>
        </View>
    </View>
    </View>
    
  )
}

