#!/bin/bash

change_app_version(){
  BRANCH=`git rev-parse --abbrev-ref HEAD`
  REV=`git rev-parse --short HEAD`
  jq ".version=\"$BRANCH:$REV\"" package.json > /tmp/package.json && \
  mv /tmp/package.json package.json
}

QENV="${1:-local}"

SCRIPT_PATH=`readlink -f "$0"`
SCRIPT_DIR=`dirname "$SCRIPT_PATH"`
PROJECT_DIRNAME=`readlink -f $SCRIPT_DIR/../src-cordova/platforms/android`

pwd && \
echo $SCRIPT_DIRNAME && \
echo $PROJECT_DIRNAME && \
ls -lha && \
change_app_version && \
docker run -e QENV=$QENV \
-v $PROJECT_DIRNAME:/tmp/android \
-w /tmp/android \
hldtux/quasar-apk gradle build && find . -name '*.apk'
