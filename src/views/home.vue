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
      <readme-preview>
      </readme-preview>
    </div>
    <div class="pure-u-1 pure-u-md-1-5 panel settings-panel" style="margin-top: 40px;">
      <div style="padding-left: 15px; padding-right: 15px;">
        <div class="configuration-panel">
          <configurator-input
            :title="'Project Title'"
            :placeholder="'Project Title'"
            :storeProperty="'projectTitle'"
            :storeCommitEvent="'UPDATE_PROJECT_TITLE'">
          </configurator-input>
          <configurator-input
            :title="'Username'"
            :placeholder="'Username'"
            :storeProperty="'username'"
            :storeCommitEvent="'UPDATE_USERNAME'">
          </configurator-input>
          <configurator-textarea
            :title="'Description'"
            :placeholder="'Describe your project'"
            :rows="2"
            :storeProperty="'projectDescription'"
            :storeCommitEvent="'UPDATE_PROJECT_DESCRIPTION'">
          </configurator-textarea>
          <configurator-list-add>
          </configurator-list-add>
          <configurator-textarea
            :title="'Installation'"
            :placeholder="'Provide Installation instructions'"
            :rows="2"
            :storeProperty="'projectInstallation'"
            :storeCommitEvent="'UPDATE_INSTALLATION'">
          </configurator-textarea>
          <configurator-textarea
            :title="'How To Use'"
            :placeholder="'Describe on how to use the project'"
            :rows="2"
            :storeProperty="'projectHowToUse'"
            :storeCommitEvent="'UPDATE_HOW_TO_USE'">
          </configurator-textarea>
          <div>
            <h2>License</h2>
            <select v-model="license">
              <option value="0">MIT</option>
              <option value="1">BSD</option>
              <option value="2">GPL</option>
            </select>
          </div>
          <div>
            <h2>Settings</h2>
            <h2>Load Contributors</h2>
            <configurator-checkbox
              :text="'Load Contributors'"
              :storeProperty="'loadContributors'"
              :storeCommitEvent="'UPDATE_CONTRIBUTORS'">
            </configurator-checkbox>
            <configurator-checkbox
              :text="'Link to this Project'"
              :storeProperty="'showVueReadme'"
              :storeCommitEvent="'UPDATE_SHOW_VUE_README'">
            </configurator-checkbox>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConfiguratorInput from '@/components/configuratorInput';
import ConfiguratorTextarea from '@/components/configuratorTextarea';
import ConfiguratorCheckbox from '@/components/configuratorCheckbox';
import ConfiguratorListAdd from '@/components/configuratorListAdd';
import ReadmePreview from '@/components/readmePreview';

export default {
  name: 'home',
  components: {
    'configurator-input': ConfiguratorInput,
    'configurator-textarea': ConfiguratorTextarea,
    'configurator-checkbox': ConfiguratorCheckbox,
    'configurator-list-add': ConfiguratorListAdd,
    'readme-preview': ReadmePreview,
  },
  data() {
    return {
      dependencyName: '',
      dependencyVersion: '',
    };
  },
  computed: {
    license: {
      get() {
        return this.$store.state.license;
      },
      set(value) {
        this.$store.commit('UPDATE_LICENSE', value);
      },
    },
  },
  methods: {
    adjustHeight: function test(event) {
      const textarea = event.srcElement;
      textarea.style.height = '1px';
      const lineHeight = parseInt(window.getComputedStyle(textarea)['line-height'], 10);
      textarea.style.height = `${lineHeight + textarea.scrollHeight}px`;
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

.dependency-shields-container {
  padding-bottom: 5px;
}
.dependency-shields-container img {
  margin-right: 5px;
}

h2 {
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: 300;
}
.configuration-panel {
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(113, 158, 206, 0.2);
}

.menu-panel {
}

.readme-panel {
  min-height: calc(100vh - 250px);
  background-color: #fcf8ff;
  margin-top: 40px;
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(113, 158, 206, 0.1);
}

.settings-panel {
  margin-bottom: 40px;
}
</style>
