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
PROJECT_DIR=`readlink -f $SCRIPT_DIR/../src-cordova/platforms/android`

pwd
echo "SCRIPT_DIR=$SCRIPT_DIR"
echo "PROJECT_DIR=$PROJECT_DIR"
ls -lha


change_app_version && \
docker run -e QENV=$QENV \
-v $PROJECT_DIR:/tmp/android \
-w /tmp/android \
hldtux/quasar-apk gradle build && find . -name '*.apk'
