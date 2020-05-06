import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import Header from '../Header';
import Sinal from '../../../assets/icone_sinal.png';
import Lixeira from '../../../assets/icone_lixeira.png';
import styles from './styles';

export default function Home() {

    const DATA = [
        {
            id: '1',
            title: 'Estudo',
            dias: 'ter,quar'
        },
        {
            id: '2',
            title: 'Jogos',
            dias: 'ter,quar'
        },
        {
            id: '3',
            title: 'Esportes',
            dias: 'ter,quar'
        },
        {
            id: '4',
            title: 'Estudo',
            dias: 'ter,quar'
        },
        {
            id: '5',
            title: 'Jogos',
            dias: 'ter,quar'
        },
        {
            id: '6',
            title: 'Esportes',
            dias: 'ter,quar'
        },
        {
            id: '7',
            title: 'Estudo',
            dias: 'ter,quar'
        },
        {
            id: '8',
            title: 'Jogos',
            dias: 'ter,quar'
        },
        {
            id: '9',
            title: 'Esportes',
            dias: 'ter,quar'
        },
        {
            id: '10',
            title: 'batata',
            dias: 'ter,quar'
        }
    ];

    function Item({ title, Dias }) {
        return (
            <View style={styles.rotinaBox}>
                <TouchableOpacity >
                    <Image source={Lixeira} style={styles.lixeira} />
                </TouchableOpacity>
                <Text style={styles.rotinaTitulo}>{title}</Text>
                <Text style={styles.rotinaDias}>Dia(s):{Dias}</Text>
            </View>
        );
    }



    return (
        <View>
            <Header />
            <View style={styles.identificacao}>
                <Text style={styles.texto}>Minhas Rotinas</Text>
                <TouchableOpacity>
                    <Image source={Sinal} style={styles.iconeSinal} />
                </TouchableOpacity>
            </View>

            <FlatList
                style={styles.lista}
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} Dias={item.dias} />}
                keyExtractor={item => item.id}
            />

        </View>
    );

}