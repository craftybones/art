const records = require('./images.json');
const fs = require('fs');
const shelljs = require('shelljs');

let allImages = [];
const split = x => x.split(/\s+/);
const removeLeadingHashes = x => x.replace(/^#/,"");

const pathTo = (artist, filename) => `../repos/${artist}/images/${filename}`;
const spacesToUnderscore = text => text.replace(/%20/g,'_');

const imageFromUrl = url => {
  let parts = url.split(/\//);
  return spacesToUnderscore(parts[parts.length - 1]);
};

const toLowerCase = text => text.toLowerCase();

const extractTags = tagString => {
  tagString=tagString || "";
  return split(tagString.trim()).map(removeLeadingHashes).map(toLowerCase);
}

records.forEach(record => {
  let { Title, Desc, Image, Tags, Artist } = record.fields;
  let mapped = Image.map(i => {
    return {
      image: pathTo(Artist[0], imageFromUrl(i.url)),
      title: Title,
      desc: Desc,
      tags: extractTags(Tags),
      date: record.createdTime,
      username: Artist[0],
      author: Artist[0],
      avatar: `../avatars/${Artist[0]}.png`,
    };
  });
  allImages = allImages.concat(mapped);
});

shelljs.mkdir('-p', 'data');
fs.writeFileSync('data/mergedImages.json', JSON.stringify(allImages), 'utf8');
