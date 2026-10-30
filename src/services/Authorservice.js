import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export const findAuthor = (firstName, lastName) => {
  return apiClient.get('/authors', { params: { firstName, lastName } })
}

export const addAuthor = (author) => {
  return apiClient.post('/authors', author)
}
