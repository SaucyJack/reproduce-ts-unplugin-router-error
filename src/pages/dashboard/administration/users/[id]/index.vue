<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute('/dashboard/administration/users/:id')
</script>

<template>
  <div>
    <h1>User ID: {{ route.params.id }}</h1>
    <router-link to="/">Home</router-link>
  </div>
</template>

<style scoped>

</style>
