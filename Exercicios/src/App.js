import React from 'react';
import {View, StyleSheet} from 'react-native';
import Pai from './components/indireta/Pai';
// import Pai from './components/direta/Pai';
// import Contador from './components/Contador';
// import Button from './components/Button';
// import Titulo from './components/Titulo';
// import Aleatorio from './components/Aleatorio';
// import Primeiro from './components/Primeiro';
// import CompPadrao, {Comp1, Comp2} from './components/Multi';
// import MinMax from './components/MinMax';
export default () => (
  <View style={style.App}>
    <Pai />
    {/* <Pai /> */}
    {/* <Contador inicial={100} />
    <Contador inicial={100} passo={13} /> */}

    {/* <Button /> */}
    {/* <Titulo principal="1234" secundario="4321" /> */}
    {/* <Aleatorio min={5} max={10} /> */}
    {/* EXPLICAÇÃO:
    passando entre {} é entendido como JS
    portanto, o texto 3 dentro das chaves se torna
    numero e com aspas se torna texto */}
    {/* <MinMax min={3} max={20} />
    <MinMax min="5" max="40" /> */}
    {/* <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </View>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
