import React, { Fragment } from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import Estilo from '../estilo'

import Numero from './Numero'
export default class Mega extends React.Component {
    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alterarQtdeNumero = (qtde) => {
        // '+' converte string pra number
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
    }

    // programacao funcional
    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros;
        return nums.map(num => {
            return <Numero key={num} num={num} />
        })
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
                <View style={style.View}>
                    {this.exibirNumeros()}
                </View>
            </Fragment>
        )
    }
}

const style = StyleSheet.create({
    View: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
})