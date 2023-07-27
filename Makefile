create-keystore:
	keytool -genkey -v -keystore android.keystore -alias android -keyalg RSA -sigalg SHA1withRSA -keysize 2048 -validity 10000

android-build:
#	docker build - < Dockerfile.android -t android-sdk
	docker build - < Dockerfile.apk -t android-sdk
