#!/bin/bash

export QENV="${1:-local}"
echo "QENV=$QENV"

config_xml_add_preferences(){
sed '/widget>/d' config.xml > config-tmp.xml
cat <<EOF >>config-tmp.xml
    <preference name="hostname" value="localhost" />
    <preference name="AndroidInsecureFileModeEnabled" value="true" />
</widget>
EOF
mv config-tmp.xml config.xml
}

# Cordova
npm install

CORDOVA_ID=org.cordova.quasar.app
echo $CORDOVA_ID | quasar mode add cordova -y

# Android - Configure
cd src-cordova
cordova platform add android
cordova requirements
config_xml_add_preferences

# Android - Build
cd ..
quasar build -m android
cd src-cordova/platforms/android
./gradlew build --info
find . -name '*.apk'
