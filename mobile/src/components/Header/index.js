import React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function Header({navigation, route}) {
  const { goBack } = useNavigation();

  return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { goBack() }} style={styles.iconBack}>
          <Icon name="arrow-left" color="white" size={24} />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>
  );
}
const styles = StyleSheet.create({
  header: {
    marginTop:50,
    marginLeft:20,

    alignItems:"flex-start"
  },
  iconBack: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    width:90,
  },
  backText: {
    fontFamily: 'AlegreyaSans_400Regular',
    fontSize: 17,
    color:"white"
  }
});