const records = require('./artists.json');
const fs = require('fs');
const shelljs = require('shelljs');

let allAuthors = records.map(record => {
  let { Username, Name } = record.fields;
  return { name: Name, username: Username, id: record.id };
});

shelljs.mkdir('-p', 'data');
fs.writeFileSync('data/mergedAuthors.json', JSON.stringify(allAuthors), 'utf8');
