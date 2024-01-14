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
html, body, #app
  height: 100%
  width: 100%
  margin: 0

*, *:before, *:after 
  box-sizing: border-box
  margin: 0
  padding: 0

li
  list-style: none

.clear
  clear: both

@font-face 
  font-family: IrisUPC
  src: url(views/assets/fonts/upcil.ttf)


</style>
