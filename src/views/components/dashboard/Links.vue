<template>
    <md-list>
        <md-list-item to="/dashboard/notifications">
            <md-icon>notifications</md-icon>
            <span class="md-list-item-text">{{ $t('dashboard.nav.notifications') }}</span>
        </md-list-item>

        <md-list-item to="/dashboard/infos">
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

    .md-list-item:hover
        background: rgba(#000, .08)
        border-left: 3px solid #7188AD
</style>