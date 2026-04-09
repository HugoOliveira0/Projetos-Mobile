import React, { useState } from "react";
import { Alert, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";


type Operacao = "+" | "-" | "*" | "/";

export default function App() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [operacao, setOperacao] = useState<Operacao>("+");
  const [resultado, setResultado] = useState("");

  function calcular() {
    const num1 = Number(valor1.replace(",", "."));
    const num2 = Number(valor2.replace(",", "."));
    
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) 
    {
      Alert.alert("Atenção", "Por favor, insira números válidos.");
      return;
    }

    if (operacao === "/" && num2 === 0)
    {
      Alert.alert("Atenção", "Não é possível dividir por zero.");
      return;
    }

    let r = 0;
    if (operacao === "+") r = num1 + num2;
    else if (operacao === "-") r = num1 - num2;
    else if (operacao === "*") r = num1 * num2;
    else if (operacao === "/") r = num1 / num2;

    setResultado(String(r));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>

      <Text style={styles.label}>Primeiro Número</Text>
      <TextInput
        style={styles.input}
        value={valor1}
        onChangeText={setValor1}
        keyboardType="numeric"
        placeholder="Digite um número"
      />

      <Text style={styles.label}>Operação</Text>
      <Picker
        selectedValue={operacao}
        onValueChange={(itemValue) => setOperacao(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Soma" value="+" />
        <Picker.Item label="Subtração" value="-" />
        <Picker.Item label="Multiplicação" value="*" />
        <Picker.Item label="Divisão" value="/" />
      </Picker>

      <Text style={styles.label}>Segundo Número</Text>
      <TextInput
        style={styles.input}
        value={valor2}
        onChangeText={setValor2}
        keyboardType="numeric"
        placeholder="Digite um número"
      />

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {resultado !== "" && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      )}
    </View>
  );
}