/* eslint-disable promise/prefer-await-to-callbacks, fp-jxl/no-nil */
const fs = require('fs');
const glob = require('glob');
const jsdoc2md = require('jsdoc-to-markdown');

const FILES = 'source/**/!(*.test|*.bench).js';

const asyncRead = path =>
  new Promise((resolve, reject) =>
    fs.readFile(path, 'utf8', (error, data) => {
      if(error) {
        return reject(error);
      }

      return resolve(data);
    }));

const asyncWrite = (path, data) =>
  new Promise((resolve, reject) =>
    fs.writeFile(path, data, error => {
      if(error) {
        return reject(error);
      }

      return resolve();
    }));

const getFiles = () =>
  new Promise((resolve, reject) =>
    glob(FILES, (error, files) => {
      if(error) {
        return reject(error);
      }

      return resolve(files);
    }));

const main = async () => {
  const files = await getFiles();
  const docs = await jsdoc2md.render({ files });
  const about = await asyncRead('./doc/about.md');
  const license = await asyncRead('./doc/license.md');
  const readMe = `${ about }\n\n${ docs }\n\n${ license }`;

  return asyncWrite('README.md', readMe);
};

// eslint-disable-next-line fp-jxl/no-unused-expression
main();
