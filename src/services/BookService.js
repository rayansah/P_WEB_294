import axios from 'axios'

const apiClient = axios.create({
  // baseURL: 'https://my-json-server.typicode.com/GregLeBarbar/passion-lecture-json-server/',
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

// Utilisation de la syntaxe "const nomFonction = (params) => { ... }"
export const getBooks = () => {
  return apiClient.get('/books')
}

export const getBook = (id) => {
  // Correction : My JSON Server utilise le pluriel même pour un seul item
  return apiClient.get(`/books/${id}`)
}

export const updateBook = (id, book) => {
  return apiClient.put(`/books/${id}`, book)
}
export const addBook = (book) => {
  // Correction : My JSON Server utilise le pluriel même pour un seul item
  return apiClient.post(`/books/`, book)
}
