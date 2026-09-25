<script setup>
import { getBooks } from '@/services/BookService'
import { onMounted, ref } from 'vue'

const books = ref({})

onMounted(async () => {
  try {
    const response = await getBooks()
    books.value = response.data
  } finally {
  }
})
</script>

<template>
  <h1>Page Books</h1>
  <RouterLink :to="{ name: 'home' }">Homepage</RouterLink>
  <ul>
    <li v-for="book in books" :key="book.id">
      {{ book.title }}
      <RouterLink :to="{ name: 'book-detail', params: { id: book.id } }"
        >Voir les détails du livre</RouterLink
      >
    </li>
  </ul>
</template>

<style scoped></style>
