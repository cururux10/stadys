https://www.openssl.org/source/ 여기서 다운로드

압출풀고 환경변수 설정

vc++ 디렉터리

일반
포함 디렉터리에 
C:\Program Files\OpenSSL-Win64\include 이런식으로

라이브러리 디렉터리에
C:\Program Files\OpenSSL-Win64\lib\VC
C:\Program Files\OpenSSL-Win64\lib

링커>>입력
추가종속성에

libcrypto64MD.lib
libcrypto64MDd.lib
libcrypto64MT.lib
libcrypto64MTd.lib
libssl64MD.lib
libssl64MDd.lib
libssl64MT.lib
libssl64MTd.lib
capi.lib
dasync.lib
ec_internal_test.lib
libapps.lib
libcrypto.lib
libcrypto_static.lib
libssl.lib
libssl_static.lib
libtestutil.lib
openssl.lib
ossltest.lib
padlock.lib
추가
