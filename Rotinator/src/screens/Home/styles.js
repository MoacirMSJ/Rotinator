import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    iconeSinal: {
        right: 15
    },

    identificacao: {
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight - 10,
        justifyContent: 'space-between',
    },

    lista: {
        height: '80%',
        marginTop: 15,
    },

    lixeira: {
        position: 'absolute',
        right: 0,
        height: 25,
        width: 20
    },

    rotinaBox: {
        borderRadius: 5,
        backgroundColor: '#DDDDDD',
        borderColor: '#000000',
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        width: '90%',
        left: '5%',
    },

    rotinaTitulo: {
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        fontSize: 20,
    },

    rotinaDias: {

    },

    texto: {
        // color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15,
        left: 15,
        textAlign: 'center'
    },
});