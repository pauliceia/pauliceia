<template>
    <section class="application">
        <div class="content-app">
            <p-header/>

            <router-view/>
            
            <p-aside-right v-if="this.$route.path == '/explore'" class="aside-right"/>
        </div>        
    </section>
</template>
<script>
import { mapState } from 'vuex'

import Header from '@/views/components/application/Header'
import AsideRight from '@/views/components/aside-right/Main'

export default {
    components: {
        'p-header': Header,
        'p-aside-right': AsideRight
    }
    
}
</script>

<style lang="sass">
body
    background: #fff

.application
    width: 100% !important 
    display: flex
    align-items: stretch
    height: 100%

    .content-app
        width: 100% !important

        .aside-right
            position: absolute
            width: 50px
            right: 0
            top: 84px
            bottom: 0
</style>