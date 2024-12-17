<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const someId = ref<number>(0)
</script>

<template>
  <div>
    <label for="someId">Some ID:</label>
    <input id="someId" type="number" v-model="someId" />
    <button @click="router.push(`/dashboard/administration/users/${someId}`)">Go to User</button>
  </div>
</template>

<style scoped>

</style>
