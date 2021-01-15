import React from 'react';

import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Header from '../../components/Header';

export default function SearchStudent({navigation}) {

  return (
    <>
      <Header/>

      <View>
        <Text style={styles.title}>Caçar Talentos</Text>
        <Text style={styles.desc}>Seu mais novo jovem aprendiz pode estar por aqui!</Text>
      </View>

        
      <ScrollView style={styles.scrollTeacher}>
      
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
  },
  desc:{
    fontSize: 20,
    width:250,

    marginLeft: "auto",
    marginRight: "auto",

    color: "white",
    fontFamily: 'AlegreyaSans_400Regular',
    textAlign: "center",
    marginBottom: 35
  },
});