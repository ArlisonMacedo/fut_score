import React, { useEffect, useState } from 'react'
import { Text, View , ScrollView, TouchableOpacity} from 'react-native'
import {SvgUri} from 'react-native-svg'
import Header from '../components/screens/Header'
import api from '../services/api'


import styles from '../styles/Main'


interface Matches {
  id: number;
  competition: {
    id: number;
    name: string;
    area: {
      name: string;
      code: string;
      ensignUrl: string
    }
  }
  season: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: string;
  },
  status: string;
  matchday: number;
  score: {
    winner: string;
    duration: string;
    fullTime: {
      homeTeam: number;
      awayTeam: number
    },
    halfTime: {
      homeTeam: number;
      awayTeam: number
    }
    extraTime: {
      homeTeam: number;
      awayTeam: number
    },
    penalties: {
      homeTeam: number;
      awayTeam: number
    }
  },
  homeTeam: {
    id: number;
    name: string
  },
  awayTeam: {
    id: number;
    name: string
  }
}

function Main (){

  const [matches, setMatches] = useState<Matches[]>([])

  useEffect(() => {
    api.get('matches/').then(response => {
      setMatches(response.data.matches)
    })
  },[])
  return (
    <View style={styles.container}>
      <Header title='Fut Score' />
      <ScrollView style={{
        marginHorizontal: 16,
        paddingHorizontal: 16
      }} 
      showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>

          {
            matches.map(match => {
              return(
                <TouchableOpacity style={styles.cell} activeOpacity={0.9} key={match.id} >
                  <View>
                    <View style={styles.headerMatch}>
                      <Text style={styles.country}>
                        Pais {match.competition.area.name}
                      </Text>
                      <SvgUri
                        width='40'
                        height='40'
                        uri={match.competition.area.ensignUrl}
                      />
                    </View>
                    <Text style={styles.nameCompetition}>
                      Competição {match.competition.name}
                    </Text>
                    <View style={styles.teams}>
                      <Text style={styles.teamName} >{match.homeTeam.name}</Text>
                      <Text style={styles.teamName} >{match.awayTeam.name}</Text>
                    </View>
                    <View style={styles.stateTeam}>
                      <View style={styles.stateHomeTeam}>
                        <Text>Casa</Text>
                        <Text style={styles.scoreTeam}>1°T {match.score.halfTime.homeTeam}</Text>
                        <Text style={styles.scoreTeam}>2°T {match.score.fullTime.homeTeam}</Text>
                        <Text style={styles.scoreTeam}>Final {match.score.fullTime.homeTeam}</Text>
                      </View>
                      <Text>X</Text>
                      <View style={styles.stateAwayTeam}>
                        <Text>Visitante</Text>
                        <Text style={styles.scoreTeam}>1°T {match.score.halfTime.awayTeam}</Text>
                        <Text style={styles.scoreTeam}>2°T {match.score.fullTime.awayTeam}</Text>
                        <Text style={styles.scoreTeam}>Final {match.score.fullTime.awayTeam}</Text>
                      </View>
                    </View>
                    <View style={styles.footer}>
                      
                        {match.status === 'IN_PLAY' && <Text style={styles.status}>Jogo em Andamento</Text>}
                        {match.status === 'FINISHED' && <Text style={styles.status} >Jogo Finalizado</Text>}
                        {match.status === 'PAUSED' && <Text style={styles.status} >Jogo no Intervalo</Text>}
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default Main
