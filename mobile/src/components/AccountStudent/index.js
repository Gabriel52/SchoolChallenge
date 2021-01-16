import React from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { Button } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';

import ImageFake from '../../assets/images/Astronaut-space.jpg'
import CoinIcon from '../../assets/images/MaskGroup.png'

import { useSelector } from 'react-redux';
import { useAsyncStorage } from '@react-native-community/async-storage';

export default function AccountStudent({navigation, route}) {
  const selector = useSelector(state => state);
  const user = selector.user.user;

  const { setItem } = useAsyncStorage('@storage_key');

  function logout(){
    setItem("");
    navigation.navigate("Login");
  }

  return (
    <>
      <View style={styles.headerProfile}>
        <View style={styles.profileInfo}>
          <Image
            style={styles.imgProfile}
            source={ImageFake}
          />
          <Text  style={styles.profileName}>{user.name}</Text>
        </View>
      </View>

      <View style={styles.detailsMyAccount}>
        <View>
          <Text style={styles.titleDetailMyAccount}>Idade</Text>
          <Text style={styles.textDetailMyAccount}>{user.age} Anos</Text>
        </View>

        <View>
          <Text style={styles.titleDetailMyAccount}>Localização</Text>
          <Text style={styles.textDetailMyAccount}>{user.uf}</Text>
        </View>
        
        <View>
          <Text style={styles.titleDetailMyAccount}>Cód Turma</Text>
          <Text style={styles.textDetailMyAccount}>754 </Text>
        </View>
      </View>

      <View style={styles.hrStyle}/>

      <View style={styles.containerScore}>
        <Image
          source={CoinIcon}
        />

        <View>
          <Text style={styles.titleScore}>
            Pontuação Atual
          </Text>
          <Text style={styles.score}>
            { user.score == null ? 0 : user.score }
          </Text>
        </View>
      </View>

      <Button
        style={styles.styleButton} 
        labelStyle={{ color:"white" }}
        theme={{ roundness: 2 }}
        mode="contained"
        onPress={()=>{navigation.navigate("ReasonCoin")}}>
        Troca de Pontos
      </Button>

      <Button
        style={styles.styleButton} 
        labelStyle={{ color:"white" }}
        theme={{ roundness: 2 }}
        mode="contained"
        onPress={()=>{ logout() }}>
        Sair
      </Button>

      <Text style={styles.percentChallenge}>Lista de Desafios 60% concluídos. Quase lá!</Text>

      <TouchableOpacity 
      onPress={()=>{navigation.navigate("FunctionPrincipal")}}
      style={styles.buttonNextChallenge}>
        <View style={styles.nextChallenge}>
          <Text style={styles.textPercent}>
            Próximo desafio
          </Text>
          <View style={styles.customizeIcon}>
            <Icon name="arrow-right" color="#2F80ED" size={22} />
          </View>
        </View>
      </TouchableOpacity>
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
    color:"#C4C4C4",
  },
  textDetailMyAccount: {
    fontFamily: 'AlegreyaSans_400Regular',
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
  containerScore:{
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",

    marginLeft:"auto",
    marginRight:"auto",
    marginTop:15,

    width:250
  },
  titleScore:{
    fontFamily: 'AlegreyaSans_800ExtraBold',
    fontSize: 20,

    color:"white",
  },
  score:{
    fontFamily: 'AlegreyaSans_800ExtraBold',
    fontSize: 30,

    marginLeft:"auto",
    marginRight:"auto",

    color:"white",
  },
  styleButton: {
    marginTop: 15,
    borderRadius: 12, 
    width:200, 
    marginLeft:"auto", 
    marginRight:"auto"
  },
  percentChallenge: {
    color:"#FFC46C",
    fontFamily: 'AlegreyaSans_400Regular',
    fontSize: 18,
    
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:35
  },
  nextChallenge: {
    flexDirection:"row",
    justifyContent:"space-between",

    marginLeft:"auto",
    marginRight:"auto",
    alignItems:"center",

    width:190
  },
  buttonNextChallenge: {
    marginTop: 35,
  },
  textPercent:{
    fontFamily: 'AlegreyaSans_800ExtraBold',
    fontSize:20,

    color:"white",

  },
  customizeIcon:{
    backgroundColor:"#56CCF2",
    borderRadius:50,

    padding: 3
  }

});