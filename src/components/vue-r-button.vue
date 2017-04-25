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
        return 'button--disabled';
      }
      return 'button';
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
.button {
  color: #faf5ff;
  width: 100%;
  height: 2.5em;
  border-radius: 7px;
  border: 0;
  text-transform: uppercase;
  background-color: #8477B7;
  font-family: Montserrat;
}

.button:hover {
  background-color: #8b7fbb;
}

.button:focus {
  outline: 0;
}

.button--disabled {
  background-color: #dddaea;
  color: #faf5ff;
  width: 100%;
  height: 2.5em;
  border-radius: 7px;
  border: 0;
  text-transform: uppercase;
  font-family: Montserrat;
}

.button--disabled:hover {
  background-color: #dddaea;
  cursor: default;
}

.button--disabled:focus {
  outline: 0;
}
</style>
