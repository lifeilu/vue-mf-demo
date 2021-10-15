<template>
  <div>
    <div>
      <input v-model="searchInputValue" placeholder="search" type='text'>
    </div>
    <hello-world/>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  defineAsyncComponent,
  ref,
} from 'vue';
// import HelloWorld from '../components/hello-world.vue';
export default defineComponent({
  name: 'Main',
  components: {
    HelloWorld: defineAsyncComponent(() => new Promise(async (resolve, reject) => {
      try {
        const res = (await import('../components/hello-world.vue'));
        resolve(res);
      } catch (err) {
        reject(err);
      }
    })),
  },
  props: {},
  setup() {
    const searchInputValue = ref('');
    return {
      searchInputValue,
    };
  },
});
</script>

<style lang="scss">
</style>
