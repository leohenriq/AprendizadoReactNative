import React from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo'
export default class Mega extends React.Component {


    // funcao q vai renderizar os itens na tela
    render() {
        return (
            <Text style={Estilo.txtG}>
                Gerador de Mega-Sena
                {this.props.qtdeNumeros}
            </Text>
        )
    }
}