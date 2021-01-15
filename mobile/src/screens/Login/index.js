import React, { useState} from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { TextInput, Button, useTheme } from 'react-native-paper';

//redux
import { useDispatch } from 'react-redux';
import { Creators as UserActions } from '../../store/ducks/user';

import api from '../../services/api';
import { useAsyncStorage } from '@react-native-community/async-storage';


// navigation.navigate("Tabs"), dispach(UserActions.addTypeUser('empresa'))

export default function Login({navigation}) {
  const dispach = useDispatch();
  const { colors } = useTheme();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { getItem, setItem } = useAsyncStorage('@storage_key');
  
  async function authorization() {
    if(!email == '' || !password == ''){
        const auth = await api.post( "auth", {email, password} );
        
        if (auth.data.success) {
          try {
            setItem(auth.data.token);

            const user = await api.get( "myaccount", { headers: { Authorization: `Bearer ${auth.data.token}` } } );
            const challenges = await api.get("student/challenge", { headers: { Authorization: `Bearer ${auth.data.token}` } })
  
            dispach(UserActions.addUserAction(user.data.data))
            dispach(UserActions.addChallenge(challenges.data.data))
  
            navigation.navigate("Tabs")
          } catch (error) {
            alert("Senha ou Usuario incorreto tente novamente!");
          }
         
        } else {
          alert("Senha ou Usuario incorreto tente novamente!");
        }

        // login.data.token == null ? setItem("") : setItem(login.data.token);
        //return auth.data.success ?  : 
    } else{
      alert("Preencha todos os campos!")
    }
  }
  
  return (
    <>
      <View style={styles.container}>
        <TextInput
          mode="filled"
          label="E-mail"
          underlineColor= "white"
          theme={{
            colors: { placeholder: 'white', text: 'white',
            background: 'transparent' }
          }}
          onChangeText={email => setEmail(email)}
          style={styles.email}
        />
        
        <TextInput
          secureTextEntry={true}
          label="Senha"
          underlineColor= "white"
          theme={{
            colors: { placeholder: 'white', text: 'white',
            background: 'transparent' }
          }}
          onChangeText={password => setPassword(password)}
          mode="filled"
          style={styles.password}
        />

        <Button
          style={{ marginBottom: 10, borderRadius: 12 }} 
          labelStyle={{ color:"white" }}
          theme={{ roundness: 2 }}
          mode="contained"
          onPress={() => { authorization() }}>
          Entrar
        </Button>

        <View style={styles.rowClicked}>
          <Text style={styles.forgetPassword}>
            Esqueceu a senha?
          </Text>
          <Text style={styles.forgetPasswordLink}
            onPress={() => { navigation.navigate("Tabs") }}> clique aqui! 
          </Text>
        </View>

        <View style={styles.hrStyle}/>

        <View style={styles.rowClicked}>
          <Text style={styles.newUser}>
           Novo por aqui?
          </Text>
          <Text style={styles.newUserLink}
            onPress={() => { navigation.navigate("WelcomeRegister") }}> Cadastre-se
          </Text>
        </View>

      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    width:300,
    flex: 1,
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  logo:{
    marginLeft:"auto",
    marginRight:"auto",
    marginBottom: 15
  },
  email: {
    marginBottom: 15,
  },
  password: {
    marginBottom: 35
  },
  forgetPassword:{
    fontSize: 18,
    fontFamily: 'AlegreyaSans_400Regular',
    color: "white"
  },
  forgetPasswordLink:{
    fontSize: 18,
    color: "white",
    fontFamily: 'AlegreyaSans_400Regular',
    textDecorationLine:"underline"
  },
  newUser:{
    fontSize: 22,
    fontFamily: 'AlegreyaSans_800ExtraBold',
    color: "white",
  },
  newUserLink:{
    fontSize: 22,
    fontFamily: 'AlegreyaSans_800ExtraBold',
    color: "white",
    textDecorationLine:"underline"
  },
  hrStyle: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginBottom: 12,
  },
  rowClicked: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 28,
  }
});