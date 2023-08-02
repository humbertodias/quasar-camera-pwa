#!/bin/bash

QENV=${1:-local}
echo "QENV=$QENV"
docker run -e QENV=$QENV \
           -e ANDROID_VERSION=33 \
           -e ANDROID_BUILD_TOOLS_VERSION=33.0.2 \
           -e JAVA_VERSION=11.0.20-zulu \
           -e GRADLE_VERSION=7.6 \
           -v $(pwd):/home/quasar/workdir \
           -v /etc/localtime:/etc/localtime:ro \
           -v /etc/hosts:/etc/hosts:ro \
           -w /home/quasar/workdir \
           --rm \
           hldtux/quasar-android-builder bash -c "npm install ; quasar build -m capacitor -T android --debug"
