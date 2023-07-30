#!/bin/bash

QENV=${1:-local}
docker run -e QENV=local \
           -v $(pwd):/tmp/quasar-workdir \
           -w /tmp/quasar-workdir \
           hldtux/quasar-apk bash -c "unzip src-cordova/cordova-plugin-sendkeystrokes.zip -d src-cordova && ls -lha src-cordova/cordova-plugin-sendkeystrokes && npm install && quasar build -m cordova -T android --debug"
