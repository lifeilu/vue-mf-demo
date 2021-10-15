<template>
  <div id='asyncApp' class='asyncApp'>
  </div>
</template>

<style lang="scss">
.asyncApp {
  width: 100%;
  height: 100%;
}
</style>

<script>
import { createApp, defineAsyncComponent, h } from 'vue3';
export default {
  name: 'Test',
  data() {
    return {
    };
  },
  components: {
    // AssetMatrix: defineAsyncComponent(() => import('AssetMatrix/Main'))
    // AssetMatrix: () => import('AssetMatrix/Main')
  },
  methods: {
    fetchComponent() {
      const AssetMatrix = defineAsyncComponent(
        () => import('AssetMatrix/Main')
      );
      const app = createApp({
        name: 'vue3root',
        render() {
          return h('div',{},[h(AssetMatrix)])
        }
      });
      app.mount('#asyncApp');
    },
    fetchComponent1() {
      async function fetchImport() {
        return new Promise(async(resolve, reject) => {
          try {
            const res = (await import('AssetMatrix/Main')).default;
            resolve(res)
          } catch (err){
            reject(err)
          }
        })
      };

      fetchImport()
        .then(res => {
          const app = createApp(res);
          app.mount('#asyncApp');
        });
    },
  },
  mounted() {
    // this.fetchComponent();// hello-world not rendered
    this.fetchComponent1();// the same result with fetchComponent
  }
};
</script>


