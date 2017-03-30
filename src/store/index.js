import Vue from 'vue';
import Vuex from 'vuex';
import jsonp from 'jsonp';

Vue.use(Vuex);

/* eslint-disable no-param-reassign */
const store = new Vuex.Store({
  state: {
    projectTitle: '',
    username: '',
    projectDescription: '',
    dependencies: [],
    projectInstallation: '',
    projectHowToUse: '',
    license: -1,
    loadContributors: false,
    contributors: [],
    showVueReadme: false,
  },
  actions: {},
  mutations: {
    UPDATE_PROJECT_TITLE: function updateProjectTitle(state, payload) {
      state.projectTitle = payload;
    },
    UPDATE_USERNAME: function updateUsername(state, payload) {
      state.username = payload;
    },
    UPDATE_PROJECT_DESCRIPTION: function updateDescription(state, payload) {
      state.projectDescription = payload;
    },
    ADD_DEPENDENCY: function addDependency(state, payload) {
      state.dependencies.push(payload.dependency);
    },
    DELETE_DEPENDENCY: function deleteDependency(state, payload) {
      state.dependencies.splice(payload.index, 1);
    },
    UPDATE_INSTALLATION: function updateInstallation(state, payload) {
      state.projectInstallation = payload;
    },
    UPDATE_HOW_TO_USE: function updateHowToUse(state, payload) {
      state.projectHowToUse = payload;
    },
    UPDATE_LICENSE: function updateLicens(state, payload) {
      state.license = payload;
    },
    UPDATE_CONTRIBUTORS: function updateContributors(state, payload) {
      state.loadContributors = payload;
      if (payload === true && state.username !== '' && state.projectTitle !== '') {
        jsonp(`https://api.github.com/repos/${state.username}/${state.projectTitle}/contributors`, null, (err, data) => {
          if (err) {
            return;
          }
          state.contributors = data.data;
        });
      }
    },
    UPDATE_SHOW_VUE_README: function showVueReadme(state, payload) {
      state.showVueReadme = payload;
    },
  },
  getters: {},
});

export default store;
/* eslint-enable no-param-reassign */
