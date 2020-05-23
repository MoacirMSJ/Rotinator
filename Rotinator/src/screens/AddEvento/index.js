import React, {useState,useEffect } from 'react';
import { View, Image, Text,TextInput,ScrollView, Platform,TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../Header';
import perto from '../../../assets/perto.png';
import verifica from '../../../assets/verifica.png';

import styles from './styles';

export default function AddEvento() {
    const [titulo, useTitulo] = useState('padrão');
    const [notificacaoInicio, setNotificacaoInicio] =useState('');
    const [notificacaoFinal, setNotificacaoFinal] = useState('');
    const [date, setDate] = useState(new Date(1598051730000));
    const [dateFinal, setDateFinal] = useState(new Date(1598051730000));
    const [opcao, setOpcao] = useState(1);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [templateI, setTemplateI] = useState('00:00');
    const [templateF, setTemplateF] = useState('00:00');


    useEffect(() => {
        let hora = String(date.getHours()).length ===1? '0'+ String(date.getHours()) : String(date.getHours());
        let min = String(date.getMinutes()).length ===1 ? '0'+String(date.getMinutes()) : String(date.getMinutes());
        let horaf = String(dateFinal.getHours()).length ===1? '0'+ String(dateFinal.getHours()) : String(dateFinal.getHours());
        let minf = String(dateFinal.getMinutes()).length ===1 ? '0'+String(dateFinal.getMinutes()) : String(dateFinal.getMinutes());
        setTemplateI(hora +':'+ min);
        setTemplateF(horaf +':'+ minf);
    },[date, dateFinal]);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        if(opcao === 1){
            setDate(currentDate);
            setOpcao(2);
        }
        if(opcao===2){
            setDateFinal(currentDate);
            setOpcao(1);
        }
        
    };
    
    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };
    const mostrarRelogio =()=>{
        showMode('time');
    };
    const mostrarRelogio2 =()=>{
        setOpcao(2)
        showMode('time');
    };
    
    function Relogio(){
        if(opcao==1){
            return(
                <DateTimePicker
                testID="hora"
                timeZoneOffsetInMinutes={0}
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
            )
        }
        else{
            return(
                <DateTimePicker
                testID="hora"
                timeZoneOffsetInMinutes={0}
                value={dateFinal}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
            )
        }
        
    }

    function salvar(){
        alert("salvar")
    }
    function excluir(){
        alert("excluir")
    }
    return (
            <ScrollView style={styles.container} >
                <Header />
                    <Text style={styles.tituloTela}>Adicionar Evento</Text>
                <View style={styles.titulo}>
                    <Text style={styles.texto}>Título:</Text>
                    <TextInput
                    style={styles.tituloEntrada}
                        onChangeText= {text => useTitulo(text)}
                        value= {titulo}
                        maxLength={25}
                    />
                </View>
                <View style={styles.titulo}>
                    <Text style={styles.texto}>Inicio:</Text>                
                    < TouchableOpacity style={styles.horaButton} onPress={mostrarRelogio} >
                        <Text style={styles.textoHora}>{templateI}</Text>    
                    </ TouchableOpacity>
                </View>
                {show && Relogio()}
                <View style={styles.mensagemContainer}>
                    <Text style={styles.texto}>Notificação inicial</Text>
                    <TextInput
                    style={styles.mensagem}
                        onChangeText= {text => setNotificacaoInicio(text)}
                        value= {notificacaoInicio}
                        maxLength={35}
                    />
                </View>
                <View style={styles.titulo}>
                    <Text style={styles.texto}>Final:</Text>                
                    < TouchableOpacity style={styles.horaButton} onPress={mostrarRelogio2}>
                        <Text style={styles.textoHora}>{templateF}</Text>    
                    </ TouchableOpacity>
                </View>
                <View style={styles.mensagemContainer}>
                    <Text style={styles.texto}>Notificação final</Text>
                    <TextInput
                    style={styles.mensagem}
                        onChangeText= {text => setNotificacaoFinal(text)}
                        value= {notificacaoFinal}
                        maxLength={35}
                    />
                </View>
                <View style={styles.caixaBotoes}>

                    < TouchableOpacity onPress={excluir}>
                            <Image style={styles.iconeSalvar} source={perto}/>
                    </ TouchableOpacity>
                    < TouchableOpacity onPress={salvar}>
                            <Image style={styles.iconeExcluir} source={verifica}/>
                    </ TouchableOpacity>
                </View>
            </ScrollView>

    );
}