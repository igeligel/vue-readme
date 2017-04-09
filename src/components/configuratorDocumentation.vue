<template>
  <div>
    <h3>Documentation</h3>
    <div class="pure-g">
      <div class="pure-u-5-6 grid__padding--right">
        <configurator-input
          ref="documentationUrlInput"
          :placeholder="'Documentation Url'">
        </configurator-input>
      </div>
      <div class="pure-u-1-6 grid__padding--left">
        <vue-r-button
          :label="'Add'"
          :onClick="addDocumentationUrl">
        </vue-r-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-weight: 300;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>

<script>
import VueButton from '@/components/vue-r-button';
import ConfiguratorInput from '@/components/configuratorInput';

export default {
  name: 'configurator-documentation',
  components: {
    'vue-r-button': VueButton,
    'configurator-input': ConfiguratorInput,
  },
  methods: {
    addDocumentationUrl: function addDocumentationUrl() {
      this.$store.commit('', this.$refs.documentationUrlInput.storeValue);
    },
  },
};
</script>
