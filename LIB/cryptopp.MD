윈도우는 vcpkg쓰면 편하다

리눅스는
mkdir cryptopp && cd cryptopp
unzip cryptopp870.zip
make static dynamic cryptest.exe
make libcryptopp.a libcryptopp.so cryptest.exe
sudo make install PREFIX="라이브러리 경로"
이거하면됨
