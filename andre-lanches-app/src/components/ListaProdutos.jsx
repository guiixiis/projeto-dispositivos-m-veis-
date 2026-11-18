import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { cores } from '../theme';
import { produtos, formatarPreco } from '../data/produtos';
import BannerPromocao from './BannerPromocao';

function Cabecalho() {
  return (
    <View>
      <BannerPromocao
        titulo="Promoção!"
        descricao="X-Salada + Batata"
        preco="por apenas R$ 9,90"
      />
      <Text style={styles.secao}>Nossos Lanches</Text>
    </View>
  );
}

function ItemProduto({ item }) {
  return (
    <View style={styles.card}>
      <Image source={item.imagem} style={styles.imagem} />
      <View style={styles.info}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
        <Text style={styles.preco}>{formatarPreco(item.preco)}</Text>
      </View>
    </View>
  );
}

export default function ListaProdutos() {
  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ItemProduto item={item} />}
      ListHeaderComponent={Cabecalho}
      contentContainerStyle={styles.lista}
    />
  );
}

const styles = StyleSheet.create({
  lista: { paddingBottom: 110 },
  secao: {
    color: cores.vermelho,
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 12,
    marginTop: 16,
    marginBottom: 6,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: cores.branco,
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
  },
  imagem: { width: 100, height: 100 },
  info: { flex: 1, padding: 10, justifyContent: 'space-between' },
  nome: { fontSize: 17, fontWeight: 'bold', color: cores.texto },
  descricao: { fontSize: 13, color: '#6b5a2a' },
  preco: { fontSize: 17, fontWeight: 'bold', color: cores.vermelho },
});
