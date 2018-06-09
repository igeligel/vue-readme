<template>
  <div class="configurator-textarea">
    <h2 class="configurator-textarea__heading" v-if="title !== undefined && title.length > 0" v-text="title"></h2>
    <textarea class="configurator-textarea__textarea" :placeholder="placeholder" :rows="rows" v-model="projectDescription" @keydown="adjustHeight" @keyup="adjustHeight"></textarea>
  </div>
</template>

<style scoped>
.configurator-textarea__heading {
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: 300;
}

.configurator-textarea__textarea {
  overflow-y: hidden;
  box-sizing: border-box;
  width: 100%;
  color: #7287b2;
  border: 1px solid #e0e9fc;
  border-radius: 7px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-top: 10px;
  margin-bottom: 5px;
  line-height: 1.5em;
}

.configurator-textarea__textarea::-webkit-input-placeholder {
  color: #8ca6db;
}

.configurator-textarea__textarea:focus {
  outline: none !important;
  border: 1px solid #b993d6;
  box-shadow: 0 0 3px #719ece;
}
</style>

<script>
export default {
  name: 'configurator-textarea',
  props: {
    title: String,
    placeholder: String,
    rows: Number,
    storeProperty: String,
    storeCommitEvent: String,
  },
  computed: {
    projectDescription: {
      get() {
        return this.$store.state[this.storeProperty];
      },
      set(value) {
        this.$store.commit(this.storeCommitEvent, value);
      },
    },
  },
  methods: {
    adjustHeight: function adjustHeight(event) {
      const textarea = event.srcElement;
      textarea.style.height = '1px';
      const lineHeight = parseInt(
        window.getComputedStyle(textarea)['line-height'],
        10,
      );
      textarea.style.height = `${lineHeight + textarea.scrollHeight}px`;
    },
  },
};
</script>
