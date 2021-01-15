import React from 'react';

import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

import ImageFake from '../../assets/images/Astronaut-space.jpg'
import ImageFake2 from '../../assets/images/space.jpg'

export default function Home({navigation, route}) {
  const { colors } = useTheme();

  return (
    <>
      <View style={styles.container}>
        <Text  style={styles.sloganText}>Slogan</Text>
        <ScrollView 
          style={styles.containerScroll}
          horizontal={true}>
          <Image
            style={styles.img}
            source={ImageFake}
          />
          <Image
          style={styles.img}
          source={ImageFake2}
        />
        </ScrollView>

        <Button
          style={{color: colors.primary, marginBottom: 10, borderRadius: 12}}
          mode="contained"
          labelStyle={{ color:"white" }}
          onPress={() => { navigation.navigate("FunctionPrincipal") }}>
          Ver Desafios
        </Button>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    width:300,

    justifyContent: "center",
    alignItems:"center",

    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 120
  },
  img: {
    width: 260,
    marginRight: 15,
    height: 300,
  },
  containerScroll: {
    marginTop: 15,
    marginBottom: 15,
    paddingBottom: 16
  },
  sloganText: {
    color: 'white'
  }
});