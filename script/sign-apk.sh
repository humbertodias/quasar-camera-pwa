#!/bin/sh

# credenciais
STORE_ALIAS=android
STORE_PASS=password

KEY_STORE=../android.keystore
KEY_PASS=$STORE_PASS

APK_UNSIGNED=platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk
APK_SIGNED=platforms/android/app/build/outputs/apk/release/app-release-signed.apk
DNAME="CN=Company, OU=Application Development, O=es.company.appname, L=Barcelona, S=Barcelona, C=ES"

# pasta de fontes
cd src-cordova

# add android
cordova platform add android

# clean
cordova clean android

# para threejs com webgl
# cordova plugin add cordova-plugin-crosswalk-webview

# android
cordova platform add android

# para gerar a versa/Users/cex/Downloads/android.keystore release
#cordova build android --release
cordova build android --release -- --keystore="$KEY_STORE" --storePassword=$STORE_PASS --alias=$STORE_ALIAS

# gerar senao existir anterior
if [ ! -f $KEY_STORE ]; then

# gerar chave
keytool -v \
-genkey \
-keystore $KEY_STORE \
-alias $STORE_ALIAS \
-keyalg RSA \
-keysize 2048 \
-validity 10000 \
-dname "$DNAME"<<EOF
$STORE_PASS
$STORE_PASS
$STORE_PASS
$STORE_PASS
EOF

fi

# assinando apk
jarsigner -verbose \
-certs \
-keystore $KEY_STORE \
-storepass $STORE_PASS \
-keypass $KEY_PASS \
$APK_UNSIGNED \
$STORE_ALIAS

# verificando assinatura no jar
jarsigner -verify \
-verbose \
-certs \
$APK_UNSIGNED

rm $APK_SIGNED

zipalign -v 4 \
$APK_UNSIGNED \
$APK_SIGNED

echo "SIGNED FILE: $APK_SIGNED"

# Hash com a assinatura
keytool -printcert -jarfile "$APK_SIGNED"
