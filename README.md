# vue-readme by igeligel

## Description

A [vue.js](https://vuejs.org/) application which will let you easily create project readme's in markdown format and a real time show case on how it looks. It is working serverless so all data fetching is done by CORS requests to the [GitHub API](https://developer.github.com/v3/).

It also has nice features like:

- Automatic contributor fetching


## Installation

To install this you need [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed on your local machine.

After this run the following commands after cloning this repository:

```bash
npm run dev
```

The project then is accessible by: [http://localhost:8960](http://localhost:8960).

For building this project just type:

```
npm run build
```

This will create a production build and also checks out a new gh-pages branch if it is not existing and pushing the content to it.

## License

vue-readme is realeased under the [MIT License](https://github.com/igeligel/vue-readme/blob/master/LICENSE).
