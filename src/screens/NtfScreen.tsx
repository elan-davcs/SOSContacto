import React, { useEffect } from "react";
import { Text, View, FlatList,Image } from "react-native";
import { styles } from "../theme/appTheme";
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";

export const NtfScreen = () => {

    useEffect(() => {
        console.log('NtfScreen effect');
    }, [])


  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title2}>
        <Text>
          {item.img}
        </Text>
        {item.title}
      </Text>
        <Text>{item.texto}</Text>
    </View>
    /*<TouchableOpacity style={styles.item}>
      <Text style={styles.title2}>
        <Text>
          {item.img}
        </Text>
        {item.title}
      </Text>
        <Text>{item.texto}</Text>
    </TouchableOpacity>*/
  );
    return (
        <View >
            <View style={ styles.barra}>
                <Text style={ styles.titleBar }> Notificaciones </Text>
            </View>
            <View style={ styles.globalMargin}>
              <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
              />
            </View>
        </View>
    )
    
}
const data = [
  { id: '1',
    title: '!Alerta¡',
    img: <Image source={require('../assets/images/856332.png')} style={styles.imges}/>,
    texto: <Text style={ styles.texto }> <Text style={ styles.negrita }>Nombre de Usuario</Text> se encuentra en peligro</Text> 
  },
  { id: '2', 
    title: 'Confirmar Solicitud',
    img: <Image source={require('../assets/images/2058184.png')} style={styles.imges}/>,
    texto: <Text style={ styles.texto }> <Text style={ styles.negrita }>Nombre de Usuario</Text> te ha mandado una solicitud</Text> 
  },
  { id: '3', title: 'Elemento 3' },
  ];
