<template>
  <md-list>
    <md-list-item :class="this.$route.path == '/dashboard/home' ? 'active': ''" to="/dashboard/home">
      <span class="md-list-item-text">{{ $t('dashboard.nav.home') }}</span>
      <i class="flaticon-adjust md-icon"></i>
    </md-list-item>

    <md-list-item :class="this.$route.path == '/dashboard/newLayer' ? 'active': ''" to="/dashboard/newLayer">
      <span class="md-list-item-text">{{ $t('dashboard.nav.newLayer') }}</span>
      <i class="flaticon-layer md-icon"></i>
    </md-list-item>

    <md-list-item :class="this.$route.path == '/dashboard/keywords' ? 'active': ''" to="/dashboard/keywords">
      <span class="md-list-item-text">{{ $t('dashboard.nav.keywords') }}</span>
      <i class="flaticon-push-pin md-icon"></i>
    </md-list-item>

    <md-list-item :class="this.$route.path == '/dashboard/denunciations' ? 'active': ''"
      to="/dashboard/denunciations" v-if="user.is_the_admin">
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
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState('auth', ['isUserLoggedIn', 'user']),
    },
    mounted () {}
  }
</script>

<style lang="sass" scoped>
  *
    color: #666

    .md-list
      padding: 0 !important

      .md-list-item-text
        text-align: right!important;
        display: block;

      .md-list-item:hover, .active, .active .md-list-item-text
        color: #ff6107!important

      .md-list-item:hover, .active
        border-right: 3px solid #ff6107
</style>
