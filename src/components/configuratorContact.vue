<template>
  <div>
    <h2>Badges</h2>
    <div class="pure-g">
      <div class="pure-u-1-2 grid__padding--right">
        <input class="configurator__input" spellcheck="false" placeholder="Platform">
      </div>
      <div class="pure-u-1-2 grid__padding--left">
        <input class="configurator__input" spellcheck="false" placeholder="Url">
      </div>
    </div>
    <div class="pure-g">
      <div class="pure-u-1-3 grid__padding--right">
        <input class="configurator__input" spellcheck="false" placeholder="Color">
      </div>
      <div class="pure-u-1-2 grid__padding--left--right">
        <select v-model="selectedShield">
          <option v-for="option in shieldOptions" v-bind:value="option.value" v-text="option.text"></option>
        </select>
      </div>
      <div class="pure-u-1-6 grid__padding--left">
        <vue-button
          :label="'Add'">
        </vue-button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import VueButton from '@/components/vue-r-button';

export default {
  name: 'configurator-contact',
  components: {
    'vue-button': VueButton,
  },
  data() {
    return {
      selectedShield: 0,
      shieldOptions: [
        { text: 'Flat', value: 0 },
        { text: 'Plastic', value: 1 },
        { text: 'Flat-Squared', value: 2 },
        { text: 'Social', value: 3 },
      ],
    };
  },
};
</script>
