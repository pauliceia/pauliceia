<template>
    <div>
        <el-dialog
            title="select layers"
            :visible.sync="dialogVisible"
            width="30%">
            <span>tree of layers</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props: ['dialogVisible']
}
</script>

<style lang="sass" scoped>
</style>