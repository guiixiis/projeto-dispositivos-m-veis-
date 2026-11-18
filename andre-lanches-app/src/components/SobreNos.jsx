import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { cores } from '../theme';

const DIFERENCIAIS = [
  'Ingredientes frescos, escolhidos todos os dias',
  'Chapa quente e lanche feito na hora',
  'Preços justos que cabem no bolso',
  'Entrega rápida e atendimento de vizinho',
];

export default function SobreNos() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Sobre Nós</Text>

      <Text style={styles.subtitulo}>Nossa história</Text>
      <Text style={styles.texto}>
        Tudo começou em 2010, num carrinho de esquina e com a receita de hambúrguer da
        família. O André servia lanche para os amigos do bairro e, entre uma chapa e
        outra, ganhou fama: quem provava, voltava — e trazia mais gente. Hoje o André
        Lanches é ponto de encontro, mas continua com o mesmo espírito do primeiro dia.
      </Text>

      <Text style={styles.subtitulo}>Missão</Text>
      <Text style={styles.texto}>
        Levar um lanche saboroso, de qualidade e com preço justo para a mesa de todo
        mundo, transformando uma refeição rápida em um momento feliz.
      </Text>

      <Text style={styles.subtitulo}>Nosso diferencial</Text>
      <View style={styles.caixa}>
        {DIFERENCIAIS.map((item) => (
          <Text key={item} style={styles.item}>✔ {item}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 110 },
  titulo: { color: cores.vermelho, fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
  subtitulo: { color: cores.vermelho, fontSize: 20, fontWeight: 'bold', marginTop: 14, marginBottom: 4 },
  texto: { fontSize: 16, lineHeight: 24, color: cores.texto },
  caixa: { backgroundColor: cores.branco, borderRadius: 12, padding: 14, marginTop: 4 },
  item: { fontSize: 15, color: cores.texto, marginVertical: 4 },
});
