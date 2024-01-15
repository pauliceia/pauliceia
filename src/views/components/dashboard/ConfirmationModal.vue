<template>
    <popup-modal ref="popup" name="confirmation-popup">
        <h2 style="margin-top: 0">{{ title }}</h2>
        <p>{{ message }}</p>
        <div class="btns">
            <button class="btn btn-secondary" @click="_cancel">{{ cancelButton }}</button>
            <button class="btn btn-success" name="ok-button" @click="_confirm">{{ okButton }}</button>
        </div>
    </popup-modal>
</template>

<script>
    import PopupModal from '../PopupModal.vue'

  export default {
    name: "ConfirmationModal",
    components: {
      PopupModal
    },
    data: () => ({
        title: undefined,
        message: undefined, 
        okButton: undefined, 
        cancelButton: 'Voltar',
    
        resolvePromise: undefined,
        rejectPromise: undefined,
    }),

    methods: {
        show(opts = {}) {
            this.title = opts.title
            this.message = opts.message
            this.okButton = opts.okButton
            if (opts.cancelButton) {
                this.cancelButton = opts.cancelButton
            }
            
            this.$refs.popup.open()
            
            return new Promise((resolve, reject) => {
                this.resolvePromise = resolve
                this.rejectPromise = reject
            })
        },

        _confirm() {
            this.$refs.popup.close()
            this.resolvePromise(true)
        },

        _cancel() {
            this.$refs.popup.close()
            this.resolvePromise(false)
        },
    },
  }

</script>

<style scoped>
.btns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>