import React from "react";
import { View, Text, Image, TextInput } from "react-native";

import { styles } from "./styles";

import Logo from "../../assets/logo_etec.png";


export default function Login() {
  return (
    <View style={styles.container}>

        <View style={styles.boxTop}>
            <Image source={Logo} resizeMode="contain" style={styles.logo} />

            <Text style={styles.text}>Bem Vindo de Volta</Text>
        </View>

        <View style={styles.boxMid}>
            <Text style={styles.titleInput}>ENDEREÇO DE E-MAIL</Text>
            <TextInput />
            <Text style={styles.titleInput}>SENHA</Text>
            <TextInput />
        </View>

        <View style={styles.boxBottom}>
            <Text>Bottom</Text>
        </View>
      
    </View>
  );
}