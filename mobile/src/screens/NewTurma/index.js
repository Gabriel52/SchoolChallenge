import React, {useState} from 'react';

import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown-v2'

import Header from '../../components/Header';
import { useAsyncStorage } from '@react-native-community/async-storage';
import api from '../../services/api';

const dataPeriodo = [{
  value: 
    'Noite',
  }, {
  value: 
    'Tarde',
  }
];

const dataSerie = [{
  value: 
    '1°Série',
  }, {
  value: 
    '2°Série',
  },
  {
  value: 
    '3°Série',
  }
];

export default function NewTurma({navigation}) {
  const [numberStudent, setNumberStudent] = useState()
  const [serie, setSerie] = useState()
  const [room, setRoom] = useState()
  const [period, setPeriod] = useState()
  const [coordinator, setCoordenador] = useState()

  const { getItem } = useAsyncStorage('@storage_key');

  async function register() {

    const turma = {
      numberStudent,
      serie,
      room,
      period,
      coordinator,
      type:"Ensino Medio",
      fk_school:"1",
      fk_user:"1"
    }

    const item = await getItem()

    const user = await api.get( "myaccount", { headers: { Authorization: `Bearer ${item}` } } );
  }
  return (
    <>
      <Header/>

      <View>
        <Text style={styles.title}>Nova Turma</Text>
      </View>

        
      <ScrollView style={styles.scrollTeacher}>

        <TextInput
            mode="filled"
            label="Coordenador"
            underlineColor= "white"
            onChangeText={coordinator => setCoordenador(coordinator)}
            style={styles.coordenador}
            theme={{
              colors: { placeholder: 'white', text: 'white',
              background: 'transparent' }
            }}
            style={styles.cargaHorario}
        />  

        <TextInput
          mode="filled"
          label="Sala"
          underlineColor= "white"
          style={styles.room}
          onChangeText={room => setRoom(room)}
          theme={{
            colors: { placeholder: 'white', text: 'white',
            background: 'transparent' }
          }}
          style={styles.cargaHorario}
        />

        <TextInput
          mode="filled"
          label="Número de estudantes"
          underlineColor= "white"
          style={styles.numberStudents}
          onChangeText={numberStudent => setNumberStudent(numberStudent)}
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
          onChangeText={period => setPeriod(period)}
          data={dataPeriodo}
          style={styles.disciplina}
        />

        <Dropdown
          label='Série'
          underlineColor= "white"
          theme={{
            colors: { placeholder: 'white', text: 'white',
            background: 'transparent' }
          }}
          onChangeText={serie => setSerie(serie)}
          data={dataSerie}
          style={styles.serie}
        />

        <Button
          style={styles.buttonCustomize} 
          labelStyle={{ color:"white" }}
          theme={{ roundness: 2 }}
          mode="contained"
          onPress={() => { register() }}>
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

    marginTop:20,
    marginLeft:"auto",
    marginRight:"auto",
  },   
  scrollTeacher:{
    paddingHorizontal:16,
    paddingBottom: 16
  },
  coordenador:{
    marginBottom: 15
  },
  numberStudents:{
    marginBottom: 15
  },
  serie: {
    marginBottom: 10
  },
  disciplina:{
    marginBottom: 10
  },
  room:{
    marginBottom: 25
  }
});