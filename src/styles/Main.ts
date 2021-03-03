import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex :1,
  },
  content: {
    marginTop: 39,
    marginBottom: 20
  },
  cell: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    marginBottom: 14,
    borderRadius: 8,
    width: '100%',
    // marginLeft: -50
  },
  headerMatch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f5',
    borderRadius: 8,
    // marginHorizontal: 9
    paddingHorizontal: 8
  },
  country: {
    marginLeft: 9,
    color: '#09087F',
    fontFamily: 'Nunito_700Bold',
    fontSize: 18
  },
  nameCompetition: {
    color: '#09087F',
    marginVertical: 6,
    fontFamily: 'Nunito_700Bold',
    fontSize: 17
  },
  teams: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  teamName: {
    color: '#09087F',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular'
  },
  scoreTeam: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#09087F'
  },
  stateTeam: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  stateHomeTeam: {

  },
  stateAwayTeam: {

  },
  footer: {
    height: 60,
    backgroundColor: '#f0f0f5',
    marginTop: 10,
    borderRadius: 4,
    paddingVertical: 8,
    paddingLeft: 8
  },
  status: {
    color: '#080E33',
    fontSize: 16,
    fontFamily: 'Nunito_400Regular'
  }
})


export default styles
