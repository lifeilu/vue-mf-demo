<template>
  <div id="asyncApp"></div>
</template>

<style lang="scss">
.asyncApp {
  width: 100%;
  height: 100%;
}
</style>

<script lang="ts">
import { onMounted, createApp } from 'vue';

export default {
  name: 'Test',
  setup() {
    onMounted(() => {
      console.log('mounted');
      async function fetchImport() {
        return new Promise(async (resolve, reject) => {
          try {
            const res = (await import('@/pages/main.vue')).default;
            resolve(res);
          } catch (err) {
            reject(err);
          }
        });
      };
      fetchImport()
        .then((res) => {
          const app = createApp(res);
          app.mount('#asyncApp');
        });
    });
  },
};
</script>
