<template>
  <div class="pure-g">
    <div class="pure-u-1 pure-u-md-1-5 panel menu-panel" style="margin-top: 40px;">
      <div style="padding-left: 20px; padding-right: 20px;">
        <button class="add-button">Create README.md</button>
      </div>
      <div>
        <div class="menu-item"><span class="menu-item-icon">X</span>Editor</div>
        <div class="menu-item menu-item--active">
          <span class="menu-item-icon">X</span>Repositories<span class="menu-item-icon--right">▼</span>
          <div class="menu-item-sublist">
            <div><span class="submenu-item-icon">►</span>igeligel/vue-readme</div>
            <div><span class="submenu-item-icon">►</span>vuejs/vue</div>
          </div>
        </div>
        <div class="menu-item"><span class="menu-item-icon">X</span>Import</div>
      </div>
    </div>
    <div class="pure-u-1 pure-u-md-3-5 panel readme-panel">
    </div>
    <div class="pure-u-1 pure-u-md-1-5 panel settings-panel" style="margin-top: 40px;">
      <div style="padding-left: 15px; padding-right: 15px;">
        <div class="configuration-panel" style="background-color: white;">
          <h2>Project Title</h2>
          <div>
            <input class="input__project-title" spellcheck="false" placeholder="Project Title" v-model="projectTitle">
          </div>
          <h2>Username</h2>
          <div>
            <input class="input__project-title" spellcheck="false" placeholder="Username" v-model="username">
          </div>
          <div>
            <h2>Description</h2>
            <div>
              <textarea placeholder="Describe your project here..." rows="2" v-model="projectDescription"></textarea>
            </div>
          </div>
          <div style="margin-bottom: 15px;">
            <h2>Dependencies</h2>
            <div class="dependency-shields-container">
              <template v-for="dependency in dependencies">
                <img :src="`https://img.shields.io/badge/${dependency.name}-${dependency.version}-green.svg`"></img>
              </template>
            </div>
            <div style="margin-bottom: 5px;">
              <input class="dependency-name" spellcheck="false" placeholder="Name" v-model="dependencyName" />
              <input class="dependency-version" spellcheck="false" placeholder="Version" v-model="dependencyVersion" />
            </div>
            <div>
              <button class="add-button" v-on:click="addDependency()">+ Add Dependency</button>
            </div>
          </div>
          <div>
            <h2>Installation</h2>
            <div>
              <textarea placeholder="Provide Installation instructions" rows="2" v-model="projectInstallation"></textarea>
            </div>
          </div>
          <div>
            <h2>How To Use</h2>
            <div>
              <textarea placeholder="Describe your project here..." rows="2" v-model="projectHowToUse"></textarea>
            </div>
          </div>
          <div>
            <h2>License</h2>
            <select>
              <option value="0">MIT</option>
              <option value="1">BSD</option>
              <option value="2">GPL</option>
            </select>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data() {
    return {
      dependencyName: '',
      dependencyVersion: '',
    };
  },
  computed: {
    dependencies: function computedDependencies() {
      return this.$store.state.dependencies;
    },
    projectTitle: {
      get() {
        return this.$store.state.projectTitle;
      },
      set(value) {
        this.$store.commit('UPDATE_PROJECT_TITLE', value);
      },
    },
    username: {
      get() {
        return this.$store.state.username;
      },
      set(value) {
        this.$store.commit('UPDATE_USERNAME', value);
      },
    },
    projectDescription: {
      get() {
        return this.$store.state.projectDescription;
      },
      set(value) {
        this.$store.commit('UPDATE_PROJECT_DESCRIPTION', value);
      },
    },
    projectInstallation: {
      get() {
        return this.$store.state.projectInstallation;
      },
      set(value) {
        this.$store.commit('UPDATE_INSTALLATION', value);
      },
    },
    projectHowToUse: {
      get() {
        return this.$store.state.projectHowToUse;
      },
      set(value) {
        this.$store.commit('UPDATE_HOW_TO_USE', value);
      },
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

<style scoped>
.submenu-item-icon {
  margin-left: 45px;
  margin-right: 15px;
}

.menu-item-icon--right {
  float:right;
  margin-right: 25px;
  cursor: pointer;
}

.menu-item {
  margin-left: 20px;
  margin-right: 20px;
  text-align: left;
  line-height: 3em;
  color: #8477b7;
}

.menu-item-icon {
  margin-left: 25px;
  margin-right: 15px;
}

.menu-item--active {
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 0 20px rgba(113, 158, 206, 0.1);
}

select {
  width: 100%;
  height: 2.5em;
  border: 0;
  border-radius: 7px;
  background-color: white;
  border: 1px solid #e0e9fc;
  color: #7287b2;
}

select:focus {
  outline: 0;
}

select option {
  width: 50px;
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

.dependency-shields-container {
  padding-bottom: 5px;
}
.dependency-shields-container img {
  margin-right: 5px;
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

.input__project-title {
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

textarea {
  box-sizing: border-box;
  width: 100%;
  color: #7287b2;
  border: 1px solid #e0e9fc;
  border-radius: 7px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-top: 10px;
  margin-bottom: 5px;
  line-height: 1.5em;
}

h2 {
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: 300;
}
.configuration-panel {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(113, 158, 206, 0.2);
}

textarea::-webkit-input-placeholder {
  color: #8ca6db;
}

textarea:focus {
  outline: none !important;
  border:1px solid #b993d6;
  box-shadow: 0 0 3px #719ECE;
}

.menu-panel {
  height: calc(100vh - 126px);
}

.readme-panel {
  height: calc(100vh - 126px);
  background-color: #fcf8ff;
  margin-top: 40px;
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(113, 158, 206, 0.1);
}

.settings-panel {
  margin-bottom: 40px;
}
</style>
