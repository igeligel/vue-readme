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

<style>

</style>
