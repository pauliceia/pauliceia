<template>
    <div class="modal fade" id="modalAddLayer" data-backdrop="static" tabindex="-1" aria-labelledby="AddLayer">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ $t('map.addLayer.title') }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <ul class="nav nav-tabs" id="tabFilter" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#themes" role="tab" aria-controls="themes" aria-selected="true">THEMES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#author" role="tab" aria-controls="author" aria-selected="false">AUTHOR</a>
                        </li>
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="themes" role="tabpanel" aria-labelledby="themes-tab">
                            theme
                        </div>
                        <div class="tab-pane fade" id="author" role="tabpanel" aria-labelledby="author-tab">
                            author filter     

                            <!-- <tree-menu 
                                :nodes="tree.nodes" 
                                :depth="0"   
                                :label="tree.label"
                                ></tree-menu>    -->

                            <!-- <script type="text/x-template" id="tree-menu">
                                <div class="tree-menu">
                                    <div class="label-wrapper" @click="toggleChildren">
                                    <div :style="indent" :class="labelClasses">
                                        <i v-if="nodes" class="fa" :class="iconClasses"></i>
                                        {{ label }}
                                    </div>
                                    </div>
                                    <tree-menu 
                                    v-if="showChildren"
                                    v-for="node in nodes" 
                                    :nodes="node.nodes" 
                                    :label="node.label"
                                    :depth="depth + 1"   
                                    >
                                    </tree-menu>
                                </div>
                            </script>                    -->
                        </div>
                    </div>
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

export default {
    data() {
        return {
            children: [
                { name: 'hello' },
                { name: 'wat' },
                {
                    name: 'child folder',
                    children: [
                        {
                            name: 'child folder',
                            children: [
                                { name: 'hello' },
                                { name: 'wat' }
                            ]
                        },
                        { name: 'hello' },
                        { name: 'wat' },
                        {
                            name: 'child folder',
                            children: [
                                { name: 'hello' },
                                { name: 'wat' }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    created() {
    }
}
</script>


<style lang="sass">
    .nav-tabs
        .nav-item
            width: 50%
            text-align: center
            .active
                font-weight: 600
            a:hover
                text-decoration: none !important
</style>