# stadys
private stady

개인공부용 공간입니다.

git 사용법

명령어

git init 


git clone (레포지토리 주소)
기존 소스 코드 다운로드/복제

git clone /로컬/저장소/경로
로컬 저장소 복제

git clone 사용자명@호스트:/원격/저장소/경로
원격 서버 저장소 복제

git add
커밋에 단일 파일의 변경사항을 포함

git add -A
커밋에 파일의 변경 사항을 한번에 모두 포함

git commit -m "커밋 메시지"
커밋 생성

git branch 
브랜치 목록

git branch <브랜치이름>	
새 브랜치 생성 (local로 만듦)

git checkout -b <브랜치이름>	
브랜치 생성 & 이동

git checkout master	
master branch로 되돌아 옴

git branch -d <브랜치이름>	
브랜치 삭제

git push origin <브랜치이름>	
만든 브랜치를 원격 서버에 전송

git push -u < remote > <브랜치이름>	
새 브랜치를 원격 저장소로 push

git pull < remote > <브랜치이름>	
원격에 저장된 git 프로젝트의 현재 상태를 다운받고 + 현재 위치한 브랜치로 병합

git push origin master
변경사항 원격 서버에 업로드

git push < remote > <브랜치이름>
커밋을 원격 서버에 업로드

git push -u < remote > <브랜치이름>	
커밋을 원격 서버에 업로드

$ git remote add origin <등록된 원격 서버 주소>	
클라우드 주소 등록 및 발행

(git에게 새로운 원격 서버 주소 알림)
$ git remote remove <등록된 클라우드 주소>	
클라우드 주소 삭제

$ git pull	
원격 저장소의 변경 내용이 현재 디렉토리에 가져와지고(fetch) 병합(merge)됨

$ git merge <다른 브랜치이름>	
현재 브랜치에 다른 브랜치의 수정사항 병합

$ git add <파일명>	
각 파일을 병합할 수 있음

$ git diff <브랜치이름><다른 브랜치이름>
변경 내용 merge 전에 바뀐 내용을 비교할 수 있음

$ git log
현재 위치한 브랜치 커밋 내용 확인 및 식별자 부여됨

$ git checkout -- <파일명>	
로컬의 변경 사항을 변경 전으로 되돌림

$ git fetch origin	
원격에 저장된 git프로젝트의 현 상태를 다운로드
