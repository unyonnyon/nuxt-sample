<template>
  <div>
    <textarea v-model="inputText" />
    <div>
      <NuxtLink :to="nextPage">Next</NuxtLink>
      <NuxtLink :to="prevPage">Prev</NuxtLink>
    </div>
    {{ $route.params.id }}
  </div>
</template>

<script setup>
const route = useRoute();
const currentNotebookId = Number(route.params.id);

const nextPage = computed(() => `/notebooks/${currentNotebookId + 1}`);
const prevPage = computed(() => `/notebooks/${currentNotebookId - 1}`);

const notebooks = useNotebooks();
const inputText = ref(notebooks.notebooks[currentNotebookId]);
watch(inputText, () => {
  notebooks.writeNotebook(currentNotebookId, inputText.value);
});

const edited = computed(() => {
  if (inputText.value === '') return False;
  return True;
});
</script>

<style scoped>
textarea {
  width: 100%;
  height: 90%;
}

a {
  margin: 10px 10px;
}
</style>
