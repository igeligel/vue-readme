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

.markdown-container div {
  padding-left: 45px;
  padding-right: 45px;
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

.markdown-container table {
  color: #24292e;
  border-collapse: collapse;
  border-bottom-color: grey;
  border-left-color: grey;
  border-top-color: grey;
  border-right-color: grey;
  font-size: 16px;
  line-height: 24px;
  overflow-x: auto;
  overflow-y: auto;
  text-size-adjust: 100%;
  word-wrap: break-word;
  display: block;
  width: 100%;
  overflow: auto;
}


.markdown-container table th {
    font-weight: 600;
}

.markdown-container table th,.markdown-container table td {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
}

.markdown-container table tr {
    background-color: #fcf8ff;
    border-top: 1px solid #c6cbd1;
}

.markdown-container table tr:nth-child(2n) {
    background-color: #faf3ff;
}

.markdown-container table img {
    background-color: transparent;
}

.markdown-container img {
    max-width: 100%;
    box-sizing: content-box;
    background-color: #fff;
}

.markdown-container img[align=right] {
    padding-left: 20px;
}

.markdown-container img[align=left] {
    padding-right: 20px;
}

.markdown-container blockquote {
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
    margin: 0;
}

.markdown-container blockquote>:first-child {
    margin-top: 0;
}

.markdown-container blockquote>:last-child {
    margin-bottom: 0;
}
</style>

<script>
import marked from 'marked';

export default {
  name: 'readme-preview',
  computed: {
    title: function getTitle() {
      return `${this.$store.state.projectTitle} by <a href="https://github.com/${this.$store.state.username}">${this.$store.state.username}</a>`;
    },
    shields: function getShields() {
      if (this.$store.state.shields.length === 0) {
        return '';
      }
      let result = '<div style="text-align:center">';
      this.$store.state.shields.forEach((shield) => {
        const color = shield.color.replace('#', '');
        result += `<a href="${shield.url}">`;
        result += `<img src="https://img.shields.io/badge/${shield.name}-${shield.value}-${color}.svg" alt="badge ${shield.name}" /></a> `;
      });
      return `${result}</div>`;
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

> ${this.$store.state.projectDescription}`;
      }
      return '';
    },
    dependencies: function getDependencies() {
      if (this.$store.state.dependencies.length === 0) {
        return '';
      }
      let baseString = '## Dependencies\n\n| Dependency | Version |\n| -- | -- |\n';
      this.$store.state.dependencies.forEach((element) => {
        baseString += `| ${element.name} | ${element.version} |\n`;
      });
      return baseString;
    },
    installation: function getInstallation() {
      if (this.$store.state.projectInstallation.length > 0) {
        return `## Installation

${this.$store.state.projectInstallation}`;
      }
      return '';
    },
    howToUse: function getHowToUse() {
      if (this.$store.state.projectHowToUse.length > 0) {
        return `## How To Use

${this.$store.state.projectHowToUse}`;
      }
      return '';
    },
    createLicenseText: function createLicenseText() {
      if (this.$store.state.license === -1) {
        return '';
      }
      const licenseDict = {
        0: 'MIT',
        1: 'BSD',
        2: 'GPL',
      };
      return `
## License

*${this.$store.state.projectTitle}* is realeased under the ${licenseDict[this.$store.state.license]} License.`;
    },
    createContributorHtml: function createContributorHtml() {
      if (this.$store.state.contributors.length === -1
      || this.$store.state.loadContributors === false) {
        return '';
      }
      if (this.$store.state.contributors.length === 0) {
        return '';
      }
      const contributors = this.$store.state.contributors;
      const contributorsHtml = [];
      contributors.forEach((contributor) => {
        contributorsHtml.push(`<a href="${contributor.html_url}"><img src="${contributor.avatar_url}" width="100px;" style="max-width:100%;"><br><sub>${contributor.login}</sub></a><br><p>Contributions: ${contributor.contributions}</p>`);
      });
      let row = 0;
      let returnString = '<h2>Contributors</h2>\n\n<table>';
      for (let i = 0; i < contributorsHtml.length; i += 1) {
        if (row === 0 && i % 6 === 0) {
          returnString += '<thead>';
        }
        if (row === 1 && i % 6 === 0) {
          returnString += '<tbody>';
        }
        if (i % 6 === 0) {
          returnString += '<tr>';
        }
        if (row === 0) {
          returnString += `<th align="center">${contributorsHtml[i]}</th>`;
        } else {
          returnString += `<td align="center">${contributorsHtml[i]}</td>`;
        }

        if (i % 6 === 6) {
          returnString += '</tr>';
          row += 1;
        }
        if (row === 0 && i % 6 === 5) {
          returnString += '<thead>';
        }
      }
      returnString += '</tbody></table>';
      // eslint-disable-next-line
      console.log(returnString);
      return returnString;
    },
    finalMarkdown: function finalMarkdown() {
      const readme = `# ${this.title}

${this.shields}

${this.description}

${this.dependencies}

${this.installation}

${this.howToUse}

${this.createLicenseText}

${this.linkToVueReadme}

${this.createContributorHtml}
`;
      return readme;
    },
    finalHtml: function finalHtml() {
      return marked(this.finalMarkdown);
    },
  },
};

</script>
