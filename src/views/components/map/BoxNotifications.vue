<template>
    <div class="box-info" v-show="boxNotifications">
      <header class="header">
        <h1>NOTIFICATIONS</h1>
        <button class="btn" @click="closeBox()">
          <md-icon>close</md-icon>
        </button>
      </header>
      <div class="body">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="GENERAL" name="first">
            <div class="nofitication">
              <div v-for="n in notif">
                <div class="notification-box">

                  <div style="display: flex; align-items: center;">
                    <div class="photo">B</div>
                    <div class="credentials">
                      <p class="author">{{n.name}}</p>
                      <p class="date">{{n.date}}</p>
                    </div>
                  </div>

                  <p class="content">{{n.description}}</p>
                  <p class="comments">Answer</p>
                </div>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="FOLLOWING" name="second">
            <div v-for="test in 8" :key="test">
              <div class="notification-box">

                <div style="display: flex; align-items: center;">
                  <div class="photo">C</div>
                  <div class="credentials">
                    <p class="author">Carlos Noronha</p>
                    <p class="date">05/02/2018</p>
                  </div>
                </div>

                <p class="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p class="comments">see more</p>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
  import Api from '@/middleware/ApiVGI'
  import { mapState } from 'vuex'

export default {
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
    top: 40px
    right: 0
    bottom: 120px
    overflow: auto
    padding: 20px 20px
    background: rgba(#FFF, 0.95)
    z-index: 1
    max-width: 45%

    .header
        width: 100%
        border-bottom: 1px solid #f15a29
        h1
            padding: 10px
            font-size: 2em
            display: inline-block
            margin: 0 !important

        .btn
            margin-top: 3px !important
            background: none
            border: none
            float: right
            display: inline-block
        .btn:hover
            background: rgba(#000, 0.1)
    
    .body     
        padding: 10px 20px   
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
