import React, {useEffect, useState, useCallback} from 'react';

import { StyleSheet, View, Text, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import ModalChallenge from '../../components/ModalChallenge';

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

  async function readItemFromStorage() {
    const item = await getItem();
    setToken(item);
  };

  useEffect(()=>{
    readItemFromStorage();

  },[])

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    updateChallenge()
  }, []);

  async function updateChallenge() {
    const challenges = await api.get("student/challenge", { headers: { Authorization: `Bearer ${token}` } })
    dispach(UserActions.addChallenge(challenges.data.data))

    wait(1500).then(() => setRefreshing(false));
  }

  
  return (
    <>
       <Text style={styles.titleSection}>
         Desafios
       </Text>
       <ScrollView style={styles.scrollTeacher}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        { challenges.map( (challenge, index) => {
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
            )}) }
        </ScrollView>

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
    marginTop: 90,

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

    backgroundColor:"#FC392C",

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
  }
});