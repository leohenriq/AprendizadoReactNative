import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import DigiteSeuNome from './components/DigiteSeuNome'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import UsuarioLogado from './components/UsuarioLogado';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import ParImpar from './components/ParImpar';
// import Diferenciar from './components/Diferenciar';
// import ContadorV2 from './components/contador/ContadorV2';
// import Pai from './components/indireta/Pai';
// import Pai from './components/direta/Pai';
// import Contador from './components/Contador';
// import Button from './components/Button';
// import Titulo from './components/Titulo';
// import Aleatorio from './components/Aleatorio';
// import Primeiro from './components/Primeiro';
// import CompPadrao, {Comp1, Comp2} from './components/Multi';
// import MinMax from './components/MinMax';
export default () => (
  <SafeAreaView style={style.App}>
    <DigiteSeuNome />
    {/* 
    <ListaProdutosV2 />
    <ListaProdutos />
    <UsuarioLogado usuario={{ nome: "Leonardo", email: "leo@leo.com" }} />
    <Familia>
      <Membro nome="Leonardo" sobrenome="Henrique" />
      <Membro nome="Marcio" sobrenome="Henrique" />
    </Familia>
    <Familia>
      <Membro nome="Giovanna" sobrenome="Gonçalves" />
      <Membro nome="Lidia" sobrenome="Gonçalves" />
    </Familia>
    <ParImpar num={0} />
    <Diferenciar />
    <ContadorV2 /> 
    <Pai /> 
    <Pai /> 
    <Contador inicial={100} />
    <Contador inicial={100} passo={13} /> 
    <Button /> 
    <Titulo principal="1234" secundario="4321" /> 
    <Aleatorio min={5} max={10} /> */}

    {/*EXPLICAÇÃO:
    passando entre {} é entendido como JS
    portanto, o texto 3 dentro das chaves se torna
    numero e com aspas se torna texto */}
    {/* <MinMax min={3} max={20} />
    <MinMax min="5" max="40" /> */}

    {/* <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
