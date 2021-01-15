import React, {useState} from 'react';

//Screens
import Login from '../../screens/Login';
import WelcomeRegister from '../../screens/WelcomeRegister';
import ClassSchool from '../../screens/ClassSchool';
import Register from '../../screens/Register';
import Turma from '../../screens/Turma';
import NewTurma from '../../screens/NewTurma';
import NewTeacher from '../../screens/NewTeacher';
import SearchStudent from '../../screens/SearchStudent';
import ReasonCoin from '../../screens/ReasonCoin';

//Navigation
import Tabs from '../Tabs/index'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigation() {
  const [userType, setUserType] = useState('')

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#2F80ED',
    },
  };

    return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{ headerShown:false }} initialRouteName="Login">
          
          <Stack.Screen 
            name="Login"
            component={Login}
          />

          <Stack.Screen 
            name="WelcomeRegister"
            component={WelcomeRegister}
          />

          <Stack.Screen 
            name="Register"
            component={Register}
          />

          <Stack.Screen 
            name="ClassSchool"
            component={ClassSchool}
          />

          <Stack.Screen 
            name="Turma"
            component={Turma}
          />

          <Stack.Screen 
            name="NewTurma"
            component={NewTurma}
          />

          <Stack.Screen 
            name="NewTeacher"
            component={NewTeacher}
          />

          <Stack.Screen 
            name="SearchStudent"
            component={SearchStudent}
          />

          <Stack.Screen 
            name="ReasonCoin"
            component={ReasonCoin}
          />

          <Stack.Screen
            name="Tabs" 
            component={Tabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}