<template>
    <div class="modal fade" id="modalAddLayer" data-backdrop="static" tabindex="-1" aria-labelledby="AddLayer">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ $t('map.addLayer.title') }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <el-input
                        placeholder="Search Here"
                        v-model="filterText">
                    </el-input>
                    <br/>
                    <br/>
                    <el-tree
                        class="filter-tree"
                        :data="originalData"
                        show-checkbox
                        :props="defaultProps"
                        :filter-node-method="filterNode"
                        ref="tree2">

                        <span class="custom-tree-node" slot-scope="{ node, data }">
                            <span v-if="!node.icon"><md-icon>folder_open</md-icon></span>
                            <span v-if="node.icon"><md-icon>map</md-icon></span>
                            <span :style="!node.icon ? 'color: green' : 'color: black'">{{ node.label }}</span>
                        </span>

                    </el-tree>

                    <button class="btn btn-block btn-outline-success" type="button" @click="getSelectedTree()">{{ $t('map.addLayer.save') }}</button>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">{{ $t('map.addLayer.close') }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import DataJson from '@/views/assets/js/indexThemesTest'

export default {
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },

    methods: {
      filterNode(value, data) {
        if (!value) return true;
        else {
            let label = data.label.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            value = value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            
            return label.indexOf(value) !== -1;
        }
      }
    },

    data() {
      return {
        filterText: '',
        originalData: DataJson,
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };
</script>

<style lang="sass">
.modal-content
    .modal-body
        .btn
            display: block
            margin: 20px 0 10px 0
        .title-box
            color: #58595b !important
</style>