import React from 'react';

import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { Button, useTheme, TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown-v2'

export default function FormRegisterSchool({navigation}) {

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
            label="Nome da Escola"
            underlineColor= "white"
            theme={{
              colors: { placeholder: 'white', text: 'white',
              background: 'transparent' }
            }}
            underlineColorAndroid='transparent'
            style={styles.schoolName}
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
            style={styles.phoneSchool}
          />

          <TextInput
            mode="filled"
            label="Código"
            underlineColor= "white"
            theme={{
              colors: { placeholder: 'white', text: 'white',
              background: 'transparent' }
            }}
            style={styles.codeSchool}
          />

          <TextInput
            mode="filled"
            label="CEP"
            underlineColor= "white"
            theme={{
              colors: { placeholder: 'white', text: 'white',
              background: 'transparent' }
            }}
            style={styles.cepSchool}
          />       

          <Dropdown
            label='Tipo'
            underlineColor= "white"
            theme={{
              colors: { placeholder: 'white', text: 'white',
              background: 'transparent' }
            }}
            data={data}
            style={styles.typeSchool}
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
    marginBottom: 15
  },
  containerScroll: {
    paddingHorizontal:16,
    paddingBottom: 16
  },
  email: {
    marginBottom: 10
  },
  schoolName: {
    marginBottom: 10
  },
  typeSchool: {
    marginBottom: 30
  },
  codeSchool: {
    marginBottom: 10
  },
  phoneSchool: {
    marginBottom: 10
  },
  cepSchool: {
    marginBottom: 10
  },
});