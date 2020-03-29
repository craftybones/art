const records = require('./images.json');
const shelljs = require('shelljs');
const lodash = require('lodash');

const spacesToUnderscore = text => text.replace(/%20/g, '_');
const filenameFromUrl = url => lodash.last(url.split(/\//));

console.log('Downloading images...');
records.forEach(record => {
  let imgId = record.id;
  let { Artist, Image } = record.fields;
  Image.forEach(img => {
    let path = `repos/${Artist[0]}/images`;
    let filename = filenameFromUrl(img.url);
    let newFilename = spacesToUnderscore(filename);
    if (!shelljs.test('-e', `${path}/${newFilename}`)) {
      shelljs.mkdir('-p', path);
      shelljs.pushd(path);
      console.log('...', Artist[0], img.id, img.url);
      shelljs.exec(`curl -s -O "${img.url}"`);
      shelljs.mv(filename, newFilename);
      shelljs.popd();
    }
  });
});
