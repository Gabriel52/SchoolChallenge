import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import SimpleLogo from '../../assets/logos/simpleIcon.png'

export default function WelcomeRegister({navigation}) {

  const { colors } = useTheme();
  const { goBack } = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.conatainerLogo}>
          <Image
            style={styles.logoImg}
            source={SimpleLogo}
          />
        </View>

        <Text style={styles.title}>Seja bem-vindo!</Text>

        <Text style={styles.subTitle}>Como você se identifica?</Text>

        <Button
          style={{color: colors.primary, marginBottom: 20, borderRadius: 12}}
          mode="contained"
          labelStyle={{ color:"white" }}
          onPress={() => { navigation.navigate("Register", { typeRegister: "School" }) }}>
          Escola
        </Button>

        <Button
          style={{color: colors.primary, marginBottom: 40, borderRadius: 12}}
          mode="contained"
          labelStyle={{ color:"white" }}
          onPress={() => { navigation.navigate("Register", { typeRegister: "Company" }) }}>
          Empresa interessada
        </Button>

        <Text onPress={() => { goBack() }} style={styles.comeBack}>Voltar</Text>
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
    marginRight: "auto",
  },
  title:{
    fontSize: 30,
    color: "white",
    fontFamily: 'AlegreyaSans_800ExtraBold',
    textAlign: "center",
    marginBottom: 35
  },
  subTitle:{
    fontSize: 19,
    color: "white",
    fontFamily: 'AlegreyaSans_400Regular',
    textAlign: "center",
    marginBottom: 25
  },
  comeBack: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    textDecorationLine:"underline",
    fontFamily: 'AlegreyaSans_400Regular'

  },
  conatainerLogo:{
    backgroundColor:"white",
    marginLeft:"auto",
    marginRight:"auto",

    borderRadius: 5,
    marginTop: 20,
    marginBottom: 15,
    padding: 10
  },
  logoImg:{
    width:100,
    height:80
  },
});