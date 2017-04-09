<template>
  <div>
    <h2>Examples</h2>
    <div class="pure-g">
      <template v-for="example in this.$store.state.examples">
        <div class="pure-u-1-8" style="text-align: center;">
          <span>X</span>
        </div>
        <div class="pure-u-7-8 truncate-overflow" style="box-sizing: border-box">
          <a :href="example.url" target="_blank" rel="noopener noreferrer">
            <span v-text="example.name"></span>
          </a>
        </div>
      </template>
    </div>
    <div class="pure-g">
      <div class="pure-u-3-8 grid__padding--right">
        <configurator-input
          ref="inputName"
          :placeholder="'Name'">
        </configurator-input>
      </div>
      <div class="pure-u-5-8 grid__padding--left">
        <configurator-input
          ref="inputUrl"
          :placeholder="'Url'">
        </configurator-input>
      </div>
      <vue-r-button
        :label="'Add Example'"
        :onClick="addExample">
      </vue-r-button>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import ConfiguratorInput from '@/components/configuratorInput';
import VueButton from '@/components/vue-r-button';

export default {
  name: '',
  components: {
    'configurator-input': ConfiguratorInput,
    'vue-r-button': VueButton,
  },
  data() {
    return {
      nameError: false,
      urlError: false,
    };
  },
  methods: {
    addExample: function addExample() {
      const name = this.$refs.inputName.storeValue;
      if (name === undefined || name === '') {
        return;
      }
      const value = this.$refs.inputUrl.storeValue;
      if (value === undefined || value === '') {
        return;
      }
      const payload = {
        name: this.$refs.inputName.storeValue,
        url: this.$refs.inputUrl.storeValue,
      };
      this.$store.commit('ADD_EXAMPLE', payload);
      this.$refs.inputName.storeValue = '';
      this.$refs.inputUrl.storeValue = '';
    },
  },
};
</script>
