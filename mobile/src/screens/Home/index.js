import React, {useRef, useState, useEffect} from 'react';

import { StyleSheet, View, Text, Image,Dimensions, Platform, } from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import { Button, useTheme } from 'react-native-paper';

import logoPrancheta from '../../assets/logos/LogotipoEscala_Prancheta4.png'
import { useSelector } from 'react-redux';

const ENTRIES1 = [
  {
    title: '',
    subtitle: '',
    illustration: 'https://i.ibb.co/rF1B6Y2/desafio-Banner.jpg',
  },
  {
    title: '',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.ibb.co/ZKcs2z5/coin-Banner.jpg',
  },
  {
    title: '',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.ibb.co/kG3BKmj/empreender-Banner.jpg',
  },
  {
    title: '',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.ibb.co/4YLdDhH/profissional-Banner.jpg',
  },
];
const {width: screenWidth} = Dimensions.get('window');

export default function Home({navigation, route}) {
  const selector = useSelector(state => state);
  const user = selector.user.user;

  const { colors } = useTheme();

  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.conatainerLogo}>
          <Image
            style={styles.logoImg}
            source={logoPrancheta}
          />
        </View>

        <Text  style={styles.sloganText}>Valorizando o Estudante!</Text>

          <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 60}
            data={entries}
            layout={'default'} 
            renderItem={renderItem}
            hasParallaxImages={true}
          />
 
        {
          user.role == "Aluno" ?
          <Button
          style={{color: colors.primary, marginTop: 20, borderRadius: 12}}
          mode="contained"
          labelStyle={{ color:"white" }}
          onPress={() => { navigation.navigate("FunctionPrincipal") }}>
          Ver Desafios
        </Button> : <View/>
        }
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
    marginTop: 60
  },
  img: {
    width: 260,
    marginRight: 15,
    height: 300,
  },
  logoImg:{
    width:280,
    height:80
  },
  containerScroll: {
    marginTop: 15,
    marginBottom: 15,
    paddingBottom: 16
  },
  sloganText: {
    color: 'white',
    fontSize: 18,
    marginBottom:25
  },
  conatainerLogo:{
    backgroundColor:"white"
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
 
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'center',
  },
});