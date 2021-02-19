import React, { Fragment } from 'react';
import { Text } from 'react-native';
import Estilo from '../estilo';
import produtos from './produtos'
export default props => {
    function lista() {
        return produtos.map(p => {
            return (
                <Text key={p.id}>
                    {p.id}) {p.nome} custa R$ {p.preco}
                </Text>
            )
        })
    }
    return (
        <Fragment>
            <Text style={Estilo.txtG}>Lista de Produtos</Text>
            {lista()}
        </Fragment>
    )
}