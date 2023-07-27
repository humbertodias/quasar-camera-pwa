create-keystore:
	keytool -genkey -v -keystore android.keystore -alias android -keyalg RSA -sigalg SHA1withRSA -keysize 2048 -validity 10000

android-sdk:
	docker build . -f Dockerfile.apk -t android-sdk

deploy-apk: android-sdk
  docker run -v .:/tmp/app -w /tmp/app -it android-sdk bash ./script/deploy-apk-local.sh
