import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { use, useState } from 'react';

import styles from './styles';


export default function CadastroAluno() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [fone, setFone] = useState('');
  const [dataNasc, setDataNasc] = useState('');

  const maskTelefone = (value: string) => {
    let v = value.replace(/\D/g, ''); // Remove tudo que não é dígito

    if (v.length > 11) v = v.slice(0, 11); // Limita a 11 dígitos
    
    if (v.length > 6) {
      return v.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Formato (XX) XXXXX-XXXX
    }
    else if (v.length > 2) {
      return v.replace(/(\d{2})(\d{0,5})/, '($1) $2'); // Formato (XX) XXXXX
    }
    else return v;
  }

  const maskDataNasc = (value: string) => {
    let v = value.replace(/\D/g, ''); // Remove tudo que não é dígito

    if (v.length > 8) v = v.slice(0, 8); // Limita a 8 dígitos

    if (v.length > 4) {
      return v.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3'); // Formato DD/MM/YYYY
    }
    else return v;
  }  

  return (
    <View style={styles.container}> 

      <Text style={styles.titulo}>Cadastro de Aluno</Text>

      <TextInput 
      style={styles.input}
      placeholder="Nome" 
      value={nome}
      onChangeText={setNome}
      />

      <TextInput 
      style={styles.input}
      placeholder="Curso" 
      value={curso}
      onChangeText={setCurso}
      />

      <TextInput
      style={styles.input}
      placeholder="Telefone" 
      value={fone}
      keyboardType='phone-pad'
      onChangeText={(text) => setFone(maskTelefone(text))}
      />

      <TextInput 
      style={styles.input}
      placeholder="Data de Nascimento" 
      value={dataNasc}
      keyboardType='numeric'
      onChangeText={(text) => setDataNasc(maskDataNasc(text))}
      />
    </View>
  );
}