import { ref, readonly } from 'vue';

const notebooks = ref({});

export default () => {
  const writeNotebook = (id, content) => {
    notebooks[id] = content;
  };
  return {
    notebooks: readonly(notebooks),
    writeNotebook,
  };
};
