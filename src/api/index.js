import axios from './config'

export const sampleApi = () => {
  return axios.get('/sample')
}