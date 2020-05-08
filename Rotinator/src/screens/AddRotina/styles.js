import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    rotinaContainer: {
        marginTop: 0
    },

    subHeader: {
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight - 10,
        justifyContent: 'space-between',
    },

    tituloDaPagina: {
        fontWeight: 'bold',
        fontSize: 15,
        left: 15,
        textAlign: 'center'
    },

    texto: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: Constants.statusBarHeight - 10,
    },

    textInputBorder: {
        borderColor: '#000000',
        borderWidth: 1,
        width: '80%',
        paddingTop: 5,
        paddingBottom: 5,
        left: 5,
    },

    textBox: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
    },

    diasBox: {
        flexDirection: 'row',
    },

    diasCheck: {
        left: 45,
        paddingLeft: 4,
        paddingRight: 4,
    },

    check: {
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
    },

    lixeira: {
        position: 'absolute',
        right: 0,
        height: 25,
        width: 20
    },

    sinal: {
        position: 'absolute',
        right: 15,
        // top: 5,
    },

    eventoBox: {
        borderRadius: 5,
        backgroundColor: '#DDDDDD',
        borderColor: '#000000',
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        width: '90%',
        left: '5%',
    },

    eventoTitulo: {
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 35,
        fontSize: 18,
    },

    eventoPeriodo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    eventoInicio: {

    },

    eventoFim: {

    },

    lista: {
        height: '80%',
        marginTop: 15,
    },

});