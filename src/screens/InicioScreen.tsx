import React, { useEffect } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "../theme/appTheme";

export const InicioScreen = () => {

    useEffect(() => {
        console.log('InicioScreen effect');
    }, []) 

    return (
        <View style={{flex: 1}}>
            <View style={ styles.barra}>
                <Text style={ styles.titleBar }> Inicio </Text>
            </View>
            <View style={ styles.containermap }>
                <Text style={styles.buttonText}>MAPA</Text>
            </View>
        </View>
    )
}