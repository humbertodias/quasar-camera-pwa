#!/bin/bash
npm i
quasar build -m pwa
TMP_DIR="/tmp/pwa-$(date +'%Y_%m_%d %H:%M:%S')"
cp -r dist/pwa $TMP_DIR
git checkout gh-pages
rm -rf *
cp -r $TMP_DIR/* .
git commit . -m "gh-pages.sh"
git push
