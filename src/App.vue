<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/navbar';

export default {
  name: 'app',
  components: {
    navbar,
  },
};
</script>

<style>
* {
  font-family: 'Montserrat';
}
/* montserrat-300 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  src: url('../static/montserrat-v10-latin-300.eot'); /* IE9 Compat Modes */
  src: local('Montserrat Light'), local('Montserrat-Light'),
    url('../static/montserrat-v10-latin-300.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */ url('../static/montserrat-v10-latin-300.woff2')
      format('woff2'),
    /* Super Modern Browsers */ url('../static/montserrat-v10-latin-300.woff')
      format('woff'),
    /* Modern Browsers */
      url('../static/montserrat-v10-latin-300.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-regular - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: url('../static/montserrat-v10-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Montserrat Regular'), local('Montserrat-Regular'),
    url('../static/montserrat-v10-latin-regular.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */ url('../static/montserrat-v10-latin-regular.woff2')
      format('woff2'),
    /* Super Modern Browsers */
      url('../static/montserrat-v10-latin-regular.woff') format('woff'),
    /* Modern Browsers */
      url('../static/montserrat-v10-latin-regular.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-italic - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400;
  src: url('../static/montserrat-v10-latin-italic.eot'); /* IE9 Compat Modes */
  src: local('Montserrat Italic'), local('Montserrat-Italic'),
    url('../static/montserrat-v10-latin-italic.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */ url('../static/montserrat-v10-latin-italic.woff2')
      format('woff2'),
    /* Super Modern Browsers */
      url('../static/montserrat-v10-latin-italic.woff') format('woff'),
    /* Modern Browsers */
      url('../static/montserrat-v10-latin-italic.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-500 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  src: url('../static/montserrat-v10-latin-500.eot'); /* IE9 Compat Modes */
  src: local('Montserrat Medium'), local('Montserrat-Medium'),
    url('../static/montserrat-v10-latin-500.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */ url('../static/montserrat-v10-latin-500.woff2')
      format('woff2'),
    /* Super Modern Browsers */ url('../static/montserrat-v10-latin-500.woff')
      format('woff'),
    /* Modern Browsers */
      url('../static/montserrat-v10-latin-500.svg#Montserrat') format('svg'); /* Legacy iOS */
}
/* montserrat-700 - latin */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: url('../static/montserrat-v10-latin-700.eot'); /* IE9 Compat Modes */
  src: local('Montserrat Bold'), local('Montserrat-Bold'),
    url('../static/montserrat-v10-latin-700.eot?#iefix')
      format('embedded-opentype'),
    /* IE6-IE8 */ url('../static/montserrat-v10-latin-700.woff2')
      format('woff2'),
    /* Super Modern Browsers */ url('../static/montserrat-v10-latin-700.woff')
      format('woff'),
    /* Modern Browsers */
      url('../static/montserrat-v10-latin-700.svg#Montserrat') format('svg'); /* Legacy iOS */
}
</style>
