import React from 'react';

import { StyleSheet, Text, ScrollView, View } from 'react-native';


import { Button } from 'react-native-paper';

import Modal from 'react-native-modal';
import Moment from 'moment';

export default function ModalCV({navigation, route, visible, setVisible, student}) {

  function cancelButton(){
    setVisible(false)
  }

  return (
    <>
      <Modal isVisible={visible}>
        <View style={styles.containerModal}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal:16,
            paddingBottom: 16
          }}
          >
            <View style={styles.contentBody}>
              <Text style={styles.textMatter}>
                Nome: {student.name}
              </Text>

              <Text style={styles.textTitle}>
                E-mail: {student.email}
              </Text>

              <Text style={styles.textTitle}>
                Telefone: 11 92845 9876
              </Text>

              <Text style={styles.textTitle}>
                Idade: {student.age}
              </Text>

              <Text style={styles.textMatter}>
                Escola: Tadakyo Sakai
              </Text>

              <Text style={styles.textDesc}>
                Cidade: {student.city}
              </Text>

              <Text style={styles.textCreated}>
                Personalidade Principal: {student.personality}
              </Text>

              <Text style={styles.textCreated}>
                Nota por comportamento: {student.behavior}%
              </Text>

              <Text style={styles.textCreated}>
                Frequência: {student.attendance}%
              </Text>
            </View>

          <Button 
          onPress={()=>{cancelButton()}}
          style={styles.buttonModifyInfo}
          mode="contained">
            Fechar
          </Button>

          </ScrollView>
        </View>
    </Modal>
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
  containerModal:{
    backgroundColor: 'white',
    padding:15
  },
  textMatter:{
    fontFamily: 'AlegreyaSans_400Regular',
    fontSize: 18,

    marginBottom: 4
  },
  textTitle:{
    fontSize: 18,
    fontFamily: 'AlegreyaSans_400Regular',

    marginBottom: 4
  },
  textDesc:{
    fontSize: 18,
    fontFamily: 'AlegreyaSans_400Regular',

    marginBottom: 4
  },
  textCreated:{    
    fontSize: 18,
    fontFamily: 'AlegreyaSans_400Regular',

    marginBottom: 4
  },
  contentBody: {
    marginBottom: 25
  }

});