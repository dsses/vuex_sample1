<template>
  <div id="app">
    <NumSeparator />
  </div>
</template>

<script>
import NumSeparator from './components/NumSeparator'

export default {
  name: 'App',
  components: {
    NumSeparator
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
