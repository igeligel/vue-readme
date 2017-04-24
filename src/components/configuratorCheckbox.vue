<template>
  <div class="configurator-checkbox">
    <input class="configurator-checkbox__input" type="checkbox" value="None" id="squaredThree" name="check" v-model="checked" />
    <label class="configurator-checkbox__label" for="squaredThree"></label>
    <div class="configurator-checkbox__text-container">
      <span class="configurator-checkbox__text" v-text="text"></span>
    </div>
  </div>
</template>

<style scoped>
.configurator-checkbox {
  position: relative;
  height: 25px;
}

.configurator-checkbox__label {
  width: 25px;
  height: 25px;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  background: -webkit-linear-gradient(top, #ffffff 0%, #fcf8ff; 100%);
  border-radius: 4px;
  border: 1px solid #e0e9fc;
  box-sizing: border-box;
}

.configurator-checkbox__label:after {
  content: '';
  width: 14px;
  height: 7px;
  position: absolute;
  top: 5px;
  left: 3px;
  border: 3px solid #8477B7;
  border-top: none;
  border-right: none;
  background: transparent;
  opacity: 0;
  -webkit-transform: rotate(-45deg);
}

.configurator-checkbox__input {
  visibility: hidden;
}

.configurator-checkbox__input:checked + label:after {
  opacity: 1;
}

.configurator-checkbox__text-container {
  display: inline-block;
}

.configurator-checkbox__text {
  font-weight: 300;
  padding-left: 14px;
  line-height: 26px;
}
</style>

<script>
export default {
  name: 'configurator-checkbox',
  props: {
    text: String,
    storeProperty: String,
    storeCommitEvent: String,
  },
  computed: {
    checked: {
      get: function getChecked() {
        return this.$store.state[this.storeProperty];
      },
      set: function setChecked(value) {
        this.$store.commit(this.storeCommitEvent, value);
      },
    },
  },
};
</script>
