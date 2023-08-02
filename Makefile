.PHONY: run-it

create-keystore:
	keytool -genkey -v -keystore android.keystore -alias android -keyalg RSA -sigalg SHA1withRSA -keysize 2048 -validity 10000

run-it:
	docker run -it -e QENV=local \
  	-v `pwd`:/home/quasar/workdir \
  	-w /home/quasar/workdir \
  	hldtux/quasar-android-builder bash

clean:
	npm run clean && cd src-cordova && npm run clean
