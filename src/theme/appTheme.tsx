import { StyleSheet } from "react-native";
import { ms } from 'react-native-size-matters';
import { white } from "react-native-paper/lib/typescript/src/styles/themes/v2/colors";

export const colores = {
    primary: '#9510C3',
    secondary: '#D800C2',
    green: '#32CD32',
    blue: '#0288D1',
    white: '#F4F4F4'
}

export const styles = StyleSheet.create({
    globalMargin: {
        //marginHorizontal: 15
        margin: ms(20)
    },
    title: {
        fontSize: ms(30),
        marginBottom: ms(10)
    },
    nav:{
        fontSize: ms(20)
    },
    icono:{
      fontSize: ms(35),
      color: 'white',
      justifyContent: 'center',
      marginTop: ms(5),
      left:ms(20),
    },
    barra: {
        backgroundColor: colores.primary,
        flexDirection: 'row'
    },
    titleBar: {
        fontSize: ms(23),
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
        flex: ms(2),
        margin: ms(5),
        color: 'white'
    },
    h3: {
        fontSize: ms(22),
        fontWeight: 'bold',
        textAlign: 'center',
        color: colores.secondary
    },
    h4: {
        fontSize: ms(18),
        fontWeight: 'bold',
        margin: ms(5),
        color: colores.secondary
    },
    h5: {
      fontSize: ms(18),
      fontWeight: 'bold',
      margin: ms(5),
      color: 'black'
  },
  //diseños para los campos del login
    h4login: {
      fontSize: ms(18),
      fontWeight: 'bold',
      margin: ms(5),
      marginLeft: ms(5),
      padding: ms(10),
      color: '#D800C2'
  },
    h5login: {//estilo para los campos de entrada del login

      borderWidth: ms(1.8), 
      borderRadius: ms(15), 
      borderColor: '#E35FC4',
      fontSize: ms(18),
      padding: ms(8),
      backgroundColor: '#e3e2e2',
      fontWeight: 'bold',
      margin: ms(2),
      color: 'black'
  },
    h6login: {//estilo para las letras azules del login

      color: '#0075FF'
  },//estilo para el texto de registarse
    h6logintext: {

      fontWeight: 'bold',
      alignItems: "center",
      justifyContent: 'center',
      textAlign: 'center',
      marginTop: ms(15),
      fontSize: ms(15),
      margin: ms(5)
  },
    ingresar: {

      fontSize: ms(30),
      marginTop: ms(15),
      width: ms(250),
      borderRadius: ms(15),
      justifyContent: 'center',
      backgroundColor: colores.blue,
      alignItems: "center",
  },
    btningresar: {
      justifyContent: 'center',
      alignItems: "center",
},
datos: {
  margin: 15
},
    //Diseños de Tab Inicio
    circularButton: {
        width: ms(340),
        height: ms(340),
        borderRadius: ms(170),
        backgroundColor: colores.primary,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {

        fontSize: ms(50),
        color: 'white',
        fontWeight: 'bold'
      },
      buttonIngresar: {
        padding: ms(10),
        fontSize: ms(20),
        color: 'white',
        fontWeight: 'bold'
      },
      containerButton: {
        margin: ms(65),
        justifyContent: 'center',
        alignItems: 'center'
      },
      subTitle: {
        fontSize: ms(25),
        fontWeight: 'bold',
        textAlign: 'center',
        margin: ms(30),
        color: colores.secondary
      },

      //Diseños de Screen Notificaciones 
      //title2 es para los iconos de los icnons
    item: {
      backgroundColor: '#D3D3D3',
      padding: ms(15),
      marginVertical: ms(10),
      marginHorizontal: ms(20),
      borderRadius: ms(20)
    },
    //es para los iconos de las notificaciones
    imges: {
      width: ms(40), 
      height: ms(40)
    },
    title2: {
      fontSize: ms(18),
      fontWeight: 'bold',
      margin: ms(0),
      color: colores.secondary
    },
    negrita: {
      fontWeight: 'bold',
    },
    texto: {
      color: 'black'
    },
    //Diseño de perfil
    btnVerMas: {
      width: ms(80),
      height: ms(30),
      padding: ms(1),
      borderRadius: ms(5),
      backgroundColor: colores.blue,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnText: {
      color: 'white',
      textAlign: 'center',
      fontSize: ms(14)
    },
    btnTextCerrar: {
      color: 'white',
      textAlign: 'center',
      padding: ms(3),
      fontSize: ms(16)
    },
    btnCerrar: {
      width: ms(160),
      height: ms(50),
      margin: ms(15),
      borderRadius: ms(5),
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center'
    },
    ButtonCerrar: {
      margin: ms(20),
      justifyContent: 'center',
      alignItems: 'center'
    },
    container: {
      marginBottom: ms(15),
      justifyContent: 'center',
      alignItems: 'center',
    },
    //es el contenedor del mapa
    containermap: {
      justifyContent: 'center',
      backgroundColor:'#b3b4b6',
      alignItems:'center',
      marginTop:ms(80),
      marginHorizontal:ms(15),
      margin:ms(20),
      paddingVertical:ms(180)
    },
    image: {
      width: ms(170),
      height: ms(170),
    },
    datosPerfil:{
      padding: ms(8)
    },
    //Ventana de AgregarScreen
    btnAdd: {
      width: ms(150),
      height: ms(50),
      padding: ms(10),
      borderRadius: ms(5),
      backgroundColor: colores.blue,
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center'
    }
})