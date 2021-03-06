<template>
  <div class="markdown-container" style="">
    <div v-html="finalHtml">
    </div>
  </div>
</template>

<style>
.markdown-container {
  max-width: 980px;
  margin: auto;
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

.markdown-container table th,
.markdown-container table td {
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

.markdown-container img[align='right'] {
  padding-left: 20px;
}

.markdown-container img[align='left'] {
  padding-right: 20px;
}

.markdown-container blockquote {
  padding: 0 1em;
  color: #6a737d;
  border-left: 0.25em solid #dfe2e5;
  margin: 0;
}

.markdown-container blockquote > :first-child {
  margin-top: 0;
}

.markdown-container blockquote > :last-child {
  margin-bottom: 0;
}
</style>

<script>
import marked from 'marked';

export default {
  name: 'readme-preview',
  computed: {
    title: function getTitle() {
      return `${
        this.$store.state.projectTitle
      } by <a href="https://github.com/${this.$store.state.username}">${
        this.$store.state.username
      }</a>`;
    },
    shields: function getShields() {
      if (this.$store.state.shields.length === 0) {
        return '';
      }
      let result = '<div style="text-align:center">';
      this.$store.state.shields.forEach((shield) => {
        let userColor = shield.color;
        if (!userColor.includes('#')) {
          userColor = `#${userColor}`;
        }
        const isColorCode = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(
          userColor,
        );
        let color = '8477B7';
        if (isColorCode) {
          color = userColor.replace('#', '');
        }
        const styleDict = {
          0: '?style=flat',
          1: '?style=plastic',
          2: '?style=flat-square',
          3: '?style=social',
        };
        const url = `https://img.shields.io/badge/${shield.name}-${
          shield.value
        }-${color}.svg${styleDict[shield.style]}`;
        const imageString = `<img src="${url}" alt="badge ${shield.name}" />`;
        result +=
          shield.url !== ''
            ? `<a href="${shield.url}">${imageString}</a> `
            : `${imageString} `;
      });
      return `${result}</div>`;
    },
    showcase: function getShowcase() {
      if (
        this.$store.state.showcaseImages === undefined ||
        this.$store.state.showcaseImages.length === 0
      ) {
        return '';
      }
      let result = '<div style="text-align:center">';
      this.$store.state.showcaseImages.forEach((showcaseUrl) => {
        result += `<img src ="${showcaseUrl}" />`;
      });
      result += '</div>';
      return result;
    },
    linkToVueReadme: function getLinkToVueReadme() {
      if (this.$store.state.showVueReadme === true) {
        return '## This readme is powered by vue-readme\nCheck out vue-readme [[Website](https://igeligel.github.io/vue-readme) | [GitHub](https://github.com/igeligel/vue-readme)]';
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
      let baseString =
        '## Dependencies\n\n| Dependency | Version |\n| -- | -- |\n';
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
    examples: function getExamples() {
      if (this.$store.state.examples.length > 0) {
        let result = '## Examples\n';
        this.$store.state.examples.forEach((example) => {
          result += `- [${example.name}](${example.url})\n`;
        });
        return result;
      }
      return '';
    },
    contributing: function getContributing() {
      if (this.$store.state.contributing.length > 0) {
        return `## Contributing\n\n${this.$store.state.contributing}`;
      }
      return '';
    },
    resourcesHeading: function getResourcesHeading() {
      const state = this.$store.state;
      const { motivation, architecture, documentation } = state;
      if (
        motivation.length > 0 ||
        architecture.length > 0 ||
        documentation.length > 0
      ) {
        return '## Resources';
      }
      return '';
    },
    motivation: function getMotivation() {
      if (this.$store.state.motivation.length > 0) {
        return `### Motivation\n\n${this.$store.state.motivation}`;
      }
      return '';
    },
    architecture: function getArchitecture() {
      if (this.$store.state.architecture.length > 0) {
        return `### Architecture\n\n${this.$store.state.architecture}`;
      }
      return '';
    },
    documentation: function getDocumentation() {
      if (this.$store.state.documentation.length > 0) {
        return `### Documentation\n\n> You can find documentation [here](${
          this.$store.state.documentation
        }).`;
      }
      return '';
    },
    createLicenseText: function createLicenseText() {
      if (
        this.$store.state.projectTitle === undefined ||
        this.$store.state.projectTitle === ''
      ) {
        return '';
      }
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

*${this.$store.state.projectTitle}* is realeased under the ${
        licenseDict[this.$store.state.license]
      } License.`;
    },
    createContributorHtml: function createContributorHtml() {
      if (
        this.$store.state.contributors.length === -1 ||
        this.$store.state.loadContributors === false
      ) {
        return '';
      }
      if (this.$store.state.contributors.length === 0) {
        return '';
      }
      const contributors = this.$store.state.contributors;
      const contributorsHtml = [];
      contributors.forEach((contributor) => {
        contributorsHtml.push(
          `<a href="${contributor.html_url}"><img src="${
            contributor.avatar_url
          }" width="100px;" style="max-width:100%;"><br><sub>${
            contributor.login
          }</sub></a><br><p>Contributions: ${contributor.contributions}</p>`,
        );
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
      return returnString;
    },
    finalMarkdown: function finalMarkdown() {
      const readme = `# ${this.title}

${this.shields}

${this.showcase}

${this.description}

${this.dependencies}

${this.installation}

${this.howToUse}

${this.examples}

${this.contributing}

${this.resourcesHeading}

${this.motivation}

${this.architecture}

${this.documentation}

${this.createLicenseText}

${this.createContributorHtml}

${this.linkToVueReadme}
`;
      this.$store.commit('UPDATE_FINAL_MARKDOWN', readme);
      return readme;
    },
    finalHtml: function finalHtml() {
      return marked(this.finalMarkdown);
    },
  },
};
</script>
