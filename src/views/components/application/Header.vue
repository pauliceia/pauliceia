<template>
    <header>
        <div class="sub-nav"/>

        <nav class="navbar navbar-expand-md navbar-dark">
            <div class="container">
            
                <router-link to="/" class="navbar-brand">
                    <img :src="logo" title="logo of pauliceia" alt="logo of pauliceia" />
                </router-link>
                
                <!-- BUTTON MOBILE -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- content nav -->
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/explore">{{ $t('nav.explore') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">{{ $t('nav.about') }}</router-link>
                        </li>
                        <li class="nav-item dropdown" style="cursor: pointer">
                            <a class="nav-link dropdown-toggle" style="text-transform: uppercase;" data-toggle="dropdown">{{ $i18n.locale() }}</a>
                            
                            <!-- component of language -->
                            <p-dropLanguage />

                        </li>
                    </ul>
                    
                    <div v-if="logado">
                        <p-logAvatar />
                    </div>
                    <div v-else>
                        <router-link to="/login" class="btn btn-default">{{ $t('nav.login') }}</router-link>
                    </div>
                </div>

            </div><!-- END .CONTAINER -->
        </nav>
    </header>
</template>

<script>
import LogAvatar from '@/views/components/application/LogAvatar'
import dropLanguage from '@/views/components/application/DropLanguage'

import logo from '@/views/assets/images/logo.png'

export default {
    components: {
        'p-logAvatar': LogAvatar,
        'p-dropLanguage': dropLanguage
    },
    data() {
        return {
            logo,
            logado: false
        }
    }
}
</script>

<style lang="sass" scoped>
    header
        background: #304A73 !important
        border-bottom: 1px solid #0B1D3B

    .sub-nav
        width: 100%
        height: 5px
        background: #0B1D3B        

    .navbar-brand
        width: 120px

    .navbar-nav li a
        text-decoration: none
        font-size: 1.3em 

    .btn-default
        background: #5D7AA9
        color: #fff
    .btn-default:hover
        background: #7188AD
        text-decoration: none
</style>
