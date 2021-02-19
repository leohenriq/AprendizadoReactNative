import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Estilo from './estilo';
export default props => {
    const [nome, setNome] = useState()
    return (
        <View>
            <TextInput
                placeholder="Digite seu Nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}