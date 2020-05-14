import React, {useState,useEffect } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../Header'

import styles from './styles';

export default function AddEvento() {
    const [titulo, useTitulo] = useState('padrão');
    const [inicio, setInicioHora] = useState();
    const [notificacaoInicio, setNotificacaoInicio] =useState('');
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [template, setTemplate] = useState('00:00');
    const aux = "balaba";
    // const [inicio, setInicioHora] = useState();
    // const [titulo, useTitulo] = useState('padrão');
    // const [titulo, useTitulo] = useState('padrão');
    useEffect(() => {
        let hora = String(date.getHours()).length ===1? '0'+ String(date.getHours()) : String(date.getHours());
        let min = String(date.getMinutes()).length ===1 ? '0'+String(date.getMinutes()) : String(date.getMinutes());
        setTemplate(hora +':'+ min);
    },[date]);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    
      const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
      };
    const mostrarRelogio = () => {
        showMode('time');
      };

    return (
        <View>
            <Header />
                <Text style={styles.container}>Adicionar Evento</Text>
            <View style={styles.titulo}>
                <Text>Titulo:</Text>
                <TextInput
                 style={styles.tituloEntrada}
                    onChangeText= {text => useTitulo(text)}
                    value= {titulo}
                    maxLength={25}
                />
            </View>
            <View style={styles.titulo}>
                <Text>Inicio:</Text>                
                < TouchableOpacity style={styles.horaButton} onPress={mostrarRelogio}>
                    <Text style={styles.textoHora}>{template}</Text>    
                </ TouchableOpacity>
            </View>
            {show && (
                <DateTimePicker
                testID="hora"
                timeZoneOffsetInMinutes={0}
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                />)}
            <View style={styles.mensagemContainer}>
                <Text>Notificacao inicial:</Text>
                <TextInput
                 style={styles.mensagem}
                    onChangeText= {text => setNotificacaoInicio(text)}
                    value= {notificacaoInicio}
                    maxLength={35}
                />
            </View>
            <View>
                <Text>Final:</Text>
            </View>

        </View>
    );
}