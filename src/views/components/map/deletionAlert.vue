<template>
  <section class="boxS">
    <header class="header">
      <div class="popup-container" id="confirmationPopup">
        <h2><b>{{ $t('dashboard.deletionConfirmationPopup.confirmationText') }}</b></h2>
        <div class="button-container">

            <!-- Confirm button -->
            <button class="button confirm-button" @click="DeleteLayer()">{{ $t('dashboard.deletionConfirmationPopup.deleteButton') }}</button>

            <!-- Cancel button -->
            <button class="button cancel-button" @click="CloseDeletionPopup()">{{ $t('dashboard.deletionConfirmationPopup.cancelButton') }}</button>

        </div>
      </div>

      <!-- Close Button -->
      <button class="close-button" @click="CloseDeletionPopup()">
        <md-icon>close</md-icon>
      </button>

      <br>
    </header>
  </section>
</template>

<script>
  export default {
    name: "deletionAlert",

    props: {
      currentLayerId: Number
    },

    methods: {
      CloseDeletionPopup() {
        this.$emit('CloseDeletionPopup');
      },

      DeleteLayer(){
        this.$emit('deleteLayerById', this.currentLayerId);
        this.CloseDeletionPopup();
      },
    }
  }
</script>

<!-- <script setup>
</script> -->

<style lang="sass" scoped>
  .boxS
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    position: fixed 
    display: inline-block
    vertical-align: middle
    width: 30%
    border-radius: 10px
    padding: 30px
    background: rgba(236, 236, 236, 0.80)
    z-index: 99

  .header
    width: 100%
    border-bottom: 0px solid #f15a29
    display: flex
    justify-content: center
    padding-bottom: 20px

  .popup-container 
      max-width: 300px;
      padding: 20px;
      text-align: center;

  .button-container 
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
    

  .button 
      padding: 10px 30px;
      cursor: pointer;
      border: none;
      border-radius: 4px;
      color: #fff;
      font-size: 18px;
    
  .confirm-button 
      background-color: #4caf50;
  
  .cancel-button 
      background-color: #f44336;

  .confirm-button:hover
      background: rgba(#000, 0.1)
  
  .cancel-button:hover
      background: rgba(#000, 0.1)
    
  .close-button
    margin: 3px !important
    padding: 2px !important
    background: none
    font-size: 1em
    border: none
    float: right
    right: 20px
    position: absolute

  .close-button:hover
    background: rgba(#000, 0.1)
</style>
