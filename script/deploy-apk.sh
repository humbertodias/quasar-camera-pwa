#!/bin/bash

QENV="${1:-local}"
docker run -v $(pwd)/..:/tmp/app -w /tmp/app hldtux/quasar-apk bash build-apk.sh $QENV
