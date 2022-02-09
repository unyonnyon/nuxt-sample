<template>
  <div class="container">
    <div>
      <label for="note">num of page</label>
      <input type="number" id="note" v-model="pages" />
    </div>
    <Notebook
      v-for="index in pages"
      :key="index"
      class="page"
      :style="offsetStyle(index)"
    />
  </div>
</template>

<script setup>
const pages = ref(5);

const offsetStyle = (order) => {
  return {
    top: `${10 * order + 30}px`,
    left: `${10 * order}px`,
    'z-index': 100 - order,
  };
};
</script>

<style scoped>
.container {
  position: relative;
  height: 80%;
  width: 100%;
}

.page {
  width: 80%;
  height: 100%;
  position: absolute;
  background-color: white;
  border: solid;
}
</style>
