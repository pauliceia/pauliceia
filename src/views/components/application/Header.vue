<template>
    <header>
        <div class="sub-nav" />

        <nav class="navbar navbar-expand-md navbar-light bg-light">

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

                <div v-show="this.$route.path == '/explore'">
                    <button @click="actInfoVector()"  
                        :class="this.boxInfoVector ? 'btn-geocoding btn-active' : 'btn-geocoding'">
                        <md-icon>info</md-icon>
                    </button>
                    <button @click="actNotifications()"  
                        :class="this.boxNotifications ? 'btn-geocoding btn-active' : 'btn-geocoding'">
                        <md-icon>notifications</md-icon>
                    </button>
                    <button @click="actGeocoding()"  
                        :class="this.boxGeocoding ? 'btn-geocoding btn-active' : 'btn-geocoding'">
                        <md-icon>location_on</md-icon>
                    </button>
                </div>

                <div v-if="isUserLoggedIn">
                    <p-logAvatar :photo="user.picture" :name="user.name"/>
                </div>
                <div v-else>
                    <router-link to="/login" class="btn btn-success btn-login">{{ $t('nav.login') }}</router-link>
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
        ...mapState('auth', ['isUserLoggedIn', 'user']),
        ...mapState('map', ['boxGeocoding', 'boxInfoLayer', 'boxInfoVector', 'boxNotifications'])
    },

    data() {
        return {
            logo
        }
    },

    methods: {
        actInfoVector() {
            this.$store.dispatch('map/setBoxInfoLayer', false)
            this.$store.dispatch('map/setBoxGeocoding', false)
            this.$store.dispatch('map/setBoxNotifications', false)
            this.$store.dispatch('map/setBoxInfoVector', !this.boxInfoVector)
        },
        actNotifications() {
            this.$store.dispatch('map/setBoxInfoLayer', false)
            this.$store.dispatch('map/setBoxInfoVector', false)
            this.$store.dispatch('map/setBoxGeocoding', false)
            this.$store.dispatch('map/setBoxNotifications', !this.boxNotifications)
        },
        actGeocoding() {
            this.$store.dispatch('map/setBoxInfoLayer', false)
            this.$store.dispatch('map/setBoxInfoVector', false)
            this.$store.dispatch('map/setBoxNotifications', false)
            this.$store.dispatch('map/setBoxGeocoding', !this.boxGeocoding)
        }
    }
}
</script>

<style lang="sass" scoped>
    header
        border-bottom: 1px solid #999
        
        .sub-nav
            width: 100%
            height: 5px
            background: #f15a29

        .navbar
            padding-left: 10%
            padding-right: 10%
            background: #EEE !important

            .navbar-brand
                width: 120px

                .logo
                    width: 100%
                    margin-top: -5px

            .navbar-nav li a
                text-decoration: none
                font-size: 1.3em

        .btn-login
            color: #fff
            a
                list-decoration: none
        .btn-login:hover
            text-decoration: none
        
        .btn-geocoding
            cursor: pointer
            margin-top: 2.5px
            margin-right: 25px
            border-radius: 50%
            padding: 5px
            background: rgba(#f15a29, 0.2)
            border: none
        .btn-geocoding:hover
            background: rgba(#f15a29, 0.5)
        
        .btn-active
            background: rgba(#f15a29, 0.5)
        .btn-active:hover
            background: rgba(#f15a29, 0.2)

</style>
