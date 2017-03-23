<template>
  <div class="pure-g">
    <div class="pure-u-1 pure-u-md-1-6 panel menu-panel">
      <!--<input type="text" name="repository-name" placeholder="Repository Name" />
      <input type="text" name="repository-sponsors" placeholder="Sponsors" />
      <textarea rows="4" cols="50" placeholder="Description"></textarea>
      <input type="text" name="repository-dependency" placeholder="Dependency" />-->
    </div>
    <div class="pure-u-1 pure-u-md-2-3 panel readme-panel">

    </div>
    <div class="pure-u-1 pure-u-md-1-6 panel settings-panel">

    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
};
</script>

<style scoped>
.menu-panel {
  height: calc(100vh - 126px);
}

* {
  border: 1px solid red;
}

.readme-panel {
}
</style>
