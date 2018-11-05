#! /bin/bash

image_dirs=$(find ./repos -type d -name "images")
for repo in ${image_dirs}; do
  name=$(echo ${repo} | cut -d '/' -f3)
  mkdir -p images/${name}
  cp -r ${repo}/* images/${name}/
done