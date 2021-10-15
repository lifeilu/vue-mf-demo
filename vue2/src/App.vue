<template lang="pug">
#app
  span App: hello vue2
  router-view
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
}
</script>

<style lang="scss">
  html {
    height: 100%;
  }

  body{
    margin:0;
    padding:0;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  #app {
    position: relative;
    min-height: 100vh;
    max-height: 100%;
    flex: 1 1 auto;
    display : flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
  }
  button {
    width: 200px;
    height: 200px;
  }
</style>
