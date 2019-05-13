<template>
    <aside class="box-aside-right">
        <section class="box-top">
            <button type="button" 
                @click="actGeocoding()"  
                :class="this.boxGeocoding ? 'btn active' : 'btn'">
                <md-icon>location_on</md-icon>
            </button>

            <button type="button"
                @click="actInfoVector()"  
                :class="this.boxInfoVector ? 'btn active' : 'btn'">
                <md-icon>info</md-icon>
            </button>

            <button type="button"
                @click="actNotifications()"  
                :class="this.boxNotifications ? 'btn active' : 'btn'">
                <md-icon>message</md-icon>
            </button>
        </section>

        <div class="box-bottom">
            <el-tooltip :content="$t('main.developedBy')" placement="left" effect="light">
                <button type="button" class="btn">
                    <md-icon class="md-size-1x">help_outline</md-icon>
                </button>
            </el-tooltip>
        </div>
    </aside>    
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState('map', ['boxGeocoding', 'boxInfoLayer', 'boxInfoVector', 'boxNotifications'])
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
.box-aside-right
    display: flex
    flex-direction: column
    justify-content: space-between

    .box-top
        display: flex
        flex-direction: column
        margin-top: 110px
        background: rgba(77,77,77,0.7)
        padding: 0  7.5px
        border-radius: 10px 0 0 10px
        z-index: 10
        .btn
            width: 100%
            height: 35px
            padding: 0
            margin: 7.5px 0
            border-radius: 5px
            background: rgba(#FFF, 0.7)
            .md-icon
                color: rgb(77,77,77)

        .btn:hover, .btn.active
            background: rgba(#FFF, 0.9)
    
    .box-bottom
        display: flex
        flex-direction: column
        margin-bottom: 50px 
        background: rgba(77,77,77,0.7)
        padding: 7.5px 0
        border-radius: 10px 0 0 10px
        .btn
            padding: 0
            background: none
            .md-icon
                color: rgba(#FFF, 0.7)
                font-size: 2em !important
</style>