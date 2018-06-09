<template>
  <div>
    <h2>Badges</h2>
    <div class="pure-g">
      <div class="pure-u-1-2 grid__padding--right">
        <input class="configurator__input" spellcheck="false" placeholder="Name" v-model="shieldName">
      </div>
      <div class="pure-u-1-2 grid__padding--left">
        <input class="configurator__input" spellcheck="false" placeholder="Value" v-model="shieldValue">
      </div>
    </div>
    <div class="pure-g">
      <div class="pure-u-1-1">
        <input class="configurator__input" spellcheck="false" placeholder="Url" v-model="shieldUrl">
      </div>
    </div>
    <div class="pure-g">
      <div class="pure-u-1-3 grid__padding--right">
        <input class="configurator__input" spellcheck="false" placeholder="Color" v-model="shieldColor">
      </div>
      <div class="pure-u-1-2 grid__padding--left--right">
        <select v-model="selectedShield">
          <option v-for="option in shieldOptions" v-bind:value="option.value" v-text="option.text"></option>
        </select>
      </div>
      <div class="pure-u-1-6 grid__padding--left">
        <vue-button
          :label="'Add'"
          :onClick="addShield">
        </vue-button>
      </div>
    </div>
  </div>
</template>

<style>
.grid__padding--left {
  padding-left: 2px;
  box-sizing: border-box;
}

.grid__padding--right {
  padding-right: 2px;
  box-sizing: border-box;
}

.grid__padding--left--right {
  padding-left: 2px;
  padding-right: 2px;
  box-sizing: border-box;
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
  border: 1px solid #b993d6;
  box-shadow: 0 0 3px #719ece;
}
</style>

<script>
import VueButton from '@/components/vue-r-button';

export default {
  name: 'configurator-shield',
  components: {
    'vue-button': VueButton,
  },
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
