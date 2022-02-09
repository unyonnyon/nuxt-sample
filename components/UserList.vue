<template>
  <ul>
    <li v-for="(user, index) in users" :key="user.name">
      <div>{{ user.name }}</div>
      <div>{{ user.email }}</div>
      <div>{{ user.pref }} {{ user.city }}</div>
    </li>
  </ul>
</template>

<script setup>
const { data: users } = await useFetch('/api/users');
</script>
