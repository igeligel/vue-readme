<template>
  <div>
    <h2>Badges</h2>
    <input class="configurator__badge" spellcheck="false" placeholder="Name" v-model="shieldName">
    <input class="configurator__badge" spellcheck="false" placeholder="Value" v-model="shieldValue">
    <input class="configurator__badge" spellcheck="false" placeholder="Url" v-model="shieldUrl">
    <input class="configurator__badge" spellcheck="false" placeholder="Color" v-model="shieldColor">
    <h3>Style</h3>
    <select v-model="selectedShield">
      <option v-for="option in shieldOptions" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <button v-on:click="addShield">Add</button>
  </div>
</template>

<style>


</style>

<script>
export default {
  name: 'configurator-shield',
  data() {
    return {
      shieldName: '',
      shieldValue: '',
      shieldUrl: '',
      shieldColor: '',
      selectedShield: 0,
      shieldOptions: [
        { text: 'Default', value: 0 },
        { text: 'Plastic', value: 1 },
        { text: 'Flat', value: 2 },
        { text: 'Flat-Squared', value: 3 },
        { text: 'Flat-Squared', value: 4 },
      ],
    };
  },
  methods: {
    addShield: function addShield() {
      const shield = {
        name: this.shieldName,
        value: this.shieldValue,
        url: this.shieldUrl,
        style: this.selectedShield,
        color: this.shieldColor,
      };
      this.$store.commit('UPDATE_SHIELDS', shield);
    },
  },
};
</script>
