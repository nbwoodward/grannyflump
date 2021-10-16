<template>
  <div id="app">
    <GrannyFlump/>
  </div>
</template>

<script>
import GrannyFlump from './components/GrannyFlump.vue'

export default {
  name: 'App',
  components: {
    GrannyFlump
  }
}
</script>

<style>
#app {
  font-family: 'Patrick Hand', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  background-color: #1f629b;
  padding: 15px;
  border-radius: 15px;
  cursor: pointer;
  border: 1px solid #ccc;
  color: #fff;
}
button:hover {
  background: #4780b1;
}
button:active {
  opacity: .8;
}
</style>
