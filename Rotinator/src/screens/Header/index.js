import React from 'react';
import { View, Text, Image } from 'react-native';
import icone from '../../../assets/icone.png';

import styles from './styles';

export default function Header() {

    return (
        <View style={styles.cabecalho} >
            <Image source={icone} style={styles.cabecalhoLogo} />
            <Text style={styles.cabecalhoTexto}>Rotinator</Text>
        </View>
    );

}

