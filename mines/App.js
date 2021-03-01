import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import params from './src/params'
import MineField from './src/components/MineField'
import { createMinedBoard } from './src/functions'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(cols, rows, this.minesAmount())
    }
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.instructions}>Tamanho da grade:
        {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>

        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  welcome: {
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
})