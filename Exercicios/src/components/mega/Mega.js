import React, { Fragment } from 'react';
import { Text, TextInput } from 'react-native';
import Estilo from '../estilo'
export default class Mega extends React.Component {
    state = {
        qtdeNumeros: this.props.qtdeNumeros
    }

    alterarQtdeNumero(qtde) {
        this.setstate({ qtdeNumeros: qtde })
    }

    // funcao q vai renderizar os itens na tela
    render() {
        return (
            <Fragment>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena
                {this.state.qtdeNumeros}
                </Text>
                <TextInput
                    placeholder="Qtde de Números"
                    value={this.state.qtdeNumeros}
                    onChangeText={this.alterarQtdeNumero}
                />
            </Fragment>
        )
    }
}