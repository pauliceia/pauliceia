<template>
    <el-popover class="info" placement="top-start" width="200"
            trigger="hover"
            :content="text"
            type="primary">

        <button type="button" slot="reference" class="btn btn-outline-light info">
            <md-icon class="icon">error_outline</md-icon>
        </button>

    </el-popover>
</template>
<script>
export default {
    props: ['text']
}
</script>

<style lang="sass" scoped>
.info
    top: -1px
    border: none
    padding: 0px
    margin: 0px
    position: relative
    border-radius: 30px
    color: #ff6107
</style>
