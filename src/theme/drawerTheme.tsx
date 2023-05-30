import { StyleSheet } from "react-native";

export const stylesDrawer = StyleSheet.create({
    avatar: {
        width: 80,
        height: 80,
        marginBottom: 10,
        borderRadius: 100
    },
    avatarText: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Martel Sans'
    },
    menuContainer: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 10
    },
    menuButton: {
        flexDirection: "row",
        marginVertical: 10,
    },
    menuText: {
        color: "black",
        fontSize: 15,
        fontFamily: 'Martel Sans',
        marginLeft: 5
    },
});