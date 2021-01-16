import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

//Import Forms
import FormRegisterSchool from '../../components/FormRegisterSchool';
import FormRegisterCompany from '../../components/FormRegisterCompany';

export default function Register({navigation, route}) {
  const { goBack } = useNavigation();

  const { typeRegister } = route.params;

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { goBack() }} style={styles.iconBack}>
          <Icon name="arrow-left" color="white" size={24} />
        </TouchableOpacity>
      </View>
      {
        typeRegister == "School" 
        ? <FormRegisterSchool/>
        : <FormRegisterCompany/>
      }
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
});