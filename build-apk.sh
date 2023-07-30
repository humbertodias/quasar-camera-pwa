#!/bin/bash

npm install && \
quasar build -m cordova -T android --debug && \

cd src-cordova && \
cordova plugin add https://github.com/keilyn3d/cordova-plugin-sendkeystrokes.git && \
cordova build android
