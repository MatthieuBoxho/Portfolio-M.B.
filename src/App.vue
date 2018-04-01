<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header/Header'

export default {
  name: 'app',
  components: {
    'my-header': Header
  }
}
</script>

<style lang="scss" src="./styles.scss"></style>
