import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

import { Button } from 'react-native-paper';

import imageSchool from '../../assets/icons/userSchool.png'

export default function AccountCompany({navigation}) {
  return (
    <>
      <View style={styles.headerProfile}>
        <View style={styles.profileInfo}>
          <Image
            style={styles.imgProfile}
            source={imageSchool}
          />
          <Text  style={styles.profileName}>Tadakiyo Sakai</Text>
        </View>
      </View>

      <View style={styles.detailsMyAccount}>
        <View>
          <Text style={styles.titleDetailMyAccount}>Tipo de Instituição</Text>
          <Text style={styles.textDetailMyAccount}>Escola Estadual</Text>
        </View>
      </View>

      <View style={styles.hrStyle}/>

      <View style={styles.groupButtons}>

        <Button
          style={styles.styleButton} 
          labelStyle={{ color:"white" }}
          theme={{ roundness: 2 }}
          mode="contained"
          onPress={() => { navigation.navigate("ClassSchool")}}>
          Turmas
        </Button>

        <Button
          style={styles.styleButton} 
          labelStyle={{ color:"white" }}
          theme={{ roundness: 2 }}
          mode="contained"
          onPress={() => { navigation.navigate("NewTeacher")}}>
          Cadastrar Professor
        </Button>

      </View>
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
  groupButtons:{
    marginTop:15
  }
});