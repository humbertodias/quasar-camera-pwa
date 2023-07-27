create-keystore:
	keytool -genkey -v -keystore android.keystore -alias android -keyalg RSA -sigalg SHA1withRSA -keysize 2048 -validity 10000

quasar-apk:
	docker build . -f Dockerfile.apk -t quasar-apk
	docker tag quasar-apk hldtux/quasar-apk
	docker push hldtux/quasar-apk
