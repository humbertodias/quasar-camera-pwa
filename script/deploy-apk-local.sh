#!/bin/bash

export QENV="${1:-local}"
echo "QENV=$QENV"

# Cordova
npm install --no-audit

# Android - Configure
#export JAVA_OPTS='-XX:+IgnoreUnrecognizedVMOptions --add-modules java.xml.bind'
cd src-cordova
cordova requirements android

# Android - Build
cd platforms/android
gradle build
find . -name '*.apk'
