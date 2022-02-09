<template>
  <ul>
    <li v-for="(user, index) in users" :key="index">{{ user }}</li>
  </ul>
</template>

<script setup>
const userList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['a', 'b', 'c']);
    }, 1000);
  });
};
const users = await userList();
</script>
