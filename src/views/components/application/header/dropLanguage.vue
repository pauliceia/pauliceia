<template>
    <div class="dropdown-menu" v-show="true">
        <md-list class="dropdown-item" @click="modifyLanguage('en')">
            <md-list-item>
                <md-icon :md-src="iconUSA"/>
                <span class="md-list-item-text">EN</span>
            </md-list-item>
        </md-list>
        <div class="dropdown-divider"></div>

        <md-list class="dropdown-item" @click="modifyLanguage('pt')">
            <md-list-item>
                <md-icon :md-src="iconBrazil"/>
                <span class="md-list-item-text">PT-BR</span>
            </md-list-item>
        </md-list>

    </div>
</template>

<script>
import iconUSA from '@/views/assets/images/icons/usa.svg'
import iconBrazil from '@/views/assets/images/icons/brazil.svg'

export default {
    name: 'p-dropLanguage',
    data() {
        return {
            iconUSA,
            iconBrazil
        }
    },
    methods: {
        modifyLanguage(lang) {
            this.$i18n.set(lang);
        }
    }
}
</script>

<style lang="sass">
    .md-list
        padding: 0 5px !important
        cursor: pointer

    .md-list:active
        background: rgba(0,0,0,0.2)
</style>