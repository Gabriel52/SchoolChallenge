import React, {useState} from 'react';

import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { Dropdown } from 'react-native-material-dropdown-v2'
import { useAsyncStorage } from '@react-native-community/async-storage';

import Header from '../../components/Header';
import api from '../../services/api';
import ModalCV from '../../components/ModalCV';

const dataPersonalit = [{
  value: 
    'Animado',
  }, 
  {
  value: 
    'Inovador',
  },
  {
    value: 
    'Logico',
  },
  {
    value: 
    'Aventureiro',
  },
  {
    value: 
    'Mediador',
  },
  {
    value: 
    'Animado',
  }
];

export default function SearchStudent({navigation}) {

  const [personality, setPersonality] = useState('')

  const [uf, setUf] = useState('')
  const [city, setCity] = useState('')

  const [visible, setVisible] = useState(false)

  const[studentsObj, setStudentsObj] = useState([])
  const [student, setStudent] = useState({})
  
  const { getItem } = useAsyncStorage('@storage_key');

  async function filter() {
    const item = await getItem()
    console.log(personality, uf)

    const filterObject = {
      personality,
      uf,
      city
    }

    const students = await api.post("filter", filterObject, { headers: { Authorization: `Bearer ${item}` } })
    setStudentsObj(students.data.user)
  }

  return (
    <>
      <Header/>

      <View>
        <Text style={styles.title}>Caçar Talentos</Text>
        <Text style={styles.desc}>Seu mais novo jovem aprendiz pode estar por aqui!</Text>
      </View>
        
      <ScrollView style={styles.scrollTeacher}>

      <View style={styles.boxForm}>
        <TextInput  
          mode="filled"
          label="Estado"
          underlineColor= "white"
          theme={{
            colors: { placeholder: 'white', text: 'white',
            background: 'transparent' }
          }}
          onChangeText={uf => setUf(uf)}
          style={styles.estado}/>

        <TextInput  
          mode="filled"
          label="Cidade"
          underlineColor= "white"
          onChangeText={city => setCity(city)}
          theme={{
            colors: { placeholder: 'white', text: 'white',
            background: 'transparent' }
          }}
          style={styles.cidade}/>

          <Dropdown
            label='Personalidade'
            underlineColor= "white"
            onChangeText={personality => setPersonality(personality)}
            theme={{
              colors: { placeholder: 'white', text: 'white',
              background: 'transparent' }
            }}
            data={dataPersonalit}
            style={styles.personalidade}
          />

        <Button
          style={{ borderRadius: 12 }} 
          labelStyle={{ color:"white" }}
          theme={{ roundness: 2 }}
          mode="contained"
          onPress={() => { filter() }}>
          Aplicar Filtro
        </Button>

        {studentsObj.map( (student, index) => {
            return(
            <TouchableOpacity key={index} onPress={()=>{ setVisible(true), setStudent(student) }}>
              <View style={styles.boxDiscipline}>
                <View>
                  <Text style={styles.titleDiscipline}>
                    {student.name}
                  </Text>

                  <Text style={styles.schoolDiscipline}>
                    Tadakyo Sakayi - Embu Das Artes
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            )})}

      </View>

      </ScrollView>
      
    <ModalCV visible={visible} setVisible={setVisible} student={student}/>
      
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
  },
  desc:{
    fontSize: 20,
    width:250,

    marginLeft: "auto",
    marginRight: "auto",

    color: "white",
    fontFamily: 'AlegreyaSans_400Regular',
    textAlign: "center",
    marginBottom: 20
  },
  boxForm:{
    marginLeft: "auto",
    marginRight: "auto",

    width:280
  },
  estado:{
    marginBottom: 5
  },
  cidade:{
    marginBottom: 5
  },
  personalidade:{
    marginBottom: 15
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
  
});