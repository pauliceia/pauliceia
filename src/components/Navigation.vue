<template>
  <nav id="navbar" class="navbar">
    <section class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <h1 class="is-size-4">Pauliceia 2.0 </h1>
        <!--<img :src="logo" alt="Logo"/>-->
      </router-link>
    </section>
    <section class="navbar-menu">
      <section class="navbar-end">
        <router-link :to="{ name: 'About' }" class="navbar-item">
          <span>
            {{ $t('about.about') }}
          </span>
        </router-link>
        <router-link :to="{ name: 'Data' }" class="navbar-item">
          <span>
            {{ $t('data.data') }}
          </span>
        </router-link>
        <router-link :to="{ name: 'Layers' }" class="navbar-item">
          <span>
            {{ $t('layers.layers') }}
          </span>
        </router-link>
        <router-link :to="{ name: 'Projects' }" class="navbar-item">
          <span>
            {{ $t('projects.projects') }}
          </span>
        </router-link>
      </section>
    </section>
  </nav>
</template>

<script>
  import Logo from '../img/logo.png'

  export default {
    name: 'navbar',
    data () {
      return {
        'logo': Logo
      }
    }
  }
</script>

<style lang="scss">
  @import "../scss/style";

  #navbar {
    background-color: $primary;
  }
</style>
