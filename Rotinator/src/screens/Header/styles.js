import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    cabecalho: {
        marginTop: 20,
        flexDirection: 'row',
        height: 70,
        justifyContent: 'center',
        backgroundColor: '#000000',
        textAlign: 'center',
    },

    cabecalhoLogo: {
        position: 'absolute',
        left: 10,
        width: 50,
        height: 50,
        marginTop: 10,
        marginBottom: 10,
    },

    cabecalhoTexto: {
        alignItems: 'center',
        textAlign: 'center',
        color: '#00f2fe',
        fontWeight: "bold",
        fontSize: 36,
        marginTop: 10,
    }
});

