<template>
  <p-dash-layout :title="Denunciations">
    <div class="row">
      <div class="col-sm-8">
        <div class="card  text-center">
          <div class="card-header">
            Denunciations
          </div>
          <div class="card-body">



          </div>
        </div>
      </div>
    </div>
  </p-dash-layout>
</template>

<script>

  import DashLayout from '@/views/layouts/dashboard'
  import Api from '@/middleware/ApiVGI'
  import {mapState} from 'vuex'

    export default {
        components: {
          "p-dash-layout": DashLayout
        },
        name: "denunciations"
    }
</script>

<style scoped>

</style>
