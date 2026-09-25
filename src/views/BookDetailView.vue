<script setup>
import { getBook } from '@/services/BookService'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const book = ref(null)

onMounted(async () => {
  try {
    const response = await getBook(route.params.id)
    book.value = response.data
  } finally {
  }
})
</script>

<template>
  <div class="book-detail">
    <div class="container" v-if="book">
      <h1>{{ book.title }}</h1>
      <div>{{ book.numberOfPages }}</div>
    </div>
  </div>
</template>
