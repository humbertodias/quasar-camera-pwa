#!/bin/bash

QENV=${1:-local}
echo "QENV=$QENV"
docker run -e QENV=local \
           -v $(pwd):/home/ci/quasar-workdir \
           -w /home/ci/quasar-workdir \
           hldtux/quasar-apk bash -c "npm install && quasar build -m cordova -T android --debug"
