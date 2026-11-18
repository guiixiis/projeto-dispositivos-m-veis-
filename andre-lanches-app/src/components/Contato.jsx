import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Alert, ScrollView,
  KeyboardAvoidingView, Platform, StyleSheet,
} from 'react-native';
import { cores } from '../theme';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviar = () => {
    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      Alert.alert('Campos obrigatórios', 'Preencha nome, e-mail/WhatsApp e mensagem.');
      return;
    }
    Alert.alert('Mensagem enviada!', `Obrigado, ${nome.trim()}! Recebemos sua mensagem e responderemos em breve.`);
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.titulo}>Contato</Text>

        <Text style={styles.rotulo}>Nome</Text>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Seu nome" />

        <Text style={styles.rotulo}>E-mail ou WhatsApp</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="voce@email.com ou (11) 99999-0000"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.rotulo}>Mensagem</Text>
        <TextInput
          style={[styles.input, styles.mensagem]}
          value={mensagem}
          onChangeText={setMensagem}
          placeholder="Escreva sua mensagem"
          multiline
          textAlignVertical="top"
        />

        <TouchableOpacity style={styles.botao} onPress={enviar} activeOpacity={0.8}>
          <Text style={styles.botaoTexto}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { padding: 16, paddingBottom: 110 },
  titulo: { color: cores.vermelho, fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
  rotulo: { color: cores.texto, fontWeight: 'bold', marginTop: 12, marginBottom: 4 },
  input: {
    backgroundColor: cores.branco,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d9c06a',
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  mensagem: { height: 120 },
  botao: { backgroundColor: cores.vermelho, borderRadius: 8, paddingVertical: 14, alignItems: 'center', marginTop: 20 },
  botaoTexto: { color: cores.branco, fontWeight: 'bold', fontSize: 17 },
});
