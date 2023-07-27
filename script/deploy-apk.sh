#!/bin/bash

change_app_version(){
  BRANCH=`git rev-parse --abbrev-ref HEAD`
  REV=`git rev-parse --short HEAD`
  jq ".version=\"$BRANCH:$REV\"" package.json > /tmp/package.json && \
  mv /tmp/package.json package.json
}

QENV="${1:-local}"

cd src-cordova && cordova platform add android
PROJECT_DIR=$(pwd)/src-cordova/platforms/android
echo "PROJECT_DIR=$PROJECT_DIR"

change_app_version && \
docker run -e QENV=$QENV \
-v $PROJECT_DIR:/tmp/android \
-w /tmp/android \
hldtux/quasar-apk gradle build && find . -name '*.apk'
