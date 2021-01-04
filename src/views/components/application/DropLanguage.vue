<template>
    <div v-show="true" class="box-language">
        <div class="row">    
            <md-icon :md-src="iconBrazil" @click.native="modifyLanguage('pt')"/>
        </div>
        <div class="row">
            <md-icon :md-src="iconUSA" @click.native="modifyLanguage('en')"/>
        </div>
    </div>
</template>

<script>
import iconUSA from '@/views/assets/images/icons/usa.svg'
import iconBrazil from '@/views/assets/images/icons/brazil.svg'

import 'vue-material/dist/vue-material.min.css'

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

<style lang="sass" scoped>
.box-language
    padding: 0 0 0 20px
    .row
        display: table-cell
        padding: 5px
    .md-icon
        cursor: pointer
</style>
