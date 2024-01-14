<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-light">

            <router-link to="/home" class="navbar-brand">
                <img :src="logo" class="logo" title="logo of pauliceia" alt="logo of pauliceia" />
            </router-link>

            <!-- BUTTON MOBILE -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- content nav -->
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav">
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
                      <a :class="this.$route.path == '/tutorial' ? 'nav-link active': 'nav-link'" href="https://drive.google.com/drive/folders/1M7iU2iz46i2gIgfctkUCZdBARWJykcoT?usp=sharing" target="_blank" >Tutorial</a>
                    </li>
                    <li class="nav-item">
                        <router-link
                            :class="this.$route.path == '/contact' ? 'nav-link active': 'nav-link'"
                            to="/contact">{{ $t('nav.contact') }}</router-link>
                    </li>
                </ul>

                <div v-if="isUserLoggedIn">
                    <p-logAvatar :photo="user.picture" :name="user.name"/>
                </div>
                <div v-else>
                    <router-link to="/login" class="btn btn-login">
                        {{ $t('nav.login') }}
                        <div class="btn-img">
                            <img src="@/views/assets/images/user.svg" alt="login">
                        </div>
                    </router-link>
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

import logo from '@/views/assets/images/untitled-4.png'

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
        .navbar
            display: flex
            justify-content: space-between
            padding-left: 2%
            padding-right: 2%
            background: #111
            height: 80px

            .navbar-collapse
                flex-grow: 0 !important

            .navbar-brand
                width: 120px

                .logo
                    width: 50px
                    object-fit: contain
                    aspect-ratio: 1

            .navbar-nav
                display: flex
                align-items: center
            .navbar-nav li a
                text-decoration: none
                font-size: 16px
                color: #c6c6c6
                margin: 0 25px !important
                font-family: 'Archivo', sans-serif
            .navbar-nav li a:hover,.navbar-nav .active
                color: #f15a29 !important

        .btn-login
            display: flex
            align-items: center
            gap: 8px
            color: #c6c6c6
            font-family: 'Archivo', sans-serif
            font-size: 16px
            padding: 0 20px
            border-radius: 7.5px
            line-height: 1
            a
                list-decoration: none

            .btn-img
                background: #c6c6c6
                border-radius: 50%

                img
                    width: 12px
                    aspect-ratio: 1
                    margin: 12px

        .btn-active
            background: rgba(#f15a29, 0.5)
        .btn-active:hover
            background: rgba(#f15a29, 0.2)

        .box-language 
            margin-bottom: 10px

</style>
