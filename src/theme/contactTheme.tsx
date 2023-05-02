import { StyleSheet } from "react-native";

export const colores = {
    primary: '#9510C3',
    secondary: '#D800C2',
    green: '#32CD32',
    blue: '#0288D1',
    white: '#F4F4F4',
    gray: '#D3D3D3'
}

export const stylesContact = StyleSheet.create ({ 

    //Diseños de pantalla de ContactosScreen
    item: {
        backgroundColor: colores.gray,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        overflow: 'hidden'
    },
    iconImg: {
        width: 20,
        height: 20,
        resizeMode: 'cover'
        //borderRadius: 20,
        //resizeMode: 'contain'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 0,
        color: colores.secondary
    },
    texto: {
        color: 'black',
        fontSize: 18
    },
    negrita: {
        fontWeight: 'bold',
        color: 'blue'
    },
    
})
