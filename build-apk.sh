#!/bin/bash

QENV=${1:-local}
echo "QENV=$QENV"
docker run -e QENV=$QENV \
           -v $(pwd):/home/quasar/workdir \
           -w /home/quasar/workdir \
           --rm \
           hldtux/quasar-apk bash -c "npm install && quasar build -m cordova -T android --debug"
