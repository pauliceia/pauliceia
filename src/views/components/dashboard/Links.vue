<template>
    <md-list>
        <md-list-item :class="this.$route.path == '/dashboard/home' ? 'active': ''" to="/dashboard/home">
            <md-icon>account_balance</md-icon>
            <span class="md-list-item-text">{{ $t('dashboard.nav.home') }}</span>
        </md-list-item>

        <md-list-item :class="this.$route.path == '/dashboard/newLayer' ? 'active': ''" to="/dashboard/newLayer">
            <md-icon>layers</md-icon>
            <span class="md-list-item-text">{{ $t('dashboard.nav.newLayer') }}</span>
        </md-list-item>

        <md-list-item :class="this.$route.path == '/dashboard/keywords' ? 'active': ''" to="/dashboard/keywords">
            <md-icon>add_to_photos</md-icon>
            <span class="md-list-item-text">{{ $t('dashboard.nav.keywords') }}</span>
        </md-list-item>

        <md-list-item :class="this.$route.path == '/dashboard/denunciations' ? 'active': ''" to="/dashboard/denunciations" v-if="user.is_the_admin">
          <md-icon>report</md-icon>
          <span class="md-list-item-text">Denunciations</span>
        </md-list-item>

        <!--<md-list-item :class="this.$route.path == '/dashboard/infos' ? 'active': ''" to="/dashboard/infos">-->
            <!--<md-icon>error</md-icon>-->
            <!--<span class="md-list-item-text">{{ $t('dashboard.nav.infos') }}</span>-->
        <!--</md-list-item>-->
    </md-list>
</template>

<script>

  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState('auth', ['isUserLoggedIn', 'user']),
    },
    mounted() {

    }
  }
</script>

<style lang="sass" scoped>
*
    color: #666

.md-list
    padding: 0 !important

    .md-list-item:hover, .active
        background: rgba(#000, .08)
        border-left: 3px solid #7188AD
</style>
