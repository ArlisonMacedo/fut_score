import axios from 'axios'

const api = axios.create({
  baseURL: 'http://api.football-data.org/v2/',
  headers: {
    'X-Auth-Token': '9969f62ad6d5472d9117eab80d2447a9'
  }
})

export default api