import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    titulo:{
        flexDirection: 'row',
        paddingTop: 10,
        marginLeft:10,
        // justifyContent: 'center'
    },
    tituloEntrada: {
        textAlign:'center',
        fontWeight:'bold',
        marginLeft: 10,
        borderColor: 'gray',
        backgroundColor: '#d3d7de',
        borderWidth: 1,
        borderRadius: 3,
        width: "80%"
    },
    horaButton:{
        marginLeft:10,
        borderColor: "#000000",
        borderWidth: 1,
        width: 60,
        backgroundColor: "#d3d7de",
        textAlign: 'center'
    },
    textoHora:{
        fontWeight:'bold',
        textAlign:"center"
    },
    mensagemContainer:{
        flexDirection: 'row',
        paddingTop: 10,
        marginLeft:10,
    },
    mensagem:{
        textAlign:'center',
        fontWeight:'bold',
        marginLeft: 10,
        borderColor: 'gray',
        backgroundColor: '#d3d7de',
        borderWidth: 1,
        borderRadius: 3,
        width: "60%",
        
    }
    
});