<template>
  <div class="markdown-container" style="">
    <div v-html="finalHtml">
    </div>
  </div>
</template>

<style>
.markdown-container {
  max-width: 980px; margin: auto;
  color: #24292e;
}

.markdown-container p {
  box-sizing: border-box;
  display: block;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 16px;
  margin-top: 0;
  text-size-adjust: 100%;
  word-wrap: break-word;
}

.markdown-container h1 {
  border-bottom: 1px solid #eaecef;
  box-sizing: border-box;
  display: block;
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  margin-bottom: 16px;
  padding-bottom: 0.3em;
  text-size-adjust: 100%;
  word-wrap: break-word;
}

.markdown-container h2 {
  border-bottom: 1px solid #eaecef;
  box-sizing: border-box;
  display: block;
  font-size: 24px;
  font-weight: 600;
  line-height: 16px;
  margin-bottom: 16px;
  margin-top: 24px;
  padding-bottom: 0.3em;
  text-size-adjust: 100%;
  word-wrap: break-word;
}
</style>

<script>
import marked from 'marked';

export default {
  name: 'readme-preview',
  computed: {
    title: function getTitle() {
      return `${this.$store.state.projectTitle} by ${this.$store.state.username}`;
    },
    linkToVueReadme: function getLinkToVueReadme() {
      if (this.$store.state.showVueReadme === true) {
        return '## This readme is powered by vue-readme\nCheck out vue-readme [Website | [GitHub](https://github.com/igeligel/vue-readme)]';
      }
      return '';
    },
    description: function getDescription() {
      if (this.$store.state.projectDescription.length > 0) {
        return `## Description

${this.$store.state.projectDescription}`;
      }
      return '';
    },
    finalHtml: function finalHtml() {
      const readme = `# ${this.title}

${this.description}

${this.linkToVueReadme}`;
      return marked(readme);
    },
  },
};

</script>
