import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { cores } from '../theme';

const ABAS = [
  { id: 'lanches', rotulo: 'Lanches' },
  { id: 'sobre', rotulo: 'Sobre Nós' },
  { id: 'contato', rotulo: 'Contato' },
];

export default function Header({ telaAtiva, onNavegar }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoLinha}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.titulo}>André Lanches</Text>
      </View>
      <View style={styles.menu}>
        {ABAS.map((aba) => {
          const ativa = aba.id === telaAtiva;
          return (
            <TouchableOpacity
              key={aba.id}
              style={[styles.botao, ativa && styles.botaoAtivo]}
              onPress={() => onNavegar(aba.id)}
              activeOpacity={0.7}
            >
              <Text style={[styles.botaoTexto, ativa && styles.botaoTextoAtivo]}>{aba.rotulo}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: cores.fundo,
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: cores.vermelho,
  },
  logoLinha: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  logo: { width: 48, height: 48, marginRight: 10 },
  titulo: { color: cores.vermelho, fontSize: 26, fontWeight: 'bold' },
  menu: { flexDirection: 'row', justifyContent: 'space-between' },
  botao: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: cores.branco,
    alignItems: 'center',
  },
  botaoAtivo: { backgroundColor: cores.vermelho },
  botaoTexto: { color: cores.vermelho, fontWeight: 'bold', fontSize: 14 },
  botaoTextoAtivo: { color: cores.branco },
});
