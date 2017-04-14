<template>
  <button :class="buttonClass" v-on:click="defaultOnClick" v-text="label"></button>
</template>

<script>
export default {
  name: 'vue-r-button',
  props: {
    label: String,
    onClick: Function,
    disabled: Boolean,
  },
  computed: {
    buttonClass: function getButtonClass() {
      if (this.disabled) {
        return 'disabled';
      }
      return '';
    },
  },
  methods: {
    defaultOnClick: function defaultOnClick(event) {
      if (this.onClick === undefined || this.disabled) {
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
  font-family: Montserrat;
}

.disabled {
  background-color: #dddaea;
}

button:hover {
  background-color: #8b7fbb;
}

.disabled:hover {
  background-color: #dddaea;
  cursor: default;
}

button:focus {
  outline: 0;
}
</style>
