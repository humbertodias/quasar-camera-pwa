pwd && ls -lha
cd src-cordova && \
pwd && ls -lha && \
cordova platform add android && \
pwd && ls -lha && \
cd platforms/android && \
pwd && ls -lha && \
gradle build && \
pwd && ls -lha && \
find . -name '*.apk'
