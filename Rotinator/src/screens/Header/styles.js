import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    cabecalho: {
        marginTop: 20,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#000000',
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

