<template>
    <md-list>
        <md-list-item :class="this.$route.path == '/dashboard/home' ? 'active': ''" to="/dashboard/home">
            <md-icon>account_balance</md-icon>
            <span class="md-list-item-text">{{ $t('dashboard.nav.home') }}</span>
        </md-list-item>

        <md-list-item :class="this.$route.path == '/dashboard/infos' ? 'active': ''" to="/dashboard/infos">
            <md-icon>error</md-icon>
            <span class="md-list-item-text">{{ $t('dashboard.nav.infos') }}</span>
        </md-list-item>
    </md-list>
</template>

<script>
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