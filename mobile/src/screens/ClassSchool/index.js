import React from 'react';

import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

import Header from '../../components/Header';

export default function ClassSchool({navigation}) {

  const dataClassSchool = [
    {periodo:"Noite", serie:"9°Série", tipo:"Fundamental I", sala: 5},
    {periodo:"Tarde", serie:"2°Série", tipo:"Fundamental II", sala: 5}
  ]

  return (
    <>
      <Header/>

      <View>
        <Text style={styles.title}>Turmas (2)</Text>
      </View>

        <Button
          style={styles.buttonCustomize} 
          labelStyle={{ color:"white" }}
          theme={{ roundness: 2 }}
          mode="contained"
          onPress={() => { navigation.navigate("NewTurma") }}>
          Nova Turma
        </Button>
      <ScrollView style={styles.scrollTeacher}>
        {dataClassSchool.map( (classe, index) => {
          return(
          <TouchableOpacity key={index} onPress={()=>{ navigation.navigate("Turma") }}>
            <View style={styles.boxDiscipline}>
              <View>
                <Text style={styles.titleDiscipline}>
                  {classe.periodo}
                </Text>

                <Text style={styles.schoolDiscipline}>
                  {classe.serie} - {classe.tipo} 
                </Text>
              </View>

              <View>
                  <View style={styles.customizeTotalStudents}>
                    <Text style={styles.totalStudents}>
                      {classe.sala}
                    </Text>
                  </View>
                  <Text>
                    Sala
                  </Text>
              </View>
            </View>
          </TouchableOpacity>
        )})}
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
  totalStudents:{
    fontFamily: 'AlegreyaSans_800ExtraBold',
    fontSize: 17,

    textAlign:"center",
  },
  customizeTotalStudents: {
    backgroundColor: "#F5DF4D",
    borderRadius:100,
    width:25,
    padding:2,

    marginLeft:"auto",
    marginRight:"auto",

  },
  buttonCustomize:{
    width:275,

    marginLeft:"auto",
    marginRight:"auto",
  },
  scrollTeacher:{
    paddingHorizontal:16,
    paddingBottom: 16
  }
});