<template>
  <div class="container">
    <h1>Abont</h1>
    <h1>
      Counter : {{ counter.count }}
      <span @click="counter.increment">+</span>
    </h1>
    <UserList />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom',
});

const counter = useCounter();
</script>

<style scoped>
.container {
  background-color: green;
}
</style>
