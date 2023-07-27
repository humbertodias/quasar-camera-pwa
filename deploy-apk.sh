#!/bin/bash

QENV="${1:-local}"
docker build - < Dockerfile.apk -t android-sdk
docker run -v .:/tmp/app -w /tmp/app -it android-sdk bash /tmp/app/script/deploy-apk-local.sh $QENV

