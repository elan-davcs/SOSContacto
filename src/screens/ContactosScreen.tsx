import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { View, Text, Button, FlatList, Image, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { stylesContact } from '../theme/contactTheme';


interface Props extends StackScreenProps<any, any>{};

export const ContactosScreen = ({ navigation }: Props ) => {
  
  useEffect(() => {
    console.log('ContactosScreen effect');
  }, [])

  const ContactItem = ({ item }) => (
    <View style={stylesContact.item}>
      <View>
        <Text >
          {item.img}
        </Text>
      </View>
      
      <View>
        <Text style={stylesContact.title}>{item.title}</Text>
        <Text style={stylesContact.texto}>{item.texto}</Text>
      </View>
      
      <View>
        <Text>{item.icon}</Text>
      </View>
        
      
    </View>
  );

  return (

    <View>
      <View style={ styles.barra}>
        {/* Agregar la flecha de regreso*/}
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" style={styles.icono}></Icon>
        </TouchableOpacity>
        <Text style={ styles.titleBar }> Contactos </Text>
      </View>

      <View style={ styles.globalMargin}>
      
        <View >
            <View>
              <FlatList
                  data={dataContact}
                  renderItem={ContactItem}
                  keyExtractor={(item) => item.id}
              />
            </View>
        </View>
      
        {/* <Button
          title="Regresar"
          onPress={ () => navigation.pop() }
        />
        <Button
          title="Ir a Página 1"
          onPress={ () => navigation.popToTop() }
        /> */}
      </View>

    </View>
    
  )
}

const dataContact = [
  { id: '1', 
    img: <Image source={require('../assets/images/imgUser.png')} style={stylesContact.iconImg} />,
    title: 'Nombre de contacto',
    texto: <Text style={ stylesContact.texto }> <Text style={ stylesContact.negrita }> ID: </Text> 123 456 789 </Text>,
    icon: <TouchableOpacity>
              <Text>
                <Icon name="trash-outline"
                  size={35} 
                  color="red" />
              </Text>
          </TouchableOpacity>
  },

  { id: '2', 
    title: 'Nombre de contacto',
    img: <Image source={require('../assets/images/imgUser.png')} style={stylesContact.iconImg} />,
    texto: <Text style={ stylesContact.texto }> <Text style={ stylesContact.negrita }> ID: </Text> 123 456 789 </Text>,
    icon: <TouchableOpacity>
              <Text>
                <Icon name="trash-outline"
                  size={35} 
                  color="red" />
              </Text>
          </TouchableOpacity>
  }
  ];

