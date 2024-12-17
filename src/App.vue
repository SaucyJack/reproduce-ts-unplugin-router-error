<script setup lang="ts"></script>

<template>
  <div>
    <router-link to="/dashboard/administration/automated-reports">Automated Reports</router-link><br/>
    <router-link to="/dashboard/administration/users">Users</router-link>
    <router-view />
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
