import React from 'react';

import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown-v2'

import Header from '../../components/Header';

export default function NewTeacher({navigation}) {
  const data = [{
    value: 
      'Matematica',
    }, {
    value: 
      'Portugues',
    }
  ];

  const dataPeriodo = [{
    value: 
      'Noite',
    }, {
    value: 
      'Tarde',
    }
  ];

  return (
    <>
      <Header/>

      <View>
        <Text style={styles.title}>Cadastro de Professor</Text>
      </View>

        
      <ScrollView style={styles.scrollTeacher}>

        <TextInput
          mode="filled"
          label="Nome"
          underlineColor= "white"
          style={{width:250}}
          theme={{
            colors: { placeholder: 'white', text: 'white',
            background: 'transparent' }
          }}
          style={styles.cargaHorario}
        />

        <TextInput
          mode="filled"
          label="E-mail"
          underlineColor= "white"
          style={{width:250}}
          theme={{
            colors: { placeholder: 'white', text: 'white',
            background: 'transparent' }
          }}
          style={styles.cargaHorario}
        />

        <TextInput
          secureTextEntry={true}
          label="Senha"
          underlineColor= "white"
          theme={{
            colors: { placeholder: 'white', text: 'white',
            background: 'transparent' }
          }}
          mode="filled"
          style={styles.password}
        />

        <TextInput
          mode="filled"
          label="CPF"
          underlineColor= "white"
          style={{width:250}}
          theme={{
            colors: { placeholder: 'white', text: 'white',
            background: 'transparent' }
          }}
          style={styles.cargaHorario}
        />

        <Dropdown
          label='Periodo'
          underlineColor= "white"
          theme={{
            colors: { placeholder: 'white', text: 'white',
            background: 'transparent' }
          }}
          data={dataPeriodo}
          style={styles.periodo}
        />

        <TextInput
          mode="filled"
          multiline
          label="Descrição"
          underlineColor= "white"
          style={{width:250}}
          theme={{
            colors: { placeholder: 'white', text: 'white',
            background: 'transparent' }
          }}
          style={styles.desc}
        />

        <Button
          style={styles.buttonCustomize} 
          labelStyle={{ color:"white" }}
          theme={{ roundness: 2 }}
          mode="contained"
          onPress={() => {  }}>
          Cadastrar
        </Button>
      </ScrollView>

      
    </>
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
  header: {
    marginTop:50,
    width:80,

    alignItems:"center"
  },
  title:{
    fontSize: 30,
    color: "white",
    fontFamily: 'AlegreyaSans_800ExtraBold',
    textAlign: "center",
    marginBottom: 35
  },
  boxDiscipline:{
    width:275,
    padding:10,
    borderRadius: 5,

    justifyContent:"space-between",
    flexDirection:"row",

    backgroundColor:"#FFC46C",

    marginLeft:"auto",
    marginRight:"auto",
    marginTop:25
  },
  titleDiscipline:{
    fontFamily: 'AlegreyaSans_800ExtraBold',
    fontSize: 17,

    marginBottom: 6
  },
  schoolDiscipline:{
    fontFamily: 'AlegreyaSans_400Regular',
    fontSize: 15,
  },
  buttonCustomize:{
    width:280,

    marginLeft:"auto",
    marginRight:"auto",
  },   
  scrollTeacher:{
    paddingHorizontal:16,
    paddingBottom: 16
  },
  cargaHorario:{
    marginBottom: 15
  },
  periodo:{
    marginBottom: 15
  },
  desc: {
    marginBottom: 35
  },
  disciplina:{
    marginBottom: 35
  }
});