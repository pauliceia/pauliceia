<template>
    <div v-show="true" class="box-language">
        <md-icon :md-src="iconBrazil" @click.native="modifyLanguage('pt')"/>
        <md-icon :md-src="iconUSA" @click.native="modifyLanguage('en')"/>
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
    .md-icon
        cursor: pointer

</style>