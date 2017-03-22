<template>
  <div class="pure-g">
    <div class="pure-u-1 pure-u-md-6-24 panel settings-panel">
      <input type="text" name="repository-name" placeholder="Repository Name" />
      <input type="text" name="repository-sponsors" placeholder="Sponsors" />
      <textarea rows="4" cols="50" placeholder="Description"></textarea>
      <input type="text" name="repository-dependency" placeholder="Dependency" />
    </div>
    <div class="pure-u-1 pure-u-md-18-24 panel readme-panel">

    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
};
</script>

<style scoped>
.readme-panel {
  max-width: 980px;
}
</style>
