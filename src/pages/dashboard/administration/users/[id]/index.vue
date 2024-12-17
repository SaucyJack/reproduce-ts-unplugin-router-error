<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRoute } from 'vue-router'

// this produces a typescript error
// Argument of type '"/dashboard/administration/users/:id"' is not assignable to parameter of type 'keyof RouteNamedMap | undefined'.ts(2345)
const route = useRoute('/dashboard/administration/users/:id')
</script>

<template>
  <div>
        <!-- Property 'id' does not exist on type 'Record<never, never> | { id: string; } | { id: string; }'.
  Property 'id' does not exist on type 'Record<never, never>'.ts(2339) -->
    <h1>User ID: {{ route.params.id }}</h1>
    <router-link to="/">Home</router-link>
  </div>
</template>

<style scoped>

</style>
