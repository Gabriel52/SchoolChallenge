import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';

import { Button } from 'react-native-paper';

import imageCompany from '../../assets/icons/userCompany.png'

import { useSelector } from 'react-redux';

export default function AccountCompany({navigation, route}) {
  const selector = useSelector(state => state);
  const user = selector.user.user;

  return (
    <>
      <View style={styles.headerProfile}>
        <View style={styles.profileInfo}>
          <Image
            style={styles.imgProfile}
            source={imageCompany}
          />
          <Text  style={styles.profileName}>{user.name}</Text>
        </View>
      </View>

      <View style={styles.detailsMyAccount}>
        <View>
          <Text style={styles.titleDetailMyAccount}>Ramo ou Setor</Text>
          <Text style={styles.textDetailMyAccount}>{user.setor}</Text>
        </View>
      </View>

      <View style={styles.hrStyle}/>

      <View style={styles.groupButtons}>

        <Button
          style={styles.styleButton} 
          labelStyle={{ color:"white" }}
          theme={{ roundness: 2 }}
          mode="contained"
          onPress={()=>{navigation.navigate("SearchStudent")}}>
          Encontre um talento
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