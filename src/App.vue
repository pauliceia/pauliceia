<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
  body
    background: #eee

  *, *:before, *:after 
    box-sizing: border-box
    margin: 0
    padding: 0

  li
    list-style: none

  .clear
    clear: both
</style>