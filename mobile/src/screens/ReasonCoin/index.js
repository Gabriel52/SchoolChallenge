import React from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Button } from 'react-native-paper';

import CoinIcon from '../../assets/images/MaskGroup.png'

import { useSelector } from 'react-redux';
import { useAsyncStorage } from '@react-native-community/async-storage';
import Header from '../../components/Header'
import {Modal} from "react-native-modal"


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
      <Header/>

      <Text style={styles.title}>Troca de pontos</Text>

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

        <View>
          <Text style={styles.titleScore}>
            Reason coins
          </Text>
          <Text style={styles.score}>
            { user.score == null ? 0 : user.score }
          </Text>
        </View>

      </View>

      <Text style={styles.textIncentive}>Uau! Você realmente é um ótimo aluno! Estes pontos você consegue trocar por:</Text>

      <View style={styles.containerCoin}>
        <Button
        labelStyle={{ color:"white" }}
        theme={{ roundness: 2 }}
        mode="contained"
        onPress={() => {  }}>
          -
        </Button>
        
        <Text>
          0
        </Text>
        <Button
        labelStyle={{ color:"white" }}
        theme={{ roundness: 2 }}
        mode="contained"
        onPress={() => {  }}>
          +
        </Button>
      </View>

      <TouchableOpacity onPress={()=>{ Linking.openURL("https://xtrala.com/") }}>
        <Text style={styles.linkDownload}>Baixe nosso material gratuito sobre empreendedorismo e investimento!</Text>
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
  title:{
    fontFamily: 'AlegreyaSans_800ExtraBold',
    fontSize:30,

    width: 180,

    textAlign:"center",
    color:"white",

    marginLeft: "auto",
    marginRight: "auto",
  },
  containerScore:{
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    padding: 10,
    
    width: 350
  },
  titleScore:{
    fontFamily: 'AlegreyaSans_800ExtraBold',
    fontSize: 16,

    color:"#FFC46C",
  },
  score:{
    fontFamily: 'AlegreyaSans_800ExtraBold',
    fontSize: 25,

    marginLeft:"auto",
    marginRight:"auto",

    color:"#FFC46C",
  },
  textIncentive: {
    color:"white",
    textAlign:"center",

    fontFamily: 'AlegreyaSans_400Regular',
    fontSize: 18,
    width: 300,
    
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
  linkDownload: {
    color:"#FFC46C",
    textAlign:"center",

    fontFamily: 'AlegreyaSans_400Regular',
    fontSize: 18,
    width: 300,
    
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:35
  },
  containerCoin:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",

    width:150,
    marginLeft:"auto",
    marginRight:"auto",
  }
});