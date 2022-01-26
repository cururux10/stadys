웹프로그래밍 공부하는 공간입니다


Apachi 2.4 설치법
1. 먼저 https://www.apachelounge.com/download/에서 64bit Apache 2.4를 다운로드합니다.
2. 다운로드한 파일의 압축을 해제합니다. 경로는 C:/ 로 설정하여 최종적으로 C:/Apache24로 설정하였습니다.
3. Apache24/conf 에 있는 httpd.conf 파일을 메모장으로 열어줍니다.
4. 환경설정 - 기본적으로 본인이 설치한 PC에 맞게 변경합니다.
    ![img1 daumcdn](https://user-images.githubusercontent.com/51111836/151098157-089c8e1d-eb8f-4f37-ae40-a10e94cd64ed.png)
이후 Listen과 DocumentRoot를 확인합니다.

기본적으로 Listen은 80으로 설정되어있고, DocumentRoot는 C:/Apache24의 htdocs 폴더로 지정되어있습니다.

※ 만약 The requested operation has failed 오류가 나온다면 80을 다른 번호(85나 8080 등등)로 바꾸시면 해결될 수 있습니다.

![img1 daumcdn](https://user-images.githubusercontent.com/51111836/151098206-63b4c197-3ef6-4eae-b8c9-08577ad6ace0.png)

![img1 daumcdn](https://user-images.githubusercontent.com/51111836/151098213-ff3cfc0d-b9a5-44c3-99d4-e8f051156c92.png)

다음으로 명령프롬프트를 관리자모드로 실행합니다.

명령 프롬프트 창에서 해당 경로로 이동한 후 설치를 진행합니다.

cd C:/Apache24/bin

httpd.exe -k install

※ 만약 "vcruntime140.dll 파일이(가) 없어 프로그램을 시작할 수 없습니다. 프로그램을 다시 설치하여 이 문제를 해결하십시오." 메세지가 뜰 경우 VC_redist.x64 (visual C++)를 설치해주셔야 합니다.

※ Apache 서버를 삭제하고 싶으시다면 httpd.exe -k uninstall 로 삭제해주시면 됩니다!

Apache 서버를 실행시키기 위해서 C:/Apache24/bin 폴더로 이동하여 ApacheMonitor를 실행시켜줍니다.

※ ApacheMonitor 창이 바로 켜지지 않고 우측 하단의 작업표시줄에서 직접 열으셔야 합니다.
빨간색으로 서버가 꺼져있으면 start를 눌러서 서버를 켜줘야합니다

![img1 daumcdn](https://user-images.githubusercontent.com/51111836/151099142-5d6f7bc5-c221-4523-a67d-9d9c6ce08a54.png)

5. http://localhost 주소를 입력하여 실행이 잘 되는지 확인합니다.

![img1 daumcdn](https://user-images.githubusercontent.com/51111836/151099183-28fd8321-5626-46a9-8ba4-21ab4c48768e.png)

PHP 7.4 설치법 

1. 먼저 https://windows.php.net/download/ 에서 PHP 7.4.6을 다운로드합니다.

※ 다운로드 전에 본인 PC에 맞는 Zip 파일을 다운로드해야 합니다.

Version	Server
VC15 x86 Non Thread Safe	32bit IIS 서버
VC15 x86 Thread Safe	32bit 아파치(Apache) 서버
VC15 x64 Non Thread Safe	64bit IIS 서버
VC15 x64 Thread Safe	64bit 아파치(Apache) 서버
 

간단한 설명을 덧붙이자면

TS(Thread Safe) 버전
Multithread capable builds ( 다중 스레드 가능 빌드 )
Multithreaded SAPI(Server API) / PHP 를 Web Server에 업로드할 경우
Apache 웹서버 위에 PHP를 사용하는 경우
NTS(Non-Thread Safe) 버전
Single thread only builds ( 단일 스레드 전용 빌드 )
FastCGI protocol를 이용하여 Web Server에 업로드할 경우
IIS 웹서버 위에 FastCGI로 PHP를 사용하는 경우
와 같은 설명을 볼 수 있습니다. ( download 사이트 좌측에 기재 )

 

저는 Apache 64bit 웹서버 위에 사용하기 때문에 VC15 x64 Thread Safe를 다운로드했습니다.

이후 C:/ 의 경로에 php7이라는 폴더를 생성하여 이곳에 압축 해제하였습니다.

![img1 daumcdn](https://user-images.githubusercontent.com/51111836/151100015-feb33045-3d52-48cb-93f2-d6896ba02156.png)

2. php7 폴더에서 php.ini-development 의 extension_dir의 경로를 C:/php7/ext로 변경하여 php.ini로 저장합니다.

![img1 daumcdn](https://user-images.githubusercontent.com/51111836/151100031-15ca1e09-ac10-4cf1-9762-e149f37db227.png)

3. Apache24의 httpd.conf 파일에서 몇 가지를 수정합니다.

![img1 daumcdn](https://user-images.githubusercontent.com/51111836/151100049-7e72b2d6-9a02-4ae3-bf97-8833bd1db8ab.png)
