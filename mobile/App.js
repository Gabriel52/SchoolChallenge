import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import React from 'react';

import Navigation from './src/navigation/Navigation'

//Fonts
import { useFonts, AlegreyaSans_800ExtraBold, AlegreyaSans_400Regular } from '@expo-google-fonts/alegreya-sans'
import AppLoading from 'expo-app-loading';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { Provider } from 'react-redux';
import store from './src/store';

const theme = {
  ...DefaultTheme,
  roundness:2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#FFC46C",
    secondary: "#2F80ED"
  }
}

export default function App() {
  let [fontsLoaded] = useFonts({
    AlegreyaSans_800ExtraBold,
    AlegreyaSans_400Regular,
  });

  if(!fontsLoaded) {
    return <AppLoading/> 
  } else {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <StatusBar  barStyle="light-content" backgroundColor="#f5f5f5"/>
          <Navigation />
        </PaperProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});