import React from 'react';

import { StyleSheet, View } from 'react-native';

import AccountStudent from '../../components/AccountStudent';
import AccountCompany from '../../components/AccountCompany';
import AccountSchool from '../../components/AccountSchool';
import AccountTeacher from '../../components/AccountTeacher';

import { useSelector } from 'react-redux';

export default function MyAccount({navigation, route}) {
  const selector = useSelector(state => state);
  const user = selector.user.user;

  if(user.role == "Aluno"){
    return <AccountStudent navigation={navigation}/>
  } else if(user.role == "Empresa"){
    return <AccountCompany navigation={navigation}/>
  } else if(user.role == "Escola") {
    return <AccountSchool navigation={navigation}/>
  } else if(user.role == "Professor") {
    return <AccountTeacher navigation={navigation}/>
  } else {
    return <View/>
  }
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

});