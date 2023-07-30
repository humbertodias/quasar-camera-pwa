#!/bin/bash

QENV=${1:-local}
git pull --recurse-submodules
docker run -e QENV=local \
           -v $(pwd):/tmp/quasar-workdir \
           -w /tmp/quasar-workdir \
           hldtux/quasar-apk bash -c "ls -lha src-cordova/cordova-plugin-sendkeystrokes && npm install && quasar build -m cordova -T android --debug"
