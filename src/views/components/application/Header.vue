<template>
    <header>
        <div class="sub-nav" />

        <nav class="navbar navbar-expand-md navbar-dark">

            <router-link to="/" class="navbar-brand">
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
                            :class="this.$route.path == '/explore' ? 'nav-link active': 'nav-link'"
                            to="/explore">{{ $t('nav.explore') }}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link 
                            :class="this.$route.path == '/about' ? 'nav-link active': 'nav-link'"
                            to="/about">{{ $t('nav.about') }}</router-link>
                    </li>
                    <li class="nav-item dropdown" style="cursor: pointer">
                        <a class="nav-link dropdown-toggle" style="text-transform: uppercase;" data-toggle="dropdown">{{ $i18n.locale() }}</a>

                        <!-- component of language -->
                        <p-dropLanguage />

                    </li>
                </ul>

                <div v-if="logado">
                    <button @click="actGeocoding()" v-show="this.$route.path == '/explore'" 
                        :class="this.boxGeocoding ? 'btn-geocoding btn-active' : 'btn-geocoding'"><md-icon>search</md-icon></button>
                    <p-logAvatar />
                </div>
                <div v-else>
                    <button class="btn-geocoding btn-active"><md-icon>search</md-icon></button>
                    <router-link to="/login" class="btn btn-default">{{ $t('nav.login') }}</router-link>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import LogAvatar from '@/views/components/application/LogAvatar'
import dropLanguage from '@/views/components/application/DropLanguage'

import logo from '@/views/assets/images/logo_pauliceia.png'

import { mapState } from 'vuex'
export default {
    components: {
        'p-logAvatar': LogAvatar,
        'p-dropLanguage': dropLanguage
    },
    computed: {
      ...mapState('map', ['boxGeocoding'])
    },
    data() {
        return {
            logado: true,
            logo
        }
    },
    methods: {
        actGeocoding() {
            this.$store.dispatch('map/setBoxGeocoding', !this.boxGeocoding)
            this.$store.dispatch('map/setBoxInfos', false)
        }
    }
}
</script>

<style lang="sass" scoped>
    header
        background: #58595b !important
        border-bottom: 1px solid #4b4c4e

    .navbar
        padding-left: 10%
        padding-right: 10%

    .sub-nav
        width: 100%
        height: 5px
        background: #f15a29

    .navbar-brand
        width: 120px

        .logo
            width: 100%
            margin-top: -5px

    .navbar-nav li a
        color: #DDD !important
        text-decoration: none
        font-size: 1.3em
    .navbar-nav li a:hover, .navbar-nav li .active
        color: #FFF !important

    .btn-default
        background: #5D7AA9
        color: #fff
    .btn-default:hover
        background: #7188AD
        text-decoration: none
    
    .btn-geocoding
        cursor: pointer
        margin-top: 2.5px
        margin-right: 25px
        padding: 5px
        background: rgba(#f15a29, 0.5)
        border: none
    .btn-geocoding:hover
        background: rgba(#f15a29, 0.2)
    
    .btn-active
        background: rgba(#f15a29, 0.2)
    .btn-active:hover
        background: rgba(#f15a29, 0.5)

</style>
