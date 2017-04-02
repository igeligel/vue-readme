<template>
  <div class="input__checkbox__container">
    <input type="checkbox" value="None" id="squaredThree" name="check" v-model="checked" />
    <label for="squaredThree"></label>
    <div style="display: inline-block;">
      <span style="font-weight: 300; padding-left: 14px; line-height: 26px;" v-text="text"></span>
    </div>
  </div>
</template>

<style scoped>
.input__checkbox__container {
  position: relative;
  height: 25px;
}
.input__checkbox__container label {
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
.input__checkbox__container label:after {
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
          transform: rotate(-45deg);
}
.input__checkbox__container input[type=checkbox] {
  visibility: hidden;
}
.input__checkbox__container input[type=checkbox]:checked + label:after {
  opacity: 1;
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
