import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import {Feather} from '@expo/vector-icons'
import React from 'react'


const {Navigator, Screen} = createBottomTabNavigator()

import Main from './screens/Main'

// const iconHome = <Feather name='home' size={22} color='#000'/>

function Routes (){
  return (
    <NavigationContainer >
      <Navigator backBehavior='history'
        tabBarOptions={{
          activeTintColor: '#20133a',
          inactiveTintColor: '#1d1133',
          labelStyle: {
            fontSize: 14,
            fontFamily: 'Poppins_600SemiBold'
          }
        }} 
      >
        <Screen name='Home' component={Main} options={{ 
            tabBarLabel: 'Inicio',
            tabBarIcon: (() => <Feather name='home' color='#20133a' size={22}/>)
          }}/>
      </Navigator>
    </NavigationContainer>
  )

}

export default Routes
