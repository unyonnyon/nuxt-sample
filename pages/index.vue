<template>
  <div>
    <h1>Counter : {{ counter.count }}</h1>
    <h1>Home</h1>
  </div>
</template>

<script setup>
const counter = useCounter();

const title = ref('hello!!');

const doubleTitle = computed(() => {
  return title.value + title.value;
});
</script>
