import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        marginBottom: 5
    },
    tituloTela:{
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10
    },
    texto:{
        fontWeight:'bold',
        paddingBottom: 10,
        fontSize: 15
    }
    ,
    titulo:{
        flexDirection: 'row',
        paddingTop: 25,
        marginLeft:10,
        
        // justifyContent: 'center'
    },
    tituloEntrada: {
        textAlign:'center',
        fontWeight:'bold',
        marginLeft: 10,

        borderColor: "#000000",
        backgroundColor: '#d3d7de',
        borderWidth: 1,
        borderRadius: 3,
        width: "80%",
    },
    horaButton:{
        marginLeft:10,
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius:3,
        width: 60,
        backgroundColor: "#d3d7de",
        textAlign: 'center',
    
        
    },
    textoHora:{
        fontWeight:'bold',
        textAlign:"center",
        fontSize: 20
    },
    mensagemContainer:{    
        // flexDirection: 'row',
        paddingTop: 25,
        marginLeft:10,
    },
    mensagem:{
        textAlign:'center',
        fontWeight:'bold',
        marginLeft: 50,
        backgroundColor: '#d3d7de',
        borderWidth: 1,
        borderRadius: 3,
        width: "80%",
        borderColor: "#000000",
        borderWidth: 1,
        
    },
    caixaBotoes:{
        flexDirection:'row',
        // borderWidth: 1,
        // borderColor: 'gray',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        height: 100
    },
    iconeSalvar:{
        width: 35,
        height: 35,
        marginRight: 30,
    },
    iconeExcluir:{
        width: 35,
        height: 35,
        marginLeft: 30,
    }
    
});