import React from 'react';

import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import ImageFake from '../../assets/images/Astronaut-space.jpg'


export default function AccountTeacher({navigation, route}) {

const classes = [
    { materia:"Português", school:"Tadakyo Sakai", totalStudents: 41 },
    { materia:"Inglês", school:"Tadakyo Sakai", totalStudents: 29 },
    { materia:"História", school:"Tadakyo Sakai", totalStudents: 30 },
    { materia:"História", school:"Tadakyo Sakai", totalStudents: 30 },
    { materia:"História", school:"Tadakyo Sakai", totalStudents: 30 },
  ]

  return (
    <>
      <View style={styles.headerProfile}>
        <View style={styles.profileInfo}>
          <Image
            style={styles.imgProfile}
            source={ImageFake}
          />
          <Text  style={styles.profileName}>Marcos Rocha</Text>
        </View>
      </View>

      <View style={styles.detailsMyAccount}>
        <View>
          <Text style={styles.titleDetailMyAccount}>Professor</Text>
          <Text style={styles.textDetailMyAccount}>Português, inglês e história</Text>
        </View>
      </View>

      <View style={styles.hrStyle}/>

       <Text style={styles.titleSection}>
         Turmas
       </Text>
       <ScrollView style={styles.scrollTeacher}>
        {classes.map( (classe, index) => {
            return(
            <TouchableOpacity key={index} onPress={()=>{}}>
              <View style={styles.boxDiscipline}>
                <View>
                  <Text style={styles.titleDiscipline}>
                    {classe.materia}
                  </Text>

                  <Text style={styles.schoolDiscipline}>
                    {classe.school}
                  </Text>
                </View>

                <View>
                    <View style={styles.customizeTotalStudents}>
                      <Text style={styles.totalStudents}>
                      {classe.totalStudents}
                      </Text>
                    </View>
                    <Text>
                      Alunos
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
    alignItems:"center",

    marginLeft: "auto",
    marginRight: "auto",
  },
  headerProfile: {
    backgroundColor: "#828282",
  },
  profileInfo:{
    marginTop:50,
  },
  imgProfile:{
    width:80,
    height:80,

    marginLeft:20,
    borderRadius:100,

    marginTop:30,

    position:"absolute"
  },
  profileName:{
    color:"#FFC46C",

    marginLeft:110,
    marginTop:30,

    fontFamily: 'AlegreyaSans_800ExtraBold',
    fontSize:22
  },
  detailsMyAccount:{
    marginLeft:110,
    width:240,

    flexDirection:"row",
    justifyContent:"space-between"
  },
  titleDetailMyAccount: {
    fontFamily: 'AlegreyaSans_400Regular',
    fontSize:16,
    color:"#C4C4C4",
  },
  textDetailMyAccount: {
    fontFamily: 'AlegreyaSans_400Regular',
    fontSize:16,
    color:"white",
  },
  hrStyle: {
    borderBottomColor: '#56CCF2',
    borderBottomWidth: 1.5,

    width:300,
    marginLeft:"auto",
    marginRight:"auto",
    marginTop: 35,
  },
  styleButton: {
    marginTop: 15,
    borderRadius: 12, 
    width:260, 
    marginLeft:"auto", 
    marginRight:"auto"
  },
  titleSection: {
    marginLeft:"auto",
    marginRight:"auto",
    marginTop: 20,

    fontFamily: 'AlegreyaSans_800ExtraBold',
    fontSize: 24,

    color:"white"
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
  scrollTeacher:{
    paddingHorizontal:16,
    paddingBottom: 16
  }
});