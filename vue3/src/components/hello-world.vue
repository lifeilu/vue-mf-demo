<template>
  <div class="hello">
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the {{ object.foo }}
    </p>
    <h1>{{ count }}</h1>
    <p v-for="(item, index) in list" :key="index">{{ item.name }}</p>
    <h3 @click="increase">Ecosystem</h3>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onUpdated,
  onUnmounted,
} from 'vue';

export default defineComponent({
  name: 'hello world',
  props: {},
  setup() {
    const count = ref(0);
    const object = reactive({ foo: 'bar' });
    const increase = (): void => {
      // count.value++;
    };
    const list: Array<object> = [
      {
        name: 'foo',
      },
      {
        name: 'bar',
      },
      {
        name: 'coo',
      },
    ];
    // 生命周期
    onMounted(() => {
      console.log('mounted vue3 typescript');
    });
    onUpdated(() => {
      console.log('updated vue3 typescript');
    });
    onUnmounted(() => {
      console.log('onUnmounted vue3 typescript');
    });
    // 暴露给模板
    return {
      count,
      increase,
      object,
      list,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
