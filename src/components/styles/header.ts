import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#03A62C',
    // flex: 1
  },
  topBar: {
    height: 120,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 30,
    marginLeft: 22,
    maxWidth: 160
  },
  subTitle:{
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    fontStyle: 'italic'
  },
  buttonSearch: {
    marginRight: 22
  }
})

export default styles