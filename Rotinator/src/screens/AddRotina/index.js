import React from 'react';
import { View, Image, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Header from '../Header'
import Sinal from '../../../assets/icone_sinal.png';
import Lixeira from '../../../assets/icone_lixeira.png';
import EmptyCheck from '../../../assets/empty_check.png';

import styles from './styles';

export default function AddRotina() {

    const DATA = [
        {
            id: '1',
            title: 'Estudar APC',
            inicio: '8:00',
            fim: '9:00'
        },
        {
            id: '2',
            title: 'Estudar EDA',
            inicio: '9:00',
            fim: '10:00',
        },
        {
            id: '3',
            title: 'Estudar FSO',
            inicio: '10:00',
            fim: '11:00'
        },
    ];

    function Item({ title, inicio, fim }) {
        return (
            <View style={styles.eventoBox}>
                <TouchableOpacity >
                    <Image source={Lixeira} style={styles.lixeira} />
                </TouchableOpacity>
                <Text style={styles.eventoTitulo}>{title}</Text>
                <View style={styles.eventoPeriodo}>
                    <Text style={styles.eventoInicio}>Inicio: {inicio}</Text>
                    <Text style={styles.eventoFim}>Fim: {fim}</Text>
                </View>
            </View>
        );
    }

    return (
        <View>
            <Header />

            <View style={styles.rotinaContainer}>

                <View style={styles.subHeader}>
                    <Text style={styles.tituloDaPagina}>Adicionar Rotina</Text>

                    <TouchableOpacity>
                        <Image source={Sinal} style={styles.sinal} />
                    </TouchableOpacity>
                </View>

                <View style={styles.textBox}>
                    <Text style={styles.texto}>Título:</Text>
                    <TextInput style={styles.textInputBorder}></TextInput>
                </View>

                <View style={styles.diasBox}>
                    <Text style={[styles.texto, { left: 15 }]}>Dias:</Text>
                    <View style={styles.diasCheck}>
                        <Text style={styles.texto}>SEG</Text>
                        <Image source={EmptyCheck} style={styles.check} />
                    </View>

                    <View style={styles.diasCheck}>
                        <Text style={styles.texto}>TER</Text>
                        <Image source={EmptyCheck} style={styles.check} />
                    </View>

                    <View style={styles.diasCheck}>
                        <Text style={styles.texto}>QUA</Text>
                        <Image source={EmptyCheck} style={styles.check} />
                    </View>

                    <View style={styles.diasCheck}>
                        <Text style={styles.texto}>QUI</Text>
                        <Image source={EmptyCheck} style={styles.check} />
                    </View>

                    <View style={styles.diasCheck}>
                        <Text style={styles.texto}>SEX</Text>
                        <Image source={EmptyCheck} style={styles.check} />
                    </View>

                    <View style={styles.diasCheck}>
                        <Text style={styles.texto}>SAB</Text>
                        <Image source={EmptyCheck} style={styles.check} />
                    </View>

                    <View style={styles.diasCheck}>
                        <Text style={styles.texto}>DOM</Text>
                        <Image source={EmptyCheck} style={styles.check} />
                    </View>
                </View>

                <FlatList
                    style={styles.lista}
                    showsVerticalScrollIndicator={false}
                    data={DATA}
                    renderItem={
                        ({ item }) => <Item title={item.title} inicio={item.inicio} fim={item.fim} />
                    }
                    keyExtractor={item => item.id}
                />
            </View>

        </View>
    );
}