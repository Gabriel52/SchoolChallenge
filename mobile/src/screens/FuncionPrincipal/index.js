import React, {useState, useCallback} from 'react';

import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import ModalChallenge from '../../components/ModalChallenge';

//Images
import logoPrancheta from '../../assets/logos/LogotipoEscala_Prancheta4.png'
import iconClass from '../../assets/icons/iconClass.png'

import { useAsyncStorage } from '@react-native-community/async-storage';

import api from '../../services/api';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { Creators as UserActions } from '../../store/ducks/user';

export default function FunctionPrincipal({navigation, route}) {
  const selector = useSelector(state => state);
  const challenges = selector.user.challenges;
  const dispach = useDispatch();

  const [token, setToken] = useState("")
  const [refreshing, setRefreshing] = useState(false)
  const { getItem } = useAsyncStorage('@storage_key');

  const [visible, setVisible] = useState(false)
  const [challenge, setChallenge] = useState({matter:"",title:"", body:"", createdAt:""})
  
  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    updateChallenge()
  }, []);

  async function updateChallenge() {
    const item = await getItem();

    const challenges = await api.get("student/challenge", { headers: { Authorization: `Bearer ${item}` } })
    dispach(UserActions.addChallenge(challenges.data.data))

    wait(1500).then(() => setRefreshing(false));
  }

  function Item({ title }) {
    return(
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    )
   
  }

  function renderItem({ item }){
    return (
      <TouchableOpacity style={styles.sizeItem} onPress={()=>{setVisible(true), setChallenge(item)}}>
        <View style={{backgroundColor:item.color, alignItems:"center", height:230, padding:20, borderRadius:5, marginBottom: 15}}>
          <Text style={styles.matter}>{item.matter}</Text>
          <Text style={styles.desc}>{item.title}</Text>
          <Image
            style={{width:80, height:70}}
            source={{uri: item.icon}}
          />
          <Text style={styles.desc}>0% concluído.</Text>
          <Text style={styles.desc}>Vale 100 pontos</Text>
        </View>
      </TouchableOpacity>
    )
  }


  
  return (
    <>
      <View style={styles.conatainerLogo}>
        <Image
          style={styles.logoImg}
          source={logoPrancheta}
        />
      </View>

       <Text style={styles.titleSection}>
         Desafios
       </Text>
       
      {/* challenges.map( (challenge, index) => {
          return(
          <TouchableOpacity key={index} onPress={()=>{setVisible(true), setChallenge(challenge)}}>
            <View style={challenge.success ? styles.boxDiscipline : styles.boxDisciplineError}>
              <View>
                <Text style={styles.titleDiscipline}>
                  {challenge.matter}
                </Text>

                <Text style={styles.schoolDiscipline}>
                  {challenge.title}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          )}) */}
            <FlatList
              columnWrapperStyle={{justifyContent: 'space-between'}}
              data={challenges}
              renderItem={renderItem}
              numColumns={2}
              scrollEnabled={true}
              keyExtractor={challenges => challenges.id.toString()}
            />

          

        <ModalChallenge visible={visible} setVisible={setVisible} challenge={challenge}/>
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
  styleButton: {
    marginTop: 15,
    borderRadius: 12, 
    width:260, 
    marginLeft:"auto", 
    marginRight:"auto"
  },
  titleSection: {
    marginLeft:"auto",
    marginRight:"auto",
    marginTop: 15,
    marginBottom:15,

    fontFamily: 'AlegreyaSans_800ExtraBold',
    fontSize: 24,

    color:"white"
  },
  boxDiscipline:{
    width:275,
    padding:10,
    borderRadius: 5,

    justifyContent:"space-between",
    flexDirection:"row",

    backgroundColor:"#56CCF2",

    marginLeft:"auto",
    marginRight:"auto",
    marginTop:25
  },
  boxDisciplineError:{
    width:275,
    padding:10,
    borderRadius: 5,

    justifyContent:"space-between",
    flexDirection:"row",

    backgroundColor:"#FB4B4B",

    marginLeft:"auto",
    marginRight:"auto",
    marginTop:25
  },
  titleDiscipline:{
    fontFamily: 'AlegreyaSans_800ExtraBold',
    fontSize: 17,

    marginBottom: 6
  },
  schoolDiscipline:{
    fontFamily: 'AlegreyaSans_400Regular',
    fontSize: 15,
  },
  totalStudents:{
    fontFamily: 'AlegreyaSans_800ExtraBold',
    fontSize: 17,

    textAlign:"center",
  },
  customizeTotalStudents: {
    backgroundColor: "#F5DF4D",
    borderRadius:100,
    width:25,
    padding:2,

    marginLeft:"auto",
    marginRight:"auto",

  },
  scrollTeacher:{
    paddingHorizontal:16,
    paddingBottom: 16
  },
  conatainerLogo:{
    backgroundColor:"white",

    marginLeft:"auto",
    marginRight:"auto",
    marginTop: 60
  },
  logoImg:{
    width:280,
    height:80
  },
  boxChallenge:{
    alignItems:"center",
  },

  sizeItem:{
    width: '48%',
  },
  matter:{
    fontFamily: 'AlegreyaSans_800ExtraBold',
    fontSize: 17,
  },
  desc:{
    fontFamily: 'AlegreyaSans_400Regular',
    fontSize: 15,
    textAlign:"center"
  }
  

});