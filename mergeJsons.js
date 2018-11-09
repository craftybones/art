const fs = require('fs');
const readJson = (fileName) => {
  return JSON.parse(fs.readFileSync(fileName,'utf8'));
}
const prependPathToImage=(entry,path) =>{
  let originalPath = entry.image;
  let newPath = path + "/" + originalPath;
  return Object.assign(entry,{image:newPath});
}

const updatePath=(images,author) => {
  return images.map(i=>prependPathToImage(i,`../repos/${author}/images`));
}

const insertAuthor=(images,author) => {
  return images.map(i=>Object.assign(i,{author:author}));
}

let repos=fs.readdirSync("repos");
let authorsJson=[];
let imagesJson = [];

repos.forEach((repo)=>{
  let config=readJson(`repos/${repo}/config.json`);
  let images=readJson(`repos/${repo}/images.json`);
  let newImagesJson=updatePath(images,repo);
  newImagesJson=insertAuthor(newImagesJson,repo);
  console.log(JSON.stringify(newImagesJson));
  authorsJson.push(Object.assign(config,{id:repo}));
  imagesJson = imagesJson.concat(newImagesJson);
})

fs.writeFileSync("data/mergedAuthors.json",JSON.stringify(authorsJson),'utf8');
fs.writeFileSync("data/mergedImages.json",JSON.stringify(imagesJson),'utf8');