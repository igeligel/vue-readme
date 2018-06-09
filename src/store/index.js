import Vue from 'vue';
import Vuex from 'vuex';
import jsonp from 'jsonp';

Vue.use(Vuex);

/* eslint-disable no-param-reassign */
const store = new Vuex.Store({
  state: {
    projectTitle: '',
    username: '',
    shields: [],
    showcaseImages: [],
    projectDescription: '',
    dependencies: [],
    projectInstallation: '',
    projectHowToUse: '',
    examples: [],
    contributing: '',
    motivation: '',
    architecture: '',
    documentation: '',
    license: -1,
    contributors: [],
    showVueReadme: false,
    finalMarkdown: '',
  },
  actions: {},
  mutations: {
    UPDATE_PROJECT_TITLE: function updateProjectTitle(state, payload) {
      state.projectTitle = payload;
    },
    UPDATE_USERNAME: function updateUsername(state, payload) {
      state.username = payload;
    },
    UPDATE_SHIELDS: function updateShields(state, payload) {
      state.shields.push({
        name: payload.name,
        value: payload.value,
        url: payload.url,
        style: payload.style,
        color: payload.color,
      });
    },
    UPDATE_PROJECT_DESCRIPTION: function updateDescription(state, payload) {
      state.projectDescription = payload;
    },
    ADD_DEPENDENCY: function addDependency(state, payload) {
      state.dependencies.push(payload.dependency);
    },
    DELETE_DEPENDENCY: function deleteDependency(state, payload) {
      state.dependencies.splice(payload.dependencyIndex, 1);
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
    UPDATE_CONTRIBUTORS: function updateContributors(state) {
      if (state.username !== '' && state.projectTitle !== '') {
        jsonp(
          `https://api.github.com/repos/${state.username}/${
            state.projectTitle
          }/contributors`,
          null,
          (err, data) => {
            if (err) {
              return;
            }
            state.contributors = data.data;
          },
        );
      }
    },
    UPDATE_SHOW_VUE_README: function showVueReadme(state, payload) {
      state.showVueReadme = payload;
    },
    ADD_SHOWCASE_IMAGE: function addShowcaseImage(state, payload) {
      state.showcaseImages.push(payload);
    },
    DELETE_SHOWCASE_IMAGE: function deleteShowcaseImage(state, payload) {
      state.showcaseImages.push(payload);
    },
    ADD_EXAMPLE: function addExample(state, payload) {
      state.examples.push(payload);
    },
    UPDATE_CONTRIBUTING: function updateContributing(state, payload) {
      state.contributing = payload;
    },
    UPDATE_MOTIVATION: function updateMotivation(state, payload) {
      state.motivation = payload;
    },
    UPDATE_ARCHITECTURE: function updateArchitecture(state, payload) {
      state.architecture = payload;
    },
    UPDATE_DOCUMENTATION: function updateDocumentation(state, payload) {
      state.documentation = payload;
    },
    UPDATE_FINAL_MARKDOWN: function updateFinalMarkdown(state, payload) {
      state.finalMarkdown = payload;
    },
  },
  getters: {},
});

export default store;
/* eslint-enable no-param-reassign */
