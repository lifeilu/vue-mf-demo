<template>
  <div id="app">
    <main class="app-content">
      <router-view />
    </main>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
} from 'vue3';
export default defineComponent({
  name: 'App',
  props: {},
});
</script>

<style lang="scss">
body {
  z-index: 0;
  position: relative;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: PingFangSC-Regular;
  font-size: 13px;
  ul {
    margin: 0;
    padding: 0;
  }
}

ul {
  margin: 0;
  padding: 0;
}
ol, ul, dl {
  margin: 0 !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c3c3c3;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #171717;
}
</style>
