import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { cores } from '../theme';

export default function BannerPromocao({ titulo, descricao, preco }) {
  return (
    <ImageBackground
      source={require('../../assets/images/promocao.jpg')}
      style={styles.banner}
      imageStyle={styles.imagem}
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.preco}>{preco}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  banner: { height: 150, marginHorizontal: 12, marginTop: 12, borderRadius: 12, overflow: 'hidden' },
  imagem: { borderRadius: 12 },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    padding: 14,
    justifyContent: 'center',
  },
  titulo: { color: cores.branco, fontSize: 30, fontWeight: 'bold' },
  descricao: { color: cores.branco, fontSize: 16, marginTop: 2 },
  preco: { color: cores.fundo, fontSize: 26, fontWeight: 'bold', marginTop: 6 },
});
