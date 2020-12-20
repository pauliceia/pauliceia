<template>
    <header>
        <!--<div class="container">-->
        <!--</div>-->
        <nav class="navbar navbar-expand-md navbar-light bg-light">

            <router-link to="/home" class="navbar-brand">
                <img :src="logo" class="logo" title="logo of pauliceia" alt="logo of pauliceia" />
            </router-link>

            <!-- BUTTON MOBILE -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- content nav -->
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link
                            :class="this.$route.path == '/home' ? 'nav-link active': 'nav-link'"
                            to="/home" >{{ $t('nav.home') }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            :class="this.$route.path == '/explore' ? 'nav-link active': 'nav-link'"
                            to="/explore">{{ $t('nav.map') }}</router-link>
                    </li>
                    <li class="nav-item">
                      <!--<router-link
                          :class="this.$route.path == '/tutorial' ? 'nav-link active': 'nav-link'"
                          to="/tutorial">Tutorial</router-link>-->
                      <a :class="this.$route.path == '/tutorial' ? 'nav-link active': 'nav-link'" href="https://drive.google.com/drive/folders/1M7iU2iz46i2gIgfctkUCZdBARWJykcoT?usp=sharing" target="_blank" >Tutorial</a>
                    </li>
                    <li class="nav-item">
                      <router-link
                        :class="this.$route.path == '/about' ? 'nav-link active': 'nav-link'"
                        to="/about">{{ $t('nav.about') }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="this.$route.path == '/contact' ? 'nav-link active': 'nav-link'"
                          to="/contact">{{ $t('nav.contact') }}</router-link>
                    </li>
                    <!--<li class="nav-item">-->
                        <!--<a :class="this.$route.path == '/team' ? 'nav-link active': 'nav-link'"-->
                            <!--href="http://www.pauliceia.dpi.inpe.br/" target="_blank">{{ $t('nav.team') }}</a>-->
                    <!--</li>-->
                </ul>

                <div v-if="isUserLoggedIn && user && !!user.name">
                    <p-logAvatar :photo="user.picture" :name="user.name"/>
                </div>
                <div v-else>
                    <router-link to="/login" class="btn btn-login">{{ $t('nav.login') }}</router-link>
                </div>

                <p-dropLanguage />
            </div>
        </nav>
    </header>
</template>

<script>
import { mapState } from 'vuex'

import LogAvatar from '@/views/components/application/LogAvatar'
import dropLanguage from '@/views/components/application/DropLanguage'

import logo from '@/views/assets/images/logo_compacta.png'

export default {
    components: {
        'p-logAvatar': LogAvatar,
        'p-dropLanguage': dropLanguage
    },
    computed: {
        ...mapState('auth', ['isUserLoggedIn', 'user'])
    },
    data() {
        return {
            logo
        }
    }
}
</script>

<style lang="sass" scoped>
  header
    border-bottom: 5px solid #f15a29

    .navbar
      padding-left: 5%
      padding-right: 5%
      background: rgba(#FFF, 0.7) !important

      .navbar-brand
        width: 60px

        .logo
          width: 48px
          height: 60px
          max-width: 100%
          margin-top: 5px
          margin-bottom: 5px

      .navbar-nav li a
        text-decoration: none
        text-transform: uppercase
        font-size: 16px
        color: rgb(77, 77, 77) !important
        margin: 0 25px !important
        font-family: Montserrat-Regular

      .navbar-nav li a:hover, .navbar-nav .active
        color: #f15a29 !important

    .btn-login
      color: #f15a29
      background: #FFF
      border-color: #f15a29
      font-size: 16px
      text-transform: uppercase
      padding: 10px
      line-height: 1

      a
        list-decoration: none

    .btn-login:hover
      text-decoration: none
      color: #FFF
      background: #f0470f

    .btn-active
      background: rgba(#f15a29, 0.5)

    .btn-active:hover
      background: rgba(#f15a29, 0.2)
</style>
