import React from 'react';

import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { Button, useTheme, TextInput } from 'react-native-paper';

export default function FormRegisterCompany({navigation}) {

  const data = [{
    value: 
      'Escola Estadual',
    }, {
    value: 
    'Escola Municipal',
    }
  ];

  const { colors } = useTheme();

  return (
      <ScrollView
        contentContainerStyle={styles.containerScroll}>

        <View style={styles.container}>
          <Text style={styles.title}>Cadastro</Text>

          <TextInput
            mode="filled"
            label="Nome"
            underlineColor= "white"
            theme={{
              colors: { placeholder: 'white', text: 'white',
              background: 'transparent' }
            }}
            style={styles.name}
          />

          <TextInput
            mode="filled"
            label="E-mail"
            underlineColor= "white"
            theme={{
              colors: { placeholder: 'white', text: 'white',
              background: 'transparent' }
            }}
            style={styles.email}
          />

          <TextInput
            mode="filled"
            label="Telefone"
            underlineColor= "white"
            theme={{
              colors: { placeholder: 'white', text: 'white',
              background: 'transparent' }
            }}
            style={styles.phone}
          />

          <TextInput
            mode="filled"
            label="CNPJ"
            underlineColor= "white"
            theme={{
              colors: { placeholder: 'white', text: 'white',
              background: 'transparent' }
            }}
            style={styles.cnpj}
          />

          <TextInput
            mode="filled"
            label="CEP"
            underlineColor= "white"
            theme={{
              colors: { placeholder: 'white', text: 'white',
              background: 'transparent' }
            }}
            style={styles.cep}
          />


          <Button
            style={{color: colors.primary, marginBottom: 40, borderRadius: 12}}
            mode="contained">
            Cadastrar
          </Button>

        </View>
      </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    width:300,

    flex: 1,
    justifyContent: "center",

    marginLeft: "auto",
    marginRight: "auto",
  },
  title:{
    color: "white",

    fontSize: 30,
    fontFamily: 'AlegreyaSans_800ExtraBold',

    textAlign: "center",
    marginBottom: 35
  },
  containerScroll: {
    paddingHorizontal:16,
    paddingBottom: 16
  },
  name: {
    marginBottom: 10
  },
  email: {
    marginBottom: 10
  },
  phone: {
    marginBottom: 10
  },
  cnpj: {
    marginBottom: 10
  },
  cep: {
    marginBottom: 30
  },
});