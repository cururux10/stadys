vagrant 사용법관련 영역입니다. ubuntu 기반의 VM으로 여기서는 오라클의 VM box를 사용하였습니다.

필요한 프로그램
  git
  VM box
  vagrant
  
  환경구성
  
 vagrant box add laravel/homestead
 
 를 입력하고 나오는 선택지에서 사용하고자하는 것을 고릅니다.
 ![image](https://user-images.githubusercontent.com/51111836/150918718-88f01580-d669-43e5-ad09-f840d010f6e6.png)
 
 프로그램창에서 git bash를 눌러 깃을 켜주고 명령어
 
 git clone https://github.com/laravel/homestead.git Homestead
                                                        ^ (이부분은 없어도 됩니다 폴더명을 정해주는 것이기 때문) 
 
 를 입력해줍니다.
 
 git bash에서 생성된 dir로 이동해주고 
 
 명령어
 
 bash init.sh
 
 를 실행시켜 이니셜라이징을 해줍니다.

이제 사용할 가상머신의 설정을 손볼것입니다.

먼저 SSH를 생성해줄것입니다.
git bash에서 생성하며 명령어는

ssh-keygen -t rsa -C "이메일 주소"

![주석 2022-01-25 145857](https://user-images.githubusercontent.com/51111836/150919815-ee7bee4c-aaab-44bd-a51e-e7dbe0058790.png)

이와 같이 나오며 키이름과 비밀번호를 입력해 달라고 나오고 생성완료시 개인키와 공용키가 한쌍으로 생성된다.

homestaed dir의 homestead.yaml을 열어(메모장 비주얼코드 관계없음)
![주석 2022-01-25 150258](https://user-images.githubusercontent.com/51111836/150920181-6b502f2c-4d42-4c35-a51b-0110a5eba30c.png)

위에서 부터 ip는 호스트 ip로 중요하니 기억해 두자

앞에서 생성한 SSH를 사용할것인데

authorize는 공용키를 keys는 개인키를 저장할 것이다.

지정형식은 키파일의 정확한 위치이다. 여기서 ~표시는 home 즉 cd명령어를 입력했을 때 이동되는 dir를 의미한다. 앞으로 이dir을 home dir이라 칭하겠다.

(위에 사진에서 ssh키가 윗윗단의 사진에서의 이름이 다른데 여기서 사용한키는 미리 만들어둔키 이기 때문이다)

folders는 실제로 파일이 공유되는 부분으로 초기에 ~/code로 되어있는데 이것을 위해서 home dir에 code라는 이름의 dir 하나 생성해준다.

다음은 sites로 도메인을 설정하는 부분이다 도메인은 위사진처럼 여러개가 될수있으며 만일 여러개를 만들경우 반드시 표기형식에 맞춰 생성해 주어야한다.
- map: 도메인으로 사용할 주소
  to: /ome/vagrant/Code/Laravel/public
의 형식이다.

그냥 막입력한다고 연결되는 것은 아니다. 연결할 host가 존재해야하므로  윈도우의 경우 C:\Windows\System32\drivers\etc\hosts의 파일을 열어 다음과 같이 등록해주어야한다.
![주석 2022-01-25 151857](https://user-images.githubusercontent.com/51111836/150921886-951b0dd8-52f8-457f-9da5-97042f55e7c0.png)

#부분은 주석처리부분이고 실제로 사용되는 부분은 가장 끝 2줄이다.
