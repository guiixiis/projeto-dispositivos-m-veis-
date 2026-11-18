import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, Alert, StyleSheet } from 'react-native';
import { cores, TELEFONE_EXIBIDO, TELEFONE_TEL } from '../theme';

export default function EntregaFlutuante() {
  const ligar = () => {
    Linking.openURL(TELEFONE_TEL).catch(() =>
      Alert.alert('Não foi possível ligar', `Ligue manualmente para ${TELEFONE_EXIBIDO}.`)
    );
  };

  return (
    <TouchableOpacity style={styles.barra} onPress={ligar} activeOpacity={0.85}>
      <View>
        <Text style={styles.telefone}>{TELEFONE_EXIBIDO}</Text>
        <Text style={styles.texto}>Entregamos na sua casa! Toque e peça</Text>
      </View>
      <Image source={require('../../assets/images/telefone.png')} style={styles.icone} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  barra: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 12,
    backgroundColor: cores.vermelho,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 6,
  },
  telefone: { color: cores.branco, fontSize: 20, fontWeight: 'bold' },
  texto: { color: cores.fundo, fontSize: 13 },
  icone: { width: 44, height: 44, borderRadius: 22 },
});
