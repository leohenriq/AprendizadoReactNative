import React, { Fragment } from 'react';
import { Text, TextInput, Button } from 'react-native';
import Estilo from '../estilo'
export default class Mega extends React.Component {
    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alterarQtdeNumero = (qtde) => {
        // '+' converte string pra number
        this.setstate({ qtdeNumeros: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    // funcao q vai renderizar os itens na tela
    render() {
        return (
            <Fragment>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Qtde de Números"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                />
                <Button title="Gerar" onPress={this.gerarNumeros} />
                <Text>
                    {this.state.numeros.join(',')}
                </Text>
            </Fragment>
        )
    }
}