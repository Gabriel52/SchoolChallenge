import React, {useState} from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Button } from 'react-native-paper';

import Feather from 'react-native-vector-icons/Feather';

import CoinIcon from '../../assets/images/MaskGroup.png'

import api from '../../services/api';
import { useDispatch } from 'react-redux';
import { Creators as UserActions } from '../../store/ducks/user';

import { useAsyncStorage } from '@react-native-community/async-storage';
import Header from '../../components/Header'
import {Modal} from "react-native-modal"


import { useSelector } from 'react-redux';

export default function AccountStudent({navigation, route}) {
  const selector = useSelector(state => state);
  const user = selector.user.user;
  const carteira = selector.user.carteira;

  const dispach = useDispatch();
  
  const [coin, setCoin] = useState(0)

  const { getItem } = useAsyncStorage('@storage_key');

  async function transactionCoin() {
    const item = await getItem();

    const coinTratament = coin / 100

    console.log(coinTratament)

    const dataTransaction = { amount: coinTratament }

    await api.post( "sendTransaction", dataTransaction ,{ headers: { Authorization: `Bearer ${item}` } } );

    const user = await api.get( "myaccount", { headers: { Authorization: `Bearer ${item}` } } );

    console.log(user.data)

    dispach(UserActions.addCarteira(user.data.wallet))
    dispach(UserActions.addUserAction(user.data.user))

    setCoin(0)
    
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
            Reason coin
          </Text>
          <Text style={styles.score}>
            { user.score == null ? 0 : carteira.saldo }
          </Text>
        </View>

      </View>

      <Text style={styles.textIncentive}>Uau! Você realmente é um ótimo aluno! Estes pontos você consegue trocar por:</Text>

      <View style={styles.containerCoin}>
        <Button
        labelStyle={{ color:"white" }}
        theme={{ roundness: 2 }}
        disabled={coin == 0}
        mode="contained"
        onPress={() => { setCoin(coin - 100) }}>
          <Feather name="minus" size={18}/>
        </Button>
        
        <Text style={styles.coinStyle}>
          { coin }
        </Text>
        <Button
        labelStyle={{ color:"white" }}
        theme={{ roundness: 2 }}
        mode="contained"
        disabled={coin == user.score}
        onPress={() => { setCoin(coin + 100) }}>
         <Feather name="plus" size={18}/>
        </Button>
      </View>

      <Button
      labelStyle={{ color:"white" }}
      theme={{ roundness: 2 }}
      mode="contained"
      style={styles.buttonTransaction}
      onPress={() => { transactionCoin() }}>
        Trocar
      </Button>

      <TouchableOpacity onPress={()=>{ Linking.openURL("https://docs.google.com/document/d/1xtC6S5qW6iIFJpjMCJhXUWZhhvS6Vq0uJcpXa9cbtcw") }}>
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

    width:250,
    marginTop: 25,
    marginLeft:"auto",
    marginRight:"auto",
  },
  coinStyle:{
    fontFamily: 'AlegreyaSans_800ExtraBold',
    fontSize: 25,
    color:"white"
  },
  buttonTransaction:{
    width: 150,

    marginTop: 25,
    marginLeft:"auto",
    marginRight:"auto",
  }
});