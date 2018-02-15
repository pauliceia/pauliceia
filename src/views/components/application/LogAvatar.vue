<template>

    <md-menu class="mt-2 mt-md-0" md-size="medium" md-align-trigger>
        <md-button md-menu-trigger>
            <md-avatar class="md-avatar-icon md-large">
                CN
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
            <md-menu-item>
                <md-icon>exit_to_app</md-icon>
                <span class="md-list-item-text">{{ $t('nav.logout') }}</span>
            </md-menu-item>
        </md-menu-content>
    </md-menu>

</template>
<script>
export default {
    name: 'p-logAvatar'
}
</script>
<style lang="sass" scoped>
    $color-nav: #454545

    @import '~vue-material/dist/vue-material.min.css'
    *
        color: #fff
    
    .md-menu
        float: right
    
    .md-button
        border-radius: 50px
    
    .md-menu-content
        background: rgba(255,255,255,0.6)

    .md-menu-item:hover
        background: rgba(0,0,0,0.1)

    .md-icon
        color: $color-nav
        margin-right: 10px !important
    
    .md-list-item-text
        color: $color-nav

</style>