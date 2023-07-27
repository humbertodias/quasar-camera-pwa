pwd
cd src-cordova && \
cordova build android && \
cd platforms/android && \
gradle build && \
find . -name '*.apk'
