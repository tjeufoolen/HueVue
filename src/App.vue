<template>
  <div id="app">
    <SceneList />
  </div>
</template>

<script>
import SceneList from './components/SceneList.vue'

export default {
  name: 'App',
  components: {
    SceneList
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito:400,900&display=swap');

* {
  font-family: 'Nunito', sans-serif;
}
</style>
