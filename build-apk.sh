npm install && \
quasar build -m cordova -T android && \

cd src-cordova && \
cordova plugin add https://github.com/keilyn3d/cordova-plugin-sendkeystrokes.git && \
cordova build android && \

find . -name '*.apk'
