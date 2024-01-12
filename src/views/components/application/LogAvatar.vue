<template>

    <md-menu class="mt-2 mt-md-0" md-size="medium" md-align-trigger>
        <md-button md-menu-trigger>
            <md-avatar class="md-avatar-icon">
                <div class="logo">
                    <img :src="imagePerson" />
                </div>
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
import User from '@/middleware/User'
import ImgPerson from '@/views/assets/images/icon_person.png'
import 'vue-material/dist/vue-material.min.css'

export default {
    name: 'p-logAvatar',

    props: [
        'name', 'photo'
    ],

    data(){
        return {
            imagePerson: ''
        }
    },

    mounted() {
        this.imagePerson = this.photo != '' ? this.photo : ImgPerson
    },

    methods: {
        logout() {
            this.$store.dispatch('auth/setUser', null)
            this.$store.dispatch('auth/setToken', null)

            this.$message({
                showClose: true,
                dangerouslyUseHTMLString: true,
                message: this.$t('nav.msgLogout'),
                type: 'success'
            })

            setTimeout(function(){ location.reload(); }, 1500);
        }
    }
}
</script>
<style lang="sass" scoped>
    $color-nav: rgb(77,77,77)    
    .md-menu
        float: right
        margin: 0 !important

    .md-button
        border-radius: 10px
        background: #f15a29
        min-width: 0 !important
        height: 50px
    
    .md-menu-content
        background: none
        box-shadow: none !important

        .md-list
            padding: 0 !important

            .md-menu-item
                background: rgba(#FFF, 0.8)
                margin: 1px 0
                padding: 0 !important
                border-radius: 7.5px
                border: 1px solid #CCC
            .md-menu-item:hover
                background: #f15a29
                border: 1px solid #f15a29
                .md-list-item-text
                    color: #FFF
                .md-icon
                    color: #FFF
                
            .md-list-item-content
                padding: 5px 10px !important
                min-height: 0 !important
                    
            .md-icon
                color: $color-nav
                font-size: 1.3em !important
                min-width: 0
                margin-right: 5px !important

            .md-list-item-text
                color: $color-nav
                font-size: 1em
</style>
