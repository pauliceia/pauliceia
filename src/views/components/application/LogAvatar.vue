<template>

    <md-menu class="mt-2 mt-md-0" md-size="medium" md-align-trigger>
        <md-button md-menu-trigger>
            <md-avatar class="md-avatar-icon md-large">
                {{ title[0] }}
            </md-avatar>
        </md-button>
        
        <md-menu-content>
            <md-menu-item to="/dashboard/profile">
                <md-icon>person</md-icon>
                <span class="md-list-item-text">{{ $t('nav.profile') }}</span>
            </md-menu-item>
            <md-menu-item to="/dashboard">
                <md-icon>home</md-icon>
                <span class="md-list-item-text">{{ $t('nav.dashboard') }}</span>
            </md-menu-item>
            <md-menu-item @click="logout">
                <md-icon>exit_to_app</md-icon>
                <span class="md-list-item-text">{{ $t('nav.logout') }}</span>
            </md-menu-item>
        </md-menu-content>
    </md-menu>

</template>
<script>
export default {
    name: 'p-logAvatar',
    props: [
        'title'
    ],
    methods: {
        logout() {
            this.$store.dispatch('auth/setUser', null)
            this.$store.dispatch('auth/setToken', null)

            this.$router.push({
                path: '/login'
            })
        }
    }
}
</script>
<style lang="sass" scoped>
    $color-nav: #454545

    @import '~vue-material/dist/vue-material.min.css'
    
    .md-menu
        float: right
        margin: 0 !important

    .md-button
        border-radius: 50px
        background: rgba(#000, 0.07)
    
    .md-menu-content
        background: rgba(255,255,255,0.7)

        .md-list
            padding: 0 !important

            .md-menu-item:hover
                background: rgba(0,0,0,0.1)

            .md-icon
                color: $color-nav
                margin-right: 10px !important

            .md-list-item-text
                color: $color-nav

</style>