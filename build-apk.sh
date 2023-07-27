pwd
cd src-cordova && \
pwd && \
cordova build android && \
pwd && \
cd platforms/android && \
pwd && \
gradle build && \
pwd && \
find . -name '*.apk'
