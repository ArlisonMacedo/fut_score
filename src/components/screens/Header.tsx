import React from 'react'
import { Text, View } from 'react-native'
import {BorderlessButton} from 'react-native-gesture-handler'
import {Feather} from '@expo/vector-icons'

import styles from '../styles/header'


interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>{title}{"\n"}
          <Text style={styles.subTitle}>veja os resultados</Text>
        </Text>
        <BorderlessButton style={styles.buttonSearch}>
          <Text><Feather name='filter' color='#fff' size={22} /></Text>
        </BorderlessButton>
      </View>
    </View>
  )
}

export default Header