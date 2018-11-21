const records = require('./images.json');
const shelljs = require('shelljs');
const lodash = require('lodash');

const spacesToUnderscore = text => text.replace(/%20/g,'_');
const filenameFromUrl = url => lodash.last(url.split(/\//));

console.log('Downloading images...');
records.forEach(record => {
  let imgId = record.id;
  let { Artist, Image } = record.fields;
  Image.forEach(img => {
    let path = `repos/${Artist[0]}/images`;
    console.log('...', Artist[0], img.id, img.url);
    shelljs.mkdir('-p', path);
    shelljs.pushd(path);
    shelljs.exec(`curl -s -O ${img.url}`);
    let filename = filenameFromUrl(img.url);
    let newFilename = spacesToUnderscore(filename);
    shelljs.mv(filename,newFilename);
    shelljs.popd();
  });
});
