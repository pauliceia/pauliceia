<template>
  <div class="box-info" v-show="boxNotifications">
    <div class="header">
      <h1>Notifications</h1>
      <button class="btn" @click="closeBox()">
        <md-icon>close</md-icon>
      </button>
    </div>
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
    data () {
      return {
        activeName: 'first'
      };
    },
    methods: {
      closeBox () {
        this.$store.dispatch('map/setBoxNotifications', false)
      },
    }
  }
</script>

<style lang="sass" scoped>
  .box-info
    position: absolute
    width: 35%
    top: 167px
    right: 70px
    background: transparent
    z-index: 999

    .header
      width: 100%
      background: #fff
      border: 1px solid #7777
      padding: 5px 10px
      border-radius: 10px

      h1
        padding: 10px
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
        border: 1px solid #666
        float: right
        display: inline-block

      .btn:hover
        background: rgba(#000, 0.1)
</style>
