laravel을 백으로만 사용시 route에서 api만을 사용하게 된다.

![image](https://user-images.githubusercontent.com/51111836/163904437-671ccca6-3da8-499f-ba36-3c9911633efc.png)

컨트롤러를 사용해야하기에 이처럼 import 해와야한다.

![image](https://user-images.githubusercontent.com/51111836/163904323-f24f969f-a711-4391-af8e-b613c579eff2.png)

만일 조건에 따라서 표시되게 하고 싶다면 group을 만들어서 그 안에 route들을 넣어주면 된다.

DB를 생성해주는 migration는 기존과 동일하다.

back에서 define할 경우에는 app/config/constants.php에서 선언해주면된다

