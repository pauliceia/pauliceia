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

    .container

      

      position: relative
      padding-top: 300px
      padding-bottom: 50px

      .column-style:first-child
        padding-left: 0

      .column-style:last-child
        padding-right: 0

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
      padding-bottom: 50px

      .container
        padding: 0

      .row
        margin: 0

      .row-style
        padding-bottom: 50px

      .title2
        position: relative
        padding-top: 20px


    .picture
      position: relative
      top: 20px

    .picture2
      position: relative
      top: 0px
      padding-top: 20px
      width: 400px
</style>