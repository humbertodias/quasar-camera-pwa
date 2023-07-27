#!/bin/bash

change_app_version(){
  BRANCH=`git rev-parse --abbrev-ref HEAD`
  REV=`git rev-parse --short HEAD`
  jq ".version=\"$BRANCH:$REV\"" package.json > /tmp/package.json && \
  mv /tmp/package.json package.json
}

cordova_add_android(){

  npm install -g cordova@latest && \
  cd src-cordova && \
  cordova platform add android \
  && cd ..

}

QENV="${1:-local}"



PROJECT_DIR=$(pwd)/src-cordova/platforms/android
echo "PROJECT_DIR=$PROJECT_DIR"

cordova_add_android && \
change_app_version && \
docker run -e QENV=$QENV \
-v $PROJECT_DIR:/tmp/android \
-w /tmp/android \
hldtux/quasar-apk gradle build && find . -name '*.apk'
