<template>
    <div class="cont">
      <embed src="/static/pdf/tutorial_pauliceia.pdf" class="pdf">
    </div>
</template>

<script>
    export default {
        name: "tutorial"
    }
</script>

<style lang="sass" scoped>
  *
    box-sizing: border-box
    margin: 0
    padding: 0

  .pdf
    position: relative
    width:  100%
    height: 90.75vh

  .cont
    height: max-content
</style>
