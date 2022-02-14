0. 리눅스 기반으로 실행할것이므로 VM BOX, vagrant, homestead, git 등등이 필요하다. <br>
<br>
1. 이더리움을 root폴더로 사용할 폴더를 하나 만들고 이동한다 <br>
2. git clone https://github.com/ethereum/go-ethereum.git<br>
3. go-ethereum의 소스를 성공적으로 받아왔으면 go-ethereum폴더가 생기게 된다<br>
4. sudo apt-get install -y build-essential golang 이 명령어를 입력해서 필수 라이브러리를 다운받고<br>
5. make all로 빌드를 하도록한다.<br>
6. build/bin으로 이동하여 geth version을 입력하여 다음고 같이 나오면 성공<br>
![1_ZPtLmnkh_lRFVNdmCjSV2w](https://user-images.githubusercontent.com/51111836/153562976-db256734-348b-4a9d-9bfa-b95c0c64e035.png)
7. 여기서 바로 나가지말고 pwd로 현재 경로를 기억해두고 cd로 메인으로 나가서 .bash_profile의 내용에<br>
  GETH=/home/blockchain/ethereum/go-ethereum <br>
  PATH="$PATH:$GETH/build/bin"                <br>
이와 같은 형식으로 만드는데 이경우에는 pwd에서 나온 내용이 /home/blockchain/ethereum/go-ethereum/build/bin이렇게 되어 있을 것이다.<br>
8. source ~/.bash_profile 명령어를 쳐서 글로벌환경변수로 적용시켜주면 기본 설치가 끝나게 된다<br>




터미널 여는 법 <br>
 geth --networkid 1004 --datadir test1 --nodiscover --port 30303 --http --http.port "8545" --http.addr "0.0.0.0" --http.corsdomain "*" --http.api "admin,db,eth,debug,miner,net,shh,txpool,personal,web3" console
<br>

순서대로 설명하면<br>
networkid      네트워크 식별자로 genesis.json에 작성한 chainId와 동일하게 셋팅하면 된다<br>
datadir     데이터의 경로이다 다음으로 나오는 인수에 열고자하는 geth데이터의 디렉토리를 입력하면된다.<br>
nodiscover    생성자의 노드를 다른 노드에서 검색할 수 없게 하는 옵션<br>
http      HTTP RPC Server호스트를 의미 지금 옵션 이전에는 rpc를 사용하였다<br>
http.port      HTTP RPC 포트를 의미한다 이전에는 rpcport를 사용하였다. 디폴트값은 8545<br>
http.addr      HTTP-RPC 서버 IP 지정 . 디폴트 "localhost" "0.0.0.0" 지정하면 제한없이 허용 이전에는 rpcaddr였다<br>
http.corsdomain     HTTP-RPC 기능 허용 IP 리스트 "*" 지정하면 제한없이 모든 IP 허용<br>
http.api    rpc 허용 명령어 . 디폴트 "eth,net,web3" 즉, 콘솔에서 보여줄 api목록이다 <br>
<br>
console    자바스크립트 콘솔을 연다<br>
--maxpeers : 피어를 연결할 최대 허용치<br>
<br>
주의!<br>
nohup 옵션 이것은 조심해야한다 터미널을 끄더라고 geth가 계속 가동되게하는 옵션으로 이것을 끌려면 kill을 해주어야한다.<br>

allow-insecure-unlock<br>
계정 잠금 해지 허용 <br>
http로 모든 사용자가 계정을 엑세스 할수 있게 되어<br>
보안상 문제가 될수 있음.<br>
테스트할때만 사용하길 권장.<br>

&	실행 명령어 끝에 위치하며 백그라운드 모드 수행.<br>



geth 콘솔 명령어 <br>

계정 생성<br>
personal.newAccount(“pass00”)<br>
코인 베이스 처음 생성한 계정으로 자동으로 연결된다.<br>
eth.coinbase<br>
계정이 가진 잔액 확인 인수에 eth.account[0]를 넣으면 현재 계정의 주소값을 반환해주는 것이다<br>
eth.getBalance(“0x95d02ef6f14f7b8a4c162dbc0aa64043cad86a75”)<br>
채굴시작 인수는 수행할 쓰레드의 수<br>
miner.start(1)<br>
채굴정지 바로 정지되지 않을경우 아직 진행중인 프로세스가 있어서 그렇다<br>
miner.stop() <br>


