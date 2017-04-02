<template>
  <button v-on:click="defaultOnClick" v-text="label"></button>
</template>

<script>
export default {
  name: 'vue-r-button',
  props: {
    label: String,
    onClick: Function,
  },
  methods: {
    defaultOnClick: function defaultOnClick(event) {
      if (this.onClick === undefined) {
        return;
      }
      this.onClick(event);
    },
  },
};
</script>

<style scoped>
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
</style>
