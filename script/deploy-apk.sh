#!/bin/bash

change_app_version(){
  BRANCH=`git rev-parse --abbrev-ref HEAD`
  REV=`git rev-parse --short HEAD`
  jq ".version=\"$BRANCH:$REV\"" package.json > /tmp/package.json && \
  mv /tmp/package.json package.json
}

QENV="${1:-local}"
APP_DIR=$(realpath ..)
echo $APP_DIR
cd $APP_DIR && \
change_app_version && \
docker run -e QENV=$QENV -v $APP_DIR:/tmp/app hldtux/quasar-apk
