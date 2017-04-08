<template>
  <div>
    <h2 v-if="title !== undefined && title.length !== 0" v-text="title"></h2>
    <div>
      <input class="configurator__input" spellcheck="false" :placeholder="placeholder" v-model="storeValue">
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: 300;
}

.configurator__input {
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
  name: 'configurator-input',
  props: {
    title: String,
    placeholder: String,
    storeProperty: String,
    storeCommitEvent: String,
  },
  computed: {
    storeValue: {
      get() {
        return this.$store.state[this.storeProperty];
      },
      set(value) {
        this.$store.commit(this.storeCommitEvent, value);
      },
    },
  },
};

</script>
