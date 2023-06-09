컴파일 옵션은 makefile 내부에 있습니다

외부 라이브러리는 
openssl  https://www.openssl.org/
cryptopp https://www.cryptopp.com/
두개입니다.

cryptopp 라이브러리 적용법
라이브러리 받아서
mkdir cryptopp && cd cryptopp
unzip cryptopp870.zip
make static dynamic cryptest.exe
make libcryptopp.a libcryptopp.so cryptest.exe
sudo make install PREFIX="라이브러리 경로"

secp256k1만 되게 만들었고 HEX타입에만 작동하게 만들어졌습니다 