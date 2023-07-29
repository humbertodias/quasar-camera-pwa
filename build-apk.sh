ANDROID_VERSION=${1:-latest}
pwd && ls -lha

cd src-cordova && \
pwd && ls -lha

cordova platform add android@$ANDROID_VERSION
pwd && ls -lha && \
cd platforms/android && \
pwd && ls -lha && \
gradle build

pwd && ls -lha && \
find . -name '*.apk'
