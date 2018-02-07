<template>
    <section>
        <p-header/>
        
        <router-view/>
        
        <footer/>
    </section>
</template>
<script>
import { mapState } from 'vuex'

import Header from '@/views/components/application/Header'

export default {
    components: {
        'p-header': Header
    }
    
}
</script>

<style lang="sass">
    body
        background: #fff
</style>