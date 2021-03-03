import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar';
import {Poppins_600SemiBold, Poppins_400Regular, useFonts} from '@expo-google-fonts/poppins'
import {Nunito_400Regular, Nunito_700Bold} from '@expo-google-fonts/nunito'
import React from 'react';
import Routes from './src/Routes';

export default function App() {


  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Nunito_400Regular,
    Nunito_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="light" />
      <Routes />
    </>
  );
}
