<template>
  <div>
    <h2>Showcase</h2>
    <div class="pure-g">
      <template v-for="showcaseImage in this.$store.state.showcaseImages">
        <div class="pure-u-1-8" style="text-align: center;">
          <span>X</span>
        </div>
        <div class="pure-u-7-8 truncate-overflow" style="box-sizing: border-box">
          <span v-text="showcaseImage"></span>
        </div>
      </template>
    </div>
    <div class="pure-g">
      <div class="pure-u-5-6 grid__padding--right">
        <configurator-input ref="inputField"
          :placeholder="'Add Image Url'">
        </configurator-input>
      </div>
      <div class="pure-u-1-6 grid__padding--left">
        <vue-r-button
          :label="'Add'"
          :onClick="addShowcaseImage">
        </vue-r-button>
      </div>
    </div>
  </div>
</template>

<style>
.truncate-overflow {
  width: calc(100% - 12.5%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.grid__padding--right {
  padding-right: 2px;
  box-sizing: border-box;
}

.grid__padding--left {
  padding-left: 2px;
  box-sizing: border-box;
}
</style>

<script>
import ConfiguratorInput from '@/components/configuratorInput';
import VueButton from '@/components/vue-r-button';

export default {
  name: 'configurator-showcase',
  components: {
    'configurator-input': ConfiguratorInput,
    'vue-r-button': VueButton,
  },
  computed: {
    urls: function getUrls() {

    },
  },
  methods: {
    addShowcaseImage: function addShowcaseImage() {
      this.$store.commit('ADD_SHOWCASE_IMAGE', this.$refs.inputField.storeValue);
      this.$refs.inputField.storeValue = '';
    },
  },
};
</script>
