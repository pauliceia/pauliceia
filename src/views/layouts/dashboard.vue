<template>
  <md-app>
    <!--title page-->
    <md-app-toolbar md-elevation="0">
      <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">{{ title }}</span>
    </md-app-toolbar>

    <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
      <!--header nav-->
      <md-toolbar class="md-transparent" md-elevation="0">
        <md-icon>public</md-icon>
        <span class="md-title nav-title">PAULICEIA</span>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button md-dense" @click="toggleMenu">
            <md-icon>keyboard_arrow_left</md-icon>
          </md-button>
        </div>
      </md-toolbar>

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
    min-height: 400px

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
</style>
