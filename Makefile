.PHONY: run-it

create-keystore:
	keytool -genkey -v -keystore android.keystore -alias android -keyalg RSA -sigalg SHA1withRSA -keysize 2048 -validity 10000

build-push:
	DOCKER_DEFAULT_PLATFORM=linux/amd64 \
  docker build . -f Dockerfile.apk -t quasar-apk && \
	docker tag quasar-apk hldtux/quasar-apk && \
	docker push hldtux/quasar-apk

run-it:
	docker run -it -e QENV=local \
  	-v `pwd`:/tmp/quasar-workdir \
  	-w /tmp/quasar-workdir \
  	hldtux/quasar-apk bash

clean:
	npm run clean && cd src-cordova && npm run clean
