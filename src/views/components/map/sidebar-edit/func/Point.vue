<template>
    <div class="box-func-edit">
        <el-radio-group v-model="option" size="medium">
            <el-radio-button label="ADD"><i class="el-icon-plus"></i> ADD</el-radio-button>
            <el-radio-button label="EDIT"><i class="el-icon-edit"></i> EDIT</el-radio-button>
            <el-radio-button label="DEL"><i class="el-icon-close"></i> DEL</el-radio-button>
        </el-radio-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            option: null
        }
    }
}
</script>

<style lang="sass" scoped>

</style>