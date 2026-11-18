import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { cores } from './src/theme';
import Header from './src/components/Header';
import ListaProdutos from './src/components/ListaProdutos';
import SobreNos from './src/components/SobreNos';
import Contato from './src/components/Contato';
import EntregaFlutuante from './src/components/EntregaFlutuante';

export default function App() {
  const [tela, setTela] = useState('lanches');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe}>
        <StatusBar style="dark" />
        <Header telaAtiva={tela} onNavegar={setTela} />
        <View style={styles.conteudo}>
          {tela === 'lanches' && <ListaProdutos />}
          {tela === 'sobre' && <SobreNos />}
          {tela === 'contato' && <Contato />}
        </View>
        <EntregaFlutuante />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: cores.fundo },
  conteudo: { flex: 1 },
});
