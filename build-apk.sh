#!/bin/bash

QENV=${1:-local}
docker run -e QENV=local \
           -v $(pwd):/tmp/quasar-workdir \
           -w /tmp/quasar-workdir \
           hldtux/quasar-apk bash -c "git pull --recurse-submodules && ls -lha src-cordova && npm install && quasar build -m cordova -T android --debug"
