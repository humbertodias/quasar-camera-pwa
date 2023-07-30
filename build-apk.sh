#!/bin/bash

QENV=${1:-local}
echo "QENV=$QENV"
docker run -e QENV=$QENV \
           -v $(pwd):/home/quasar/workdir \
           -v /etc/localtime:/etc/localtime:ro \
           -v /etc/hosts:/etc/hosts:ro \
           -w /home/quasar/workdir \
           --rm \
           hldtux/quasar-apk bash -c "npm install ; quasar build -m cordova -T android --debug ; cd src-cordova && npm i && cordova build android"
