#!/bin/bash

QENV=${1:-local}
docker run -e QENV=local \
           -v $(pwd):/tmp/quasar-workdir \
           -w /tmp/quasar-workdir \
           hldtux/quasar-apk bash -c "npm install && \
                                      quasar build -m cordova -T android --debug && \
                                      cd src-cordova && \
                                      cordova plugin add https://github.com/humbertodias/cordova-plugin-sendkeystrokes.git && \
                                      cordova build android"
