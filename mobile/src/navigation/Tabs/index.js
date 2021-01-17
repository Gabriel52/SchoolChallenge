import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import Home from '../../screens/Home';
import MyAccount from '../../screens/MyAccount';
import FunctionPrincipal from '../../screens/FuncionPrincipal';

import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();
const icons = {
  Home: {
    lib: Feather,
    name: 'home',
  },
  MyAccount: {
    lib: FontAwesome,
    name: 'user-circle',
  },
  FunctionPrincipal: {
    lib: Ionicons,
    name: 'grid-outline',
  },
}

export default function Tabs() {
  const selector = useSelector(state => state);
  const user = selector.user.user;

  if(user.role === "Aluno"){
    return(
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon:({color, size}) => {
          const { lib: Icon, name } = icons[route.name];
          
          return <Icon name={name} size={size} color={color} />;
        },
      })} tabBarOptions={{ activeTintColor: '#FFC46C', inactiveTintColor:"white" , style: {backgroundColor: '#828282'},  labelStyle: {marginBottom: 2, fontSize:10, fontWeight:"bold"}, }}>
        <Tab.Screen name="Home" component={Home} options={{tabBarLabel: 'Home'}}/>
        <Tab.Screen name="FunctionPrincipal" component={FunctionPrincipal} options={{tabBarLabel : 'Desafios'}}/> 
        <Tab.Screen name="MyAccount" component={MyAccount} options={{tabBarLabel: 'Minha Conta'}}/>
      </Tab.Navigator>
    )
  } else {
    return(
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon:({color, size}) => {
          const { lib: Icon, name } = icons[route.name];
          
          return <Icon name={name} size={size} color={color} />;
        },
      })} tabBarOptions={{ activeTintColor: '#FFC46C', inactiveTintColor:"white" , style: {backgroundColor: '#828282'},  labelStyle: {marginBottom: 2, fontSize:10, fontWeight:"bold"}, }}>
        <Tab.Screen name="Home" component={Home} options={{tabBarLabel: 'Home'}}/>
        <Tab.Screen name="MyAccount" component={MyAccount} options={{tabBarLabel: 'Minha Conta'}}/>
      </Tab.Navigator>
    )
  }
  
  
}
