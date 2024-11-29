<!-- <template>
    <div class="cont">
      <embed src="/static/pdf/tutorial_pauliceia.pdf" class="pdf">
    </div>
</template> -->
<template>
  <section class="page-weapper" itemscope itemtype="http://schema.org/CreativeWork">

    <div class="container">
      <header class="row row-style justify-content-md-center">
        <div class="col-sm-4 column-style">
          <div class="card card-style">
            <div class="card-body"><br>
              <h5 class="card-title">{{ $t('tutorial.tutorial1') }}</h5><br>
              <div class="card-text" itemprop="about" v-html="$t('tutorial.tutorial2')"/>
              <div class="row row-style justify-content-md-center">
                <a :href="$t('tutorial.links.download2')" class="btn btn-download">{{ $t('tutorial.download1') }}</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>

    <div class="container2">
      <div class="container">
        <div class="row justify-content-md-left">
          <div class="col-sm-12 column-style">
            <h5 class="title2">{{ $t('tutorial.tutorial3') }}</h5><br>
          </div>
        </div>
        {{/**/}}
        <div class="row justify-content-md-left row-style">
          <div class="col-sm-4 column-style text-right" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <h5 class="title2">{{ $t('tutorial.tutorial4') }}</h5><br>
            <!-- {{ $t('tutorial.tutorial4') }}  -->
            <!-- {{ $t('about.desc1') }} -->
          </div>
        </div>
        <div class="row justify-content-md-left row-style">
          <div class="col-sm-4 column-style text-right" itemprop="contributor" itemscope itemtype="https://schema.org/Person">
            <a :href="$t('tutorial.links.download3')" class="btn btn-drive">{{ $t('tutorial.drive1') }}</a>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
import HowToCite from '@/views/components/HowToCite.vue'

export default {
  components: {
    HowToCite
  }
}
</script>

<!-- <script>
    export default {
        name: "tutorial"
    }
</script> -->


<style lang="sass" scoped>
  .page-weapper
    background: url('~@/views/assets/images/mapa5_1877.jpg') no-repeat center center fixed;
    background-size: cover;

    .container

      position: relative
      padding-top: 300px
      padding-bottom: 50px

      .column-style:first-child
        padding-left: 0

      .column-style:last-child
        padding-right: 0

      .btn-drive
          color: #FFFFFF
          background: #f15a29
          font-family: IrisUPC
          font-size: 30px
          padding: 200 px 20px
          border-radius: 7.5px
          line-height: 1
          a
            text-decoration: none
            display: inline-block

      .card-style
        border-radius: 20px
        background-color: #ffb364
        min-height: 300px

        .card-text
          font-size: 16px
          margin-bottom: 20px;

        .btn-download
          color: #FFF
          background: #f15a29
          font-family: IrisUPC
          font-size: 30px
          padding: 0 20px
          border-radius: 7.5px
          line-height: 1
          a
            list-decoration: none

    .container2
      background-color: #c6c6c6
      padding-TOP: 50px
      padding-bottom: 100px

      .container
        padding: 0

      .row
        margin: -20px

      .row-style
        padding-bottom: 0px

      .title2
        position: relative
        padding-top: 0px
      .column-style.text-right
        margin-top: 30px

</style>