#!/bin/bash
quasar build -m pwa
cp dist/pwa /tmp/pwa
git checkout gh-pages
rm -rf *
cp -r /tmp/pwa/* .
git commit . -m "gh-pages"
git push
