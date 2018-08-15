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
      ...mapState('map', ['boxNotifications']),
      ...mapState('auth', ['isUserLoggedIn', 'user'])
    },
    data() {
      return {
        activeName: 'first',
        notifications: [],
        notif: [],
      };
    },
    methods: {
        closeBox() {
            this.$store.dispatch('map/setBoxNotifications', false)
        },
        handleClick(tab, event) {
            // console.log(tab, event);
        }
    },
    beforeCreate() {
      const vm = this
      Api().get('/api/notification/').then(function (response) {
        //Api().get('/api/notification/?notification_id=' + vm.user.user_id).then(function (response) {
        Api().get('/api/notification/').then(function (response) {
          response.data.features.filter(e => {
            vm.notifications.push(e.properties)

            Api().get('/api/user/?user_id='+e.properties.user_id_creator).then(function (response) {
              vm.notif.push({'description': e.properties.description, 'name':response.data.features[0].properties.name, 'date': e.properties.created_at})
              //console.log(response.data.features[0].properties.name)
            })

          })
          //console.log(vm.notifications)
        })
      })
    }
}
</script>

<style lang="sass" scoped>
.box-info
    position: absolute
    top: 20px
    right: 20px
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
        .notification-box
            margin: 10px
            background: rgba(#000, 0.1)
            padding: 20px

            .photo
                display: inline-block
                width: 40px
                padding: 10px
                text-align: center
                color: #FFF
                border-radius: 50%
                background: #666

            .credentials
                display: inline-block
                margin: 0 0 0 10px
                .author
                    font-weight: 600
                    margin-top: 5px !important
                    font-size: 1.1em
                .date
                    color: #666
                    font-size: 0.9em
                p
                    margin: 0 0 5px 0 !important

            .content
                text-align: justify
                margin-top: 5px

            .comments
                width: 100%
                text-align: right
                color: #0099ff
                cursor: pointer
                margin-top: -10px
                margin-bottom: 5px

</style>
