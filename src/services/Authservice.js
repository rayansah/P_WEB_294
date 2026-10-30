import axios from 'axios'

const apiClient = axios.create({
  // baseURL: 'https://my-json-server.typicode.com/GregLeBarbar/passion-lecture-json-server/',
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export const findUser = (pseudo, password) => {
  return apiClient.get('/users', { params: { pseudo, password } })
}
