<template>
  <div class="container">
    <h2>Dependencies</h2>
    <div class="dependency-shields-container">
      <template v-for="dependency in dependencies">
        <div class="pure-g dependency-list-container">
          <div class="pure-u-1-8 delete-button">X</div>
          <div class="pure-u-7-12 dependency-list-container__name" v-text="dependency.name"></div>
          <div class="pure-u-7-24 dependency-list-container__version" v-text="dependency.version"></div>
        </div>
      </template>
      <div v-if="dependencies.length !== 0" class="divider"></div>
    </div>
    <div class="dependency-container">
      <input class="dependency-name" spellcheck="false" placeholder="Name" v-model="dependencyName" />
      <input class="dependency-version" spellcheck="false" placeholder="Version" v-model="dependencyVersion" />
    </div>
    <div>
      <button class="add-button" v-on:click="addDependency()">+ Add Dependency</button>
    </div>
  </div>
</template>

<style scoped>
.divider {
  width: 100%;
  border: 1px solid #e0e9fc;
  margin-top: 8px;
  margin-bottom: 8px;
}

.dependency-list-container {
  margin-top: 5px;
}

.dependency-list-container__name {
  line-height: 1.5em;
  padding-left: 5px;
  box-sizing: border-box;
}

.dependency-list-container__version {
  text-align: right;
  padding-right: 10px;
  box-sizing: border-box;
}

.dependency-container {
  margin-bottom: 5px;
}



.container {
  margin-bottom: 15px;
}

.delete-button {
  border: 1px solid #e0e9fc;
  box-sizing: border-box;
  text-align: center;
  border-radius: 7px;
  color: #e0e9fc;
  height: 1.5em;
  line-height: 1.5em;
}

.dependency-name {
  color: #7287b2;
  display: inline-block;
  border: 1px solid #e0e9fc;
  border-radius: 7px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-top: 10px;
  margin-bottom: 5px;
  box-sizing:border-box;
  width: calc(60% - 5px);
  float: left;
  margin-right: 5px;
}

.dependency-version {
  display: inline-block;
  color: #7287b2;
  border: 1px solid #e0e9fc;
  border-radius: 7px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-top: 10px;
  margin-bottom: 5px;
  box-sizing:border-box;
  margin-left: 5px;
  width: calc(40% - 5px);
}
h2 {
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: 300;
}
.add-button {
  color: #faf5ff;
  width: 100%;
  height: 2.5em;
  border-radius: 7px;
  border: 0;
  text-transform: uppercase;
  background-color: #8477B7;
}

.add-button:hover {
  background-color: #8b7fbb;
}

.add-button:focus {
  outline: 0;
}
</style>

<script>
export default {
  name: 'home',
  computed: {
    dependencies: function computedDependencies() {
      return this.$store.state.dependencies;
    },
  },
  methods: {
    addDependency: function addDependency() {
      const dependency = {
        name: this.dependencyName,
        version: this.dependencyVersion,
      };
      this.$store.commit({
        type: 'ADD_DEPENDENCY',
        dependency,
      });
    },
  },
};
</script>
