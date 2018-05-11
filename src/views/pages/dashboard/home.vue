<template>
    <p-dash-layout title="Dashboard">
      <div class="row">
        <div class="col-sm-4">
          <div class="card  text-center">
            <div class="card-header">
              Notifications
            </div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card  text-center">
            <div class="card-header">
              My Layers
            </div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card text-center">
            <div class="card-header">
              Featured
            </div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </p-dash-layout>
</template>

<script>
import DashLayout from '@/views/layouts/dashboard'

export default {
    components: {
        "p-dash-layout": DashLayout
    }
}
</script>

<style lang="sass" scoped>

</style>
