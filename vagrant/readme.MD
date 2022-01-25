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
맥의 경우 etc/hosts라고 한다. 직접해보지 않아서 확실하지 않다.

![주석 2022-01-25 151857](https://user-images.githubusercontent.com/51111836/150921886-951b0dd8-52f8-457f-9da5-97042f55e7c0.png)

#부분은 주석처리부분이고 실제로 사용되는 부분은 가장 끝 2줄이다.

그리고 보다시피 호스트 ip는 여기서 사용됨을 알 수 있다.

여기까지 하면 기본 준비가 끝난 것이다. 이제 실제로 가동해 볼것인데

가동 명령어는
vagrant up      //실행
vagrant suspend //일시정지
vagrant halt    //종료
이고 추가로 SSH연결을 해야 비로소 연결이되는데 이것의 명령어는 2개로
vagrant ssh

ssh vagrant@"호스트 ip" (여기서는 ssh vagrant@192.168.56.56)

이다

이를 한번에 bat파일로 묶을 수 있는데
메모장이든 vscode든 아무것이나 사용하여 [파일명].bat의 형식으로 만들어주고

내용은

@ECHO ON                      //커멘드 입력부분의 현제 디렉토리를 표시할 것인이 여부로 없어도 된다
cd c:\Users\sjlee\homestead   //현제 자신이 homestead를 지정해둔 dir로 이동하는 명령어
vagrant up                    //실행
vagrant ssh                   //ssh 입력

으로 채우면 된다.

이것의 실행은 call명령어로 실행하며 call [파일명].bat의 형식이다.

실행에 성공하면 다음과 같이 나온다

![주석 2022-01-25 154240](https://user-images.githubusercontent.com/51111836/150925053-9639441f-4153-4743-a9af-628cf2fd7481.png)

여기서 부터는 ubuntu기반으로 가동되고 있으므로 리눅스 명령어를 사용하면 된다.
이제 새로운 프로잭트를 생성하고 싶다면 다음 명령어를 치면 설치하며 생성되는데 
그 전에 code dir로 이동하고 생성해주자 homestead.yaml파일에서 위치지정을 home/vagrant/code로 해두었기 때문이다

laravel new [생성하고자하는 프로잭트명] (예시 laravel new testset)

이렇게 명령어를 쳐주면 설치를 시작하며 설치가 완료되면 다음과 같이 프로잭트가 생성된다.

![주석 2022-01-25 155301](https://user-images.githubusercontent.com/51111836/150926223-3820c73a-f24e-484f-9415-d084560e30be.png)


dir 내부는 이렇게 구성되어있다.

![주석 2022-01-25 155440](https://user-images.githubusercontent.com/51111836/150926425-14a72cdf-f5d6-41d1-8a2c-1cb3ae4e7689.png)

이제 npm를 install할 것인데 오류가 생길 수 있다. npm install 명령어를 사용할 것인데 지금환경에서는 이처럼 오류가 난다.

![주석 2022-01-25 155700](https://user-images.githubusercontent.com/51111836/150926782-e176f859-e06c-432d-b209-620e624a7edd.png)

이 현상의 원인은 VM box의 보안상의 이유로 shared folder 에 대해 symbolic link를 지원하지 않기 때문인데

이를 해결하기위해 다음과 같이 옵션을 변경해 줄것이다. 
alias npm='npm --no-bin-links $*'

이 옵션은 심볼릭 링크를 제거하는 옵션이다.

![주석 2022-01-25 160424](https://user-images.githubusercontent.com/51111836/150927584-5cb3b19b-8981-471b-97f6-2c56aeaf6844.png)

이렇게 된다.
