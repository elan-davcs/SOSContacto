import { StyleSheet } from "react-native";
import { ms } from "react-native-size-matters";

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
    margin: 20
  },
  error: {
    color: colores.blue,

  },
  title: {
    fontSize: 30,
    marginBottom: 10
  },
  nav: {
    fontSize: 20
  },
  barra: {
    backgroundColor: colores.primary
  },
  titleBar: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 15,
    color: 'white'
  },
  h3: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colores.secondary
  },
  h4: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
    color: colores.secondary
  },
  h5: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
    color: 'black'
  },
  //diseños para los campos del login
  h4login: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
    marginLeft: 5,
    padding: 10,
    color: '#D800C2'
  },
  h5login: {//estilo para los campos de entrada del login

    borderWidth: 1.8,
    borderRadius: 15,
    borderColor: '#E35FC4',
    fontSize: 18,
    padding: 8,
    backgroundColor: '#e3e2e2',
    fontWeight: 'bold',
    margin: 2,
    color: 'black'
  },
  h6login: {//estilo para las letras azules del login

    color: '#0075FF'
  },//estilo para el texto de registarse
  btnBox: {
    fontSize: 30,
    marginTop: 15,
    borderRadius: 15,
    justifyContent: 'center',
    //backgroundColor: colores.blue,
    alignItems: "center",
    alignContent: "center",
    paddingHorizontal: 3,
    backgroundColor: '#c1c4c7',
    paddingVertical: 3,
  },
  h6logintext: {

    fontWeight: 'bold',
    alignItems: "center",
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 15,
    margin: 5
  },
  ingresar: {
    fontSize: 30,
    marginTop: 15,
    width: 250,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: colores.blue,
    alignItems: "center",
    alignContent: "center"
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
    width: 340,
    height: 340,
    borderRadius: 170,
    backgroundColor: colores.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {

    fontSize: 50,
    color: 'white',
    fontWeight: 'bold'
  },
  buttonIngresar: {
    padding: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  containerButton: {
    margin: 65,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 40,
    color: colores.secondary
  },

  //Diseños de Screen Notificaciones
  item: {
    backgroundColor: '#D3D3D3',
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 0,
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
    width: 60,
    height: 23,
    borderRadius: 5,
    backgroundColor: colores.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14
  },
  btnTextCerrar: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  },
  btnCerrar: {
    width: 150,
    height: 50,
    padding: 4,
    borderRadius: 5,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ButtonCerrar: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 170,
    height: 170,
  },
  datosPerfil: {
    padding: 8
  },

  //Ventana de AgregarScreen
  btnAdd: {
    width: 150,
    height: 50,
    padding: 4,
    borderRadius: 5,
    backgroundColor: colores.blue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  //estilos mejorados para el btn de sign in de google
  btngoogle: {
    justifyContent: 'center',
    alignItems: "center",
    fontSize: 30,
    marginTop: 15,
    width: 250,
    borderRadius: 15,

    backgroundColor: colores.blue,

  },
  btngoogletext: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    textShadowColor: 'rgba(255, 0, 255, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 0,
    backgroundImage: 'linear-gradient(to left, purple, pink)',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
})