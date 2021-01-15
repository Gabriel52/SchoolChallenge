import React from 'react';

import { StyleSheet, Text, ScrollView, View } from 'react-native';


import { Button } from 'react-native-paper';

import Modal from 'react-native-modal';
import Moment from 'moment';

export default function ModalChallenge({navigation, route, visible, setVisible, challenge}) {

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
                Materia - {challenge.matter}
              </Text>

              <Text style={styles.textTitle}>
                Titulo: {challenge.title}
              </Text>

              <Text style={styles.textDesc}>
                Descricão: {challenge.body}
              </Text>

              <Text style={styles.textCreated}>
                Criado em: {Moment(challenge.createdAt).format('DD/MM/YYYY')}
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
    fontFamily: 'AlegreyaSans_800ExtraBold',
    fontSize: 20,

    marginBottom: 10
  },
  textTitle:{
    fontSize: 18,
    fontFamily: 'AlegreyaSans_400Regular',
  },
  textDesc:{
    fontSize: 18,
    fontFamily: 'AlegreyaSans_400Regular',
  },
  textCreated:{    
    fontSize: 18,
    fontFamily: 'AlegreyaSans_400Regular',
  },
  contentBody: {
    marginBottom: 25
  }

});