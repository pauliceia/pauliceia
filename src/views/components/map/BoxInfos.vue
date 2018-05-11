<template>
    <div class="box-info" v-show="boxInfos">
        <header class="header">
            <h1>LAYER FULL TITLE</h1>
            <button class="btn" @click="closeBox()">
                <md-icon>close</md-icon>
            </button>
        </header>
        <div class="body">
            <ul class="description">
                <li><b>THEME:</b> Saúde Pública</li>
                <li><b>DESCRIPTION:</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</li>
                <li><b>CREATION DATE:</b> 02/01/2018</li>
                <li><b>AUTHOR:</b> Carlos Alberto Noronha</li>
            </ul>
            <div class="nofitication">
                <md-list-item>
                    <md-icon>notifications</md-icon>
                    <p class="md-list-item-text">Notifications:</p>
                </md-list-item>

                <div v-for="test in 8" :key="test">
                    <div class="notification-box">
                        <p class="author">Beto Noronha</p>
                        <p class="date">05/02/2018</p>
                        <p class="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
      ...mapState('map', ['boxInfos'])
    },
    methods: {
        closeBox() {
            this.$store.dispatch('map/setBoxInfos', false)
        }
    }
}
</script>

<style lang="sass" scoped>
.box-info
    position: absolute
    top: 50px
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
        .description
            padding: 15px 20px 0 20px
            font-size: 1.2em
            li
                padding: 15px 0 0 0
                text-align: justify
        
        .nofitication
            padding: 0 20px

            .md-list-item
                border-bottom: 1px dashed #CCC
                margin: 0 !important

                .md-list-item-content
                    margin: 0 !important
                    .md-icon
                        margin: 0 !important
                    .md-list-item-text
                        font-weight: 600
                        font-size: 1.5em
                        margin: 0px 0 0 10px !important

            .notification-box
                margin: 10px
                background: rgba(#000, 0.1)
                padding: 20px
                p
                    margin: 0 0 5px 0 !important
                .author
                    font-weight: 600
                    font-size: 1.1em
                .date
                    color: #666
                    font-size: 0.9em
                .content
                    text-align: justify

</style>