<template>
    <section class="application">
        <div class="content-app">
            <p-header/>

            <router-view/>
        </div>

        <p-aside-right v-if="this.$route.path == '/explore'" class="aside-right"/>
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
        width: 50px
        background: rgb(77,77,77)
</style>