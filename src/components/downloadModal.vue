<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>Download Markdown</h3>
          </div>
          <div class="modal-body">
            <textarea style="height: 80vh; width: 100%;" v-text="this.$store.state.finalMarkdown"></textarea>
          </div>

          <div class="modal-footer pure-g">
            <div class="pure-u-1-12">
              <vue-r-button
                :label="'Download'"
                :disabled="true">
              </vue-r-button>
            </div>
            <div class="pure-u-5-6"></div>
            <div class="pure-u-1-12">
              <vue-r-button
                :label="'Close'"
                :onClick="closeModal">
              </vue-r-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
* {
  letter-spacing: normal;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 90%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #8ca6db;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

<script>
import VueButton from '@/components/vue-r-button';

export default {
  name: 'readme-download-panel',
  components: {
    'vue-r-button': VueButton,
  },
  methods: {
    closeModal: function closeModal() {
      this.$emit('close');
    },
  },
};
</script>
