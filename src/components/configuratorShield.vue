<template>
  <div>
    <h2>Badges</h2>
    <div class="pure-g">
      <div class="pure-u-1-2" style="padding-right: 2px; box-sizing: border-box;">
        <input class="configurator__input" spellcheck="false" placeholder="Name" v-model="shieldName">
      </div>
      <div class="pure-u-1-2" style="padding-left: 2px; box-sizing: border-box;">
        <input class="configurator__input" spellcheck="false" placeholder="Value" v-model="shieldValue">
      </div>
    </div>
    <div class="pure-g">
      <div class="pure-u-1-1">
        <input class="configurator__input" spellcheck="false" placeholder="Url" v-model="shieldUrl">
      </div>
    </div>
    <div class="pure-g">
      <div class="pure-u-1-3" style="padding-right: 2px; box-sizing: border-box;">
        <input class="configurator__input" spellcheck="false" placeholder="Color" v-model="shieldColor">
      </div>
      <div class="pure-u-1-2" style="padding-right: 2px; padding-left: 2px; box-sizing: border-box;">
        <select v-model="selectedShield">
          <option v-for="option in shieldOptions" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="pure-u-1-6" style="padding-left: 2px; box-sizing: border-box;">
        <button v-on:click="addShield">Add</button>
      </div>
    </div>
  </div>
</template>

<style>
button {
  color: #faf5ff;
  width: 100%;
  height: 2.5em;
  border-radius: 7px;
  border: 0;
  text-transform: uppercase;
  background-color: #8477B7;
}

button:hover {
  background-color: #8b7fbb;
}

button:focus {
  outline: 0;
}

select {
  width: 100%;
  height: 2.5em;
  border: 0;
  border-radius: 7px;
  background-color: white;
  border: 1px solid #e0e9fc;
  color: #7287b2;
  font-family: Montserrat;
}

select:focus {
  outline: 0;
}

select option {
  width: 50px;
}
button {
  width: 100%;
}
h2 {
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: 300;
}

.configurator__input {
  font-family: Montserrat;
  color: #7287b2;
  border: 1px solid #e0e9fc;
  border-radius: 7px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-top: 10px;
  margin-bottom: 5px;
  box-sizing: border-box;
  width: 100%;
}

.configurator__input--50 {
  width: 50%;
}

input::-webkit-input-placeholder {
  color: #8ca6db;
}

input:focus {
  outline: none !important;
  border:1px solid #b993d6;
  box-shadow: 0 0 3px #719ECE;
}

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
        { text: 'Flat', value: 0 },
        { text: 'Plastic', value: 1 },
        { text: 'Flat-Squared', value: 2 },
        { text: 'Social', value: 3 },
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
