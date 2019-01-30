<template>
  <md-app>
    <md-app-drawer md-permanent="full">
      <!--header nav-->

      <!--links nav-->
      <p-dash-links />

    </md-app-drawer>

    <!--content page-->
    <md-app-content>
      <slot></slot>
    </md-app-content>

  </md-app>
</template>

<script>
import DashLinks from '@/views/components/dashboard/Links'
import 'vue-material/dist/vue-material.min.css'

export default {
  name: 'Dashboard',
  components: {
    "p-dash-links": DashLinks
  },
  props: ['title'],
  data() {
    return {
      menuVisible: false
    }    
  },
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  }
}
</script>

<style lang="sass" scoped>
  .md-app
    min-height: 800px

  .md-app-toolbar
    background: rgba(#000, .05)
    border-bottom: 1px solid rgba(#000, .1)

  .nav-title
      font-family: Arial
      font-weight: 600
  .md-title, .md-icon
    color: #304A73

  .md-drawer
    width: 230px
    max-width: calc(100vw - 125px)
    border-right: 1px solid rgba(#000, .1)
  .md-app-content
    background-color: #e4e4e4
</style>
