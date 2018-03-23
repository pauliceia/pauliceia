<template>
    <md-list-item :class="actInfo ? 'md-active' : ''" @click="popup()">
        <md-icon>touch_app</md-icon>
        <span class="md-list-item-text">{{ $t('map.sidebar.viewinfo') }}</span>
    </md-list-item>
</template>

<script>
export default {
    data() {
        return {
            actInfo: false,
            select: null
        }
    },
    methods: {
        popup() {
            if(this.actInfo){
                this.$root.olmap.removeInteraction(this.select);
                this.select = null

            } else {
                this.select = new ol.interaction.Select();
                this.$root.olmap.addInteraction(this.select);

                this.select.on('select', function(e) {
                    let featSelect = e.selected[0];
                    alert(featSelect.values_.name);
                });
            } 

            this.actInfo = !this.actInfo           
        }
    }
  }
</script>

<style lang="sass" scoped>
    .md-list-item-text, .md-icon
        color: #FFF !important
 
</style>