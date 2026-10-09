<script setup>
defineProps({
  title: String,
  isFavorite: Boolean,
})

const emit = defineEmits(['toggleFavorite'])
</script>

<template>
  <button type="button" v-if="isFavorite" @click="emit('toggleFavorite')">
    ❤️ Retirer des favoris
  </button>

  <button type="button" v-else @click="emit('toggleFavorite')">🤍 Ajouter aux favoris</button>
</template>

<style scoped></style>
