<template>
    <div class="box-info" v-show="boxNotifications">
      <header class="header">
        <h1>Notifications</h1>
        <button class="btn" @click="closeBox()">
          <md-icon>close</md-icon>
        </button>
      </header>
      <p-notifications></p-notifications>
    </div>
</template>

<script>
  import Api from '@/middleware/ApiVGI'
  import { mapState } from 'vuex'
  import Notifications from '@/views/components/dashboard/Notifications'

export default {
    components: {
      'p-notifications': Notifications
    },
    computed: {
      ...mapState('map', ['boxNotifications'])
    },
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
        closeBox() {
            this.$store.dispatch('map/setBoxNotifications', false)
        },
    }
}
</script>

<style lang="sass" scoped>
.box-info
    position: absolute
    top: 20px
    right: 60px
    border-radius: 10px
    overflow: auto
    padding: 10px
    background: rgba(#FFF, 0.7)
    z-index: 1
    max-width: 40%
    min-width: 40%
    max-height: 75%

    .header
        width: 100%
        border-bottom: 1px solid #f15a29
        h1
            padding: 5px 5px 10px 5px
            font-size: 1.3em
            font-weight: 400
            font-family: 'Roboto' !important
            display: inline-block
            margin: 0 !important

        .btn
            margin: 3px !important
            padding: 2px !important
            background: none
            font-size: 1em
            border: none
            float: right
            display: inline-block
        .btn:hover
            background: rgba(#000, 0.1)

    .body
        padding: 10px 20px
        background: #FFF


</style>
